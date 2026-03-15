# Test Isolation for Free with SQLite

March 3, 2026 ·

<!-- -->

9 min read

![Dave Rapin](https://avatars.githubusercontent.com/u/1202?v=4)

Dave Rapin

Founder @ Curling IO

Most web frameworks treat test database isolation as a hard problem. Rails has `database_cleaner` with three strategies. Django wraps every test in a transaction it rolls back. Phoenix does the same with its SQL sandbox. They all exist because tests share a single database server, and that shared state is the root of flaky tests and ordering dependencies, the kind where a test passes alone but fails in the suite.

Curling IO Version 3 doesn't have this problem. Each test gets its own database. Not a transaction. Not a truncated copy. A completely independent in-memory SQLite database, cloned from a template in microseconds using SQLite's backup API.

## The Shared Database Problem[​](#the-shared-database-problem "Direct link to The Shared Database Problem")

In a traditional Postgres or MySQL test setup, every test talks to the same database server. You need a strategy to keep tests from contaminating each other:

**Transaction rollback.** Wrap each test in a transaction, roll it back at the end. Works until your code uses transactions internally, or spawns processes that need to see the test data (the classic Ecto sandbox problem).

**Truncation.** Delete all rows from every table between tests. Slow, and you need to get the table ordering right to avoid foreign key violations.

**Database cleaner.** A gem/library that combines both strategies with configuration for which tables to clean, which strategy to use, and when. It works, but it's ceremony that exists purely because of the shared database.

All of these are workarounds for the same architectural constraint: one database server, many tests.

## In-Memory SQLite: One Database Per Test[​](#in-memory-sqlite-one-database-per-test "Direct link to In-Memory SQLite: One Database Per Test")

SQLite opens a database by passing a file path. Pass `:memory:` instead and you get an in-memory database that exists only for the lifetime of that connection. It's fast (no disk I/O) and completely isolated. Nothing else can see it, and closing the connection frees everything.

Our test setup function:

```
pub fn setup() -> sqlight.Connection {
  let assert Ok(conn) = sqlight.open(":memory:")
  let assert Ok(_) = sqlight.exec("PRAGMA foreign_keys=ON;", conn)
  let assert Ok(_) = sqlight.exec(schema_sql, conn)
  conn
}
```

The `schema_sql` variable contains the contents of `db/schema.sql`, which is regenerated from migrations by `bin/reset`. This means tests always use the current schema without anyone remembering to update them.

Every test calls `setup()`, gets a fresh database with the full schema, inserts whatever test data it needs, and runs its assertions. When the test ends, the connection is garbage collected and the database disappears. There's nothing to clean up.

```
pub fn should_reject_duplicate_registration_test() {
  let conn = test_db.setup()
  // Insert test-specific data
  insert_org(conn, test_org())
  insert_listing(conn, test_listing())
  // ... test logic, assertions
  // conn goes out of scope, database vanishes
}
```

There's no possible cross-contamination because there's nothing shared. Test A and test B literally operate on different databases. You can run them in parallel on BEAM processes without any coordination.

## The Schema Execution Cost[​](#the-schema-execution-cost "Direct link to The Schema Execution Cost")

This approach has an obvious cost: every test executes the full schema. For us that's 77 `CREATE TABLE`, `CREATE INDEX`, and `CREATE VIEW` statements. We profiled it:

* Opening an in-memory SQLite database: **15 microseconds**
* Executing 77 schema statements: **1,100 microseconds** (1.1 ms)

At 1.1 ms per test across \~500 tests that need a database, that's about 550 ms of schema execution. Not terrible, but not free either. And it scales linearly with both the number of tests and the size of your schema.

## SQLite's Backup API: Page-Level Cloning[​](#sqlites-backup-api-page-level-cloning "Direct link to SQLite's Backup API: Page-Level Cloning")

SQLite has a [backup API](https://www.sqlite.org/backup.html) designed for copying databases between connections. It operates at the page level: it doesn't re-parse or re-execute SQL, it copies raw database pages from one connection to another.

The idea: build the schema once in a template database, then clone it per test.

```
Once at startup:  open(":memory:") → execute full schema → template
Per test:         open(":memory:") → backup_copy(template) → ready
```

The backup API is three calls: `backup_init` (set up the copy), `backup_step` with `-1` (copy all pages in one shot), and `backup_finish` (release resources).

Our Gleam SQLite driver, [sqlight](https://hexdocs.pm/sqlight/), doesn't expose the backup API. But it's built on [esqlite](https://github.com/mmzeeman/esqlite), an Erlang NIF wrapper around SQLite's C library, and esqlite exposes the full backup API. Since Gleam compiles to Erlang and runs on the BEAM, we can call Erlang libraries directly through Gleam's foreign function interface (FFI). We wrote a 12-line Erlang module that takes two sqlight connections (which are just esqlite records under the hood) and performs the clone:

```
-module(test_db_ffi).
-export([clone_db/1]).

clone_db(Template) ->
    {ok, Dest} = esqlite3:open(":memory:"),
    {ok, Backup} = esqlite3:backup_init(Dest, "main", Template, "main"),
    '$done' = esqlite3:backup_step(Backup, -1),
    ok = esqlite3:backup_finish(Backup),
    {ok, Dest}.
```

On the Gleam side, we declare the FFI binding and call it like any other function:

```
@external(erlang, "test_db_ffi", "clone_db")
fn clone_db(
  template: sqlight.Connection,
) -> Result(sqlight.Connection, Nil)
```

This is one of the nice things about the BEAM ecosystem. When your high-level driver doesn't expose what you need, the lower-level library almost always does, and the FFI boundary is trivial to cross.

The template is created once per test run and cached in BEAM's `persistent_term` (a global immutable store optimized for read-heavy access):

```
fn template_db() -> sqlight.Connection {
  case get_cached("test_template_db") {
    Ok(conn) -> conn
    Error(Nil) -> {
      let assert Ok(conn) = sqlight.open(":memory:")
      let assert Ok(_) = sqlight.exec("PRAGMA foreign_keys=ON;", conn)
      let assert Ok(_) = sqlight.exec(schema_sql, conn)
      cache("test_template_db", conn)
      conn
    }
  }
}

pub fn setup() -> sqlight.Connection {
  let assert Ok(conn) = clone_db(template_db())
  let assert Ok(_) = sqlight.exec("PRAGMA foreign_keys=ON;", conn)
  conn
}
```

The `PRAGMA foreign_keys=ON` runs after the clone because SQLite pragma settings are per-connection, not stored in the database file. It's a single statement, negligible cost.

## The Numbers[​](#the-numbers "Direct link to The Numbers")

At the time we switched to the clone method, we had 594 tests and 77 schema objects. We're still early in the rewrite and already approaching 1,000 tests. By launch we expect closer to twice the schema objects and somewhere around 5,000 tests.

Here's what we measured at 594 tests:

| Approach                      | Server test time |
| ----------------------------- | ---------------- |
| Execute full schema per test  | 3.2 s            |
| Clone template via backup API | 2.6 s            |

The schema execution cost dropped from \~550 ms to near zero. The remaining 2.6 seconds is actual test logic (inserting data, running business logic, assertions) plus BEAM VM startup overhead.

The savings become more meaningful at scale. In a traditional Postgres setup, you'd use truncation between tests, issuing `TRUNCATE TABLE` on every table, in foreign-key-safe order, over a socket to the database server. With around 100 tables and 5,000 tests (a conservative estimate for our full rewrite, realistically 2-3x the tests), that's 500,000 truncation statements hitting a database server. Even at sub-millisecond per truncate, it adds up.

With the backup approach, the clone cost is \~25 microseconds per test regardless of schema size. At 5,000 tests that's 0.125 seconds total. No truncation ordering, no socket round-trips.

For context, this is a real application test suite covering cart operations, payment processing, registration validation, affiliate fees, waivers, round robin generation, scheduling, scoring, and more. Not trivial tests.

## Why This Works So Well[​](#why-this-works-so-well "Direct link to Why This Works So Well")

The backup API is a nice optimization, but the real win is that in-process SQLite eliminates the shared database problem entirely.

With Postgres, your test process talks to a database server over a socket. Every test that writes data is writing to the same place. You need isolation strategies because the architecture demands them.

With in-process SQLite, the database lives in your process's memory. Creating a new one is a memory allocation, not a network connection. There's no server to coordinate with and no connection pool to manage. The isolation falls out of the architecture for free.

This also means:

* No test ordering dependencies. Each test is fully self-contained.
* Safe parallelism. BEAM processes each get their own database, zero coordination needed.
* No cleanup code. No `teardown`, no `after_each`, no `database_cleaner`.
* No flaky tests from shared state leaking between runs.

## Trade-offs[​](#trade-offs "Direct link to Trade-offs")

This isn't free of trade-offs. You're not testing against the same database engine you run in production... unless you also run SQLite in production, which we do. If you're using SQLite for tests but Postgres in production, you'd miss Postgres-specific behavior (custom types, advisory locks, jsonb operators, etc.).

The other trade-off is that in our setup, each test builds up its own data from scratch. In practice this is a feature (every test explicitly declares its dependencies) but it does mean more setup code per test compared to a shared fixtures approach. That said, this is a choice, not a limitation of the technique. You could just as easily insert seed data into the template database before caching it, and every clone would start with that data pre-loaded. If your test suite benefits from a well-defined set of standard users, organizations, or other reference data, seeding the template is a straightforward way to reduce per-test setup while keeping full isolation.

## This Isn't BEAM-Specific[​](#this-isnt-beam-specific "Direct link to This Isn't BEAM-Specific")

Our examples are in Gleam and Erlang, but the backup API is a C-level SQLite feature. Most languages expose it:

```
# Python 3.7+ has it built in
source = sqlite3.connect(":memory:")
source.executescript(schema_sql)

dest = sqlite3.connect(":memory:")
source.backup(dest)
```

```
// Node.js better-sqlite3
const template = new Database(":memory:");
template.exec(schemaSQL);

const dest = template.backup(":memory:");
```

```
// Rust rusqlite
let template = Connection::open_in_memory()?;
template.execute_batch(schema_sql)?;

let mut dest = Connection::open_in_memory()?;
let backup = backup::Backup::new(&template, &mut dest)?;
backup.run_to_completion(5, Duration::ZERO, None)?;
```

The pattern is the same in every language: build a template once, clone it per test via the backup API. The FFI detour we took through esqlite is only necessary because our particular Gleam driver doesn't expose it yet.

## The Full Stack[​](#the-full-stack "Direct link to The Full Stack")

Here's what our test infrastructure looks like in its entirety:

* `test_db.setup()` clones a cached template database via SQLite backup API
* `test_db.tz_db()` returns a cached timezone database (loaded once, not per test)
* `persistent_term` is BEAM's global cache for the template DB and timezone data
* 12 lines of Erlang FFI wraps the SQLite backup API

That's the entire test infrastructure. No test framework plugins, no database cleaner gems, no truncation strategies. SQLite and 12 lines of Erlang.

***

*This is Part 6 of the Curling IO Foundation series. Next up: [Parallel Tests for Free](/blog/parallel-tests-for-free.md).*

**Tags:**

* [foundation](/blog/tags/foundation.md)
* [sqlite](/blog/tags/sqlite.md)
* [testing](/blog/tags/testing.md)
* [architecture](/blog/tags/architecture.md)
