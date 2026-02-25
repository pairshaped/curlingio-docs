## [Background Jobs Without the Baggage](/blog/background-jobs-without-the-baggage.md)

February 25, 2026 ·

<!-- -->

6 min read

![Dave Rapin](https://avatars.githubusercontent.com/u/1202?v=4)

Dave Rapin

Founder @ Curling IO

In most web stacks, adding background jobs means adding infrastructure: Redis, Sidekiq, a separate worker process, a monitoring dashboard, another thing to deploy and keep running. Version 2 uses Delayed Job backed by PostgreSQL, which works well but requires a separate worker daemon alongside the web process.

Version 3 runs on the BEAM (Erlang's virtual machine), and background jobs are just another process in the same runtime. No Redis. No separate worker. No additional infrastructure. This post covers how we built it, why we chose SQLite persistence over in-memory queues, and how the whole thing fits into a few hundred lines of Gleam.

**Tags:**

* [foundation](/blog/tags/foundation.md)
* [gleam](/blog/tags/gleam.md)
* [beam](/blog/tags/beam.md)
* [otp](/blog/tags/otp.md)
* [architecture](/blog/tags/architecture.md)

[**Read more**](/blog/background-jobs-without-the-baggage.md)
