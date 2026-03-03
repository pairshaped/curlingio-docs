# Why We Chose SQLite

February 27, 2026 ·

<!-- -->

11 min read

![Dave Rapin](https://avatars.githubusercontent.com/u/1202?v=4)

Dave Rapin

Founder @ Curling IO

We assumed PostgreSQL for Version 3. After a decade running Postgres in production, why would we even consider something else? We knew the tooling, the failure modes, the operational playbook. Postgres is the safe choice for good reason.

Then we looked at what "self-hosting Postgres" actually involves, compared it to what Litestream does for SQLite, and changed our minds. This post covers the decision, the architecture, the trade-offs, and why we'd make the same call again.

## What Version 2 Runs On[​](#what-version-2-runs-on "Direct link to What Version 2 Runs On")

Curling IO Version 2 runs on Rails backed by PostgreSQL on [Crunchy Bridge](https://www.crunchydata.com/products/crunchy-bridge), a fantastic managed Postgres service. It works. Crunchy Data handles backups, failover, and tuning. We don't think about `shared_buffers` or `autovacuum` settings. We don't run pgBackRest or schedule base backups. (Crunchy Data was [acquired by Snowflake](https://www.crunchydata.com/blog/crunchy-data-joins-snowflake) in 2025, which adds another reason to reduce our dependency on third-party managed services.)

The trade-off is cost, lock-in, and jurisdiction. Crunchy Bridge is AWS-only, so the app servers have to live on AWS too. That's the full stack dependent on a single US cloud provider. We're a 100% Canadian company and we'd rather keep our infrastructure closer to home, especially given the current political uncertainty south of the border.

For Version 3, we're moving to OVH, a French-owned provider with data centers in Quebec and Ontario. All data stays in Canada. Crunchy Bridge doesn't run on OVH, so we can't bring it along. Self-hosting Postgres on OVH would mean taking on everything Crunchy handles today: connection pooling, server tuning (`shared_buffers`, `effective_cache_size`, `work_mem`, `max_connections`), autovacuum monitoring, and the full backup story (pgBackRest, WAL archiving, scheduled base backups, tested restore procedures, monitoring backup freshness). That's a lot to take on for a small organization.

## The Architecture: Database Per Sport[​](#the-architecture-database-per-sport "Direct link to The Architecture: Database Per Sport")

Version 3 uses a database-per-sport architecture. Each sport gets its own SQLite file with an identical schema:

```
db/
├── curling.db          # All curling club data
├── pickleball.db       # All pickleball club data
└── shared.db           # Cross-sport reference data, jobs, email suppressions
```

Each sport database is multi-tenant. Every table with tenant data includes an `org_id` column, and every query filters by it. Adding a new sport means creating a new database file with the same schema. No cross-sport queries, no shared-database contention.

`shared.db` holds things that span sports: Canadian tax jurisdictions (17 rows covering GST, HST, PST, and QST rates by province), the [background job queue](/blog/background-jobs-without-the-baggage.md), and email suppression lists from Postmark webhooks.

At startup, the server opens one connection per database and holds it for the lifetime of the app:

```
pub fn open(path: String) -> Result(sqlight.Connection, sqlight.Error) {
  use conn <- result.try(sqlight.open(path))
  use _ <- result.try(sqlight.exec("PRAGMA journal_mode=WAL;", conn))
  use _ <- result.try(sqlight.exec("PRAGMA busy_timeout=5000;", conn))
  use _ <- result.try(sqlight.exec("PRAGMA foreign_keys=ON;", conn))
  Ok(conn)
}
```

Three PRAGMAs on every connection: WAL mode for concurrent reads, a 5-second busy timeout so writes queue instead of failing immediately, and foreign key enforcement (which SQLite disables by default).

One connection per database. No connection pool. No pool configuration. Each incoming HTTP request gets the sport-specific connection (resolved from the hostname) plus the shared connection.

## Why In-Process SQLite[​](#why-in-process-sqlite "Direct link to Why In-Process SQLite")

SQLite runs inside the application process. There's no socket, no TCP round-trip, no serialization between the app and the database. A query is a function call.

Our workload is primarily simple indexed lookups: single-row fetches by primary key, filtered lists by `org_id`, a handful of line items joined to an order. SQLite handles tens of thousands of write transactions per second, far beyond what 1,000+ curling clubs will generate. Even during peak registration or when a provincial championship is posting live scores, the load profile is overwhelmingly reads with occasional write bursts.

The cost follows from the architecture. No separate database server means no database hosting bill. The entire v3 stack runs on a single server for less than what managed Postgres alone costs on AWS.

## WAL Mode and Concurrency[​](#wal-mode-and-concurrency "Direct link to WAL Mode and Concurrency")

WAL (Write-Ahead Logging) is what makes SQLite viable for a concurrent web application. Without it, any write locks the entire database for both readers and writers. With WAL, readers proceed concurrently with writes. On the BEAM, where hundreds of lightweight processes might query simultaneously during a traffic spike, this is essential.

Writes are still serialized. One writer at a time, coordinated by a mutex in the SQLite library. If the write lock can't be acquired within the 5-second busy timeout, SQLite returns `SQLITE_BUSY`. With our read-heavy workload, write contention hasn't been a practical concern. This is why we use a [separate database for background jobs](/blog/background-jobs-without-the-baggage.md). Job processing writes to `shared.db`, not the sport databases, so it never contends with registration queries. With SQLite's single-writer model, separating write-heavy workloads into different files is a real architectural consideration, not just organization.

## Litestream: The Tipping Point[​](#litestream-the-tipping-point "Direct link to Litestream: The Tipping Point")

This is what tipped the scales.

SQLite is a file. [Litestream](https://litestream.io) watches that file and continuously replicates its WAL frames to S3-compatible object storage. For us, that's OVH Object Storage in two different geographic locations in Canada. Changes sync every 10 seconds to both.

The configuration is one YAML file:

```
dbs:
  - path: /var/lib/curling-io/databases/curling.db
    replicas:
      - type: s3
        bucket: xxxxx
        endpoint: xxxxx
        sync-interval: 10s
      - type: s3
        bucket: xxxxx
        endpoint: xxxxx
        sync-interval: 10s
```

Recovery is one command:

```
litestream restore -o /path/to/curling.db s3://xxxxx/curling.db
```

That produces a ready-to-use database file. Copy it to the right path, start the app.

Now compare that to self-hosting PostgreSQL backup and recovery:

1. Install pgBackRest
2. Configure a stanza, set `archive_mode` and `archive_command` in `postgresql.conf`
3. Schedule base backups via cron
4. Monitor backup success, WAL retention, and disk usage
5. Periodically test restores (because an untested backup isn't a backup)
6. When disaster strikes: stop PostgreSQL, run `pgbackrest restore --type=time --target="..."`, wait for WAL replay, verify the recovery point, promote to primary

PostgreSQL gives you something Litestream doesn't: exact transaction-level point-in-time recovery. You can roll back to any specific transaction. Litestream gives you "latest snapshot plus WAL frames," which means a worst-case recovery gap of about 10 seconds. For our use case that's more than sufficient.

The operational gap is where it gets decisive. Litestream is one binary, one config file, near-zero ongoing maintenance. PostgreSQL backup is a practice, something you rehearse, monitor, and maintain over the life of the project. Even with perfect tooling, you can't reduce "restore a running server's state" to "download a file and start the app." That gap is architectural. It won't close with better Postgres tooling because the complexity is inherent to backing up a running server process.

The simplicity ceiling for SQLite backup is fundamentally higher than what's possible for any client-server database.

## The SQLite Tax[​](#the-sqlite-tax "Direct link to The SQLite Tax")

Here's what we pay for that simplicity. Every item below is something PostgreSQL handles natively.

### No Real Types[​](#no-real-types "Direct link to No Real Types")

SQLite doesn't have booleans, dates, or enums. Booleans are stored as INTEGER 0/1. Dates are Unix epoch integers. Enums are TEXT strings.

Every boolean parameter needs a `db.bool_to_int(value)` call. Every boolean decoder needs a `!= 0` check. All date formatting, timezone conversion, and comparison lives in application code. There's no `DATE_TRUNC`, no `INTERVAL`, no `AT TIME ZONE`.

We use [STRICT tables](https://www.sqlite.org/stricttables.html) on everything, which enforces that values match declared column types (INTEGER, TEXT, REAL, BLOB). It's a free safety net for anything that bypasses the application layer, but it doesn't help with booleans, dates, or enums. Those stay as application-level concerns, but since Gleam and [Parrot](https://hexdocs.pm/parrot/) are the only source of writes and types are enforced there, it's manageable.

### Limited ALTER TABLE[​](#limited-alter-table "Direct link to Limited ALTER TABLE")

SQLite stores its schema as the original `CREATE TABLE` text, not as structured system catalogs like PostgreSQL. This means `ALTER TABLE` is minimal:

* `ADD COLUMN`, `RENAME COLUMN`, `DROP COLUMN` all work
* Changing a column's type, default, or `NOT NULL` does not
* Adding or modifying `CHECK` or `FOREIGN KEY` constraints does not
* Adding `UNIQUE` to an existing column does not

Changing a column post-launch requires a four-step dance: add the new column, copy the data, drop the old column, rename. PostgreSQL handles this with a single `ALTER COLUMN`.

### No CHECK Constraints[​](#no-check-constraints "Direct link to No CHECK Constraints")

We don't use CHECK constraints anywhere. This is a policy decision, and not one we're thrilled about.

CHECK constraints are embedded in the `CREATE TABLE` DDL string. Modifying one means a full table rebuild. Adding a new enum value shouldn't require that. So all validation lives in Gleam: union types for enums (with exhaustive pattern matching at compile time), validation functions for business logic, and `let assert` in decoders to crash fast if bad data gets in.

### Write Serialization[​](#write-serialization "Direct link to Write Serialization")

As covered above, writes are serialized. In practice this barely matters because there's no network round-trip and no protocol overhead. A write is a function call that completes in microseconds. The lock is held for such a short window that writers rarely wait for each other at all. But it does rule out horizontal scaling to multiple app servers writing to the same database.

### Single Node Only[​](#single-node-only "Direct link to Single Node Only")

SQLite is a file on local disk. Multiple app servers can't share it (NFS breaks SQLite's file locking and leads to corruption). We're locked into a single-server architecture. On a BEAM runtime that handles massive concurrency on one node, this is fine for well over 100,000 clubs. It's a hard ceiling if we ever need more, and if we do, that's a really good problem to have.

There are projects that add distributed replication to SQLite (LiteFS, rqlite, dqlite), but they add significant complexity: FUSE filesystems, consensus protocols, additional infrastructure. At that point you're fighting to make SQLite behave like Postgres, and you should probably just use Postgres.

### NIF Risk[​](#nif-risk "Direct link to NIF Risk")

Our SQLite driver ([esqlite](https://github.com/mmzeeman/esqlite)) is an Erlang NIF - compiled C code that runs outside the BEAM scheduler's control. A long-running query blocks a scheduler thread. A segfault takes down the entire VM.

In practice, SQLite's C library is near-bulletproof, and our queries return in microseconds. We mitigate the risk by keeping all queries simple (indexed lookups, no full table scans) and pushing anything heavy to background jobs. But the risk surface exists.

### SQL Dialect Gaps[​](#sql-dialect-gaps "Direct link to SQL Dialect Gaps")

Small things that add friction:

* `DELETE FROM t WHERE ... LIMIT 1` doesn't work. You need a subquery: `DELETE FROM t WHERE id = (SELECT id FROM t WHERE ... LIMIT 1)`.
* No `LISTEN/NOTIFY` for real-time push from the database. Change notification goes through application-level pub/sub.
* `NULL` comparisons need `IS ?` instead of `= ?` when the parameter can be NULL.

### Why We Accept It[​](#why-we-accept-it "Direct link to Why We Accept It")

Every tax above is an application-level workaround. Type conversions, date formatting, schema evolution dances, validation in Gleam instead of CHECK constraints. None of them change the architecture. They're annoyances, not obstacles.

The things that would actually force a migration (write contention, multi-node scaling, database size) aren't happening at 1,000 clubs with a read-heavy workload on the BEAM.

## When We'd Switch to PostgreSQL[​](#when-wed-switch-to-postgresql "Direct link to When We'd Switch to PostgreSQL")

Honestly, we don't see it happening anytime soon. Most of the limits people worry about with SQLite (database size, write throughput, busy errors) can be pushed further by upgrading the server. Vertical scaling is cheap and simple, and the BEAM makes excellent use of whatever hardware you give it.

The only real trigger would be needing multiple application servers, and that would mean we've seriously outgrown our predictions or miscalculated. If that happens, the migration path is mechanical, not architectural. Swap `sqlight` for `gleam_pgo`. Adjust SQL dialect across all query files: `?` becomes `$1, $2, ...`, `INTEGER PRIMARY KEY` becomes `GENERATED ALWAYS AS IDENTITY`, booleans become real booleans, remove the `DELETE` subquery workarounds. Separate `.db` files map to PostgreSQL schemas within a single database. Business logic and request handlers stay the same.

## What's Next[​](#whats-next "Direct link to What's Next")

If SQLite hits a wall, we switch to Postgres. The exit strategy is defined and the migration is a dialect swap, not a rewrite.

But so far, Litestream plus in-process SQLite has been one of the best decisions in the v3 rewrite. And there's one more benefit worth its own post: because SQLite runs in-process, every test gets its own in-memory database. No shared state, no cleanup, no flaky tests. That's next.

***

*This is Part 5 of the Curling IO Foundation series. Next up: [Test Isolation for Free with SQLite](/blog/sqlite-test-isolation.md).*

**Tags:**

* [foundation](/blog/tags/foundation.md)
* [sqlite](/blog/tags/sqlite.md)
* [architecture](/blog/tags/architecture.md)
* [gleam](/blog/tags/gleam.md)
