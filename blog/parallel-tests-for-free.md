# Parallel Tests for Free

March 8, 2026 ·

<!-- -->

5 min read

![Dave Rapin](https://avatars.githubusercontent.com/u/1202?v=4)

Dave Rapin

Founder @ Curling IO

While writing the [previous post](/blog/sqlite-test-isolation.md) about our per-test SQLite databases, I was describing how each test gets its own in-memory database, no shared connections, no shared state. And I thought: wait, if nothing is shared, can we just run them all at the same time?

Turns out we could, and our server test suite went from \~4 seconds to \~0.85 seconds for around 800 tests. Zero code changes to the tests themselves. One 25-line Erlang module.

## Why Sequential Was the Default[​](#why-sequential-was-the-default "Direct link to Why Sequential Was the Default")

Gleam's test runner, gleeunit, delegates to Erlang's EUnit framework. By default, EUnit runs test modules one at a time. This is the safe choice because most test suites have shared mutable state somewhere: a database connection, a named process, a file on disk. Running those tests concurrently produces the kind of failures that pass locally and fail in CI, or pass on Tuesday and fail on Wednesday.

Our tests don't have shared mutable state. Every test clones its own database. No two tests touch the same connection. The previous post explains the full setup, but the short version is: `test_db.setup()` clones a cached template database via SQLite's backup API and returns a fresh, independent connection. When the test ends, the connection is garbage collected and the database disappears.

## What's Actually Isolated[​](#whats-actually-isolated "Direct link to What's Actually Isolated")

Before flipping the switch, we checked every category of shared state:

| Resource                  | Isolation                                                                |
| ------------------------- | ------------------------------------------------------------------------ |
| SQLite databases          | Each test clones its own in-memory DB                                    |
| `persistent_term` cache   | Idempotent first-writer-wins (template DB, timezone data, logger config) |
| ETS tables (rate limiter) | Unnamed, each test creates its own via `ets:new`                         |
| Named processes           | None started in tests                                                    |
| File system               | No writes in tests                                                       |

The `persistent_term` entries are write-once caches. Multiple tests might try to initialize the template database at the same time, but the first one wins and subsequent calls just read the cached value. That's safe.

ETS tables used in tests (for the rate limiter) are created without the `named_table` option, so each call to `ets:new` returns a unique table reference. No conflicts.

## The Implementation[​](#the-implementation "Direct link to The Implementation")

EUnit supports a `{inparallel, Tests}` wrapper that distributes test functions across BEAM schedulers. It's been there for years, but gleeunit doesn't expose it. We submitted a PR to add a `main_parallel()` function, but it was pointed out that this fits better as a project-local solution than a change to gleeunit's core. That makes sense. We closed the PR and wrote a project-local Erlang module that replicates the test discovery logic and calls EUnit directly.

```
-module(parallel_test_runner).
-export([main/0]).

main() ->
    Options = [verbose, no_tty,
               {report, {gleeunit_progress, [{colored, true}]}},
               {scale_timeouts, 10}],
    Files = filelib:wildcard("**/*.{erl,gleam}", "test"),
    Modules = [to_module(list_to_binary(F)) || F <- Files],
    case eunit:test({inparallel, Modules}, Options) of
        ok -> erlang:halt(0);
        _  -> erlang:halt(1)
    end.

to_module(Path) ->
    case filename:extension(Path) of
        <<".gleam">> ->
            binary_to_atom(
              binary:replace(
                binary:replace(Path, <<".gleam">>, <<"">>),
                <<"/">>, <<"@">>, [global]),
              utf8);
        <<".erl">> ->
            binary_to_atom(
              binary:replace(lists:last(binary:split(Path, <<"/">>, [global])),
                <<".erl">>, <<"">>),
              utf8)
    end.
```

This does the same thing gleeunit does (glob for test files, convert filenames to module atoms) but wraps the module list in `{inparallel, ...}` instead of passing it flat. It reuses `gleeunit_progress` from the hex dependency for the dot-per-test output with color, so the test output looks the same as before.

The test entry point is one line:

```
@external(erlang, "parallel_test_runner", "main")
pub fn main() -> Nil
```

No fork. No submodule. Stock gleeunit stays in `gleam.toml` as a dependency (we still use it for the progress reporter). Only the server package uses the parallel runner. The shared and client packages use gleeunit's standard sequential `main()` because they have far fewer tests and don't need it.

## The Results[​](#the-results "Direct link to The Results")

| Package   | Tests     | Before     | After      |
| --------- | --------- | ---------- | ---------- |
| server    | \~800     | \~4.0s     | \~0.85s    |
| shared    | \~100     | \~0.5s     | \~0.5s     |
| client    | 1         | \~0.2s     | \~0.2s     |
| **Total** | **\~900** | **\~4.7s** | **\~1.6s** |

The shared and client packages didn't change because they already ran in under a second.

EUnit serializes its listener callbacks through a single process, so the dot-per-test progress output still arrives in order. Per-test stdout is delivered after each test completes, so you don't get interleaved output from concurrent tests. The test output looks identical to before, just faster.

## Keeping It Working[​](#keeping-it-working "Direct link to Keeping It Working")

This works because the test architecture is clean. If someone adds a test that registers a named process with a fixed atom, or writes to a shared file path, two copies of that test will collide and produce flaky failures. The rules are simple:

* Don't share database connections between tests. Use `test_db.setup()`.
* Don't register processes with fixed names. If you need a named process, include the test module name.
* Don't use named ETS tables. Pass the table reference instead.
* Don't write to the file system in tests.

If a test can't follow these rules, EUnit lets you mix `{inparallel, ...}` and `{inorder, ...}` in the same test run. We could maintain a list of sequential modules in the runner and group them separately:

```
Sequential = [some_integration_test],
Parallel = Modules -- Sequential,
eunit:test([{inparallel, Parallel}, {inorder, Sequential}], Options)
```

The sequential modules would run one at a time while everything else stays parallel. We haven't needed this yet, but it's a few lines if we do.

## The Accidental Win[​](#the-accidental-win "Direct link to The Accidental Win")

None of this was planned. We chose per-test SQLite databases because they eliminated cleanup code, ordering dependencies, and flaky tests from leaked state. We're still a bit surprised that a permanent 4.7x speedup, one we'll benefit from for the lifetime of this project, took an afternoon and 25 lines of Erlang.

37 lines total (counting the 12-line FFI module from the previous post) for per-test database isolation and parallel execution across all available CPU cores. No test framework plugins. No configuration. The whole thing compiles with `gleam build` and runs with `gleam test`.

***

*This is Part 7 of the Curling IO Foundation series.*

**Tags:**

* [foundation](/blog/tags/foundation.md)
* [gleam](/blog/tags/gleam.md)
* [beam](/blog/tags/beam.md)
* [testing](/blog/tags/testing.md)
* [architecture](/blog/tags/architecture.md)
