## [Parallel Tests for Free](/blog/parallel-tests-for-free.md)

March 8, 2026 ·

<!-- -->

5 min read

![Dave Rapin](https://avatars.githubusercontent.com/u/1202?v=4)

Dave Rapin

Founder @ Curling IO

While writing the [previous post](/blog/sqlite-test-isolation.md) about our per-test SQLite databases, I was describing how each test gets its own in-memory database, no shared connections, no shared state. And I thought: wait, if nothing is shared, can we just run them all at the same time?

Turns out we could, and our server test suite went from \~4 seconds to \~0.85 seconds for around 800 tests. Zero code changes to the tests themselves. One 25-line Erlang module.

**Tags:**

* [foundation](/blog/tags/foundation.md)
* [gleam](/blog/tags/gleam.md)
* [beam](/blog/tags/beam.md)
* [testing](/blog/tags/testing.md)
* [architecture](/blog/tags/architecture.md)

[**Read more**](/blog/parallel-tests-for-free.md)
