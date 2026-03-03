## [Test Isolation for Free with SQLite](/blog/sqlite-test-isolation.md)

March 3, 2026 ·

<!-- -->

9 min read

![Dave Rapin](https://avatars.githubusercontent.com/u/1202?v=4)

Dave Rapin

Founder @ Curling IO

Most web frameworks treat test database isolation as a hard problem. Rails has `database_cleaner` with three strategies. Django wraps every test in a transaction it rolls back. Phoenix does the same with its SQL sandbox. They all exist because tests share a single database server, and that shared state is the root of flaky tests and ordering dependencies, the kind where a test passes alone but fails in the suite.

Curling IO Version 3 doesn't have this problem. Each test gets its own database. Not a transaction. Not a truncated copy. A completely independent in-memory SQLite database, cloned from a template in microseconds using SQLite's backup API.

**Tags:**

* [foundation](/blog/tags/foundation.md)
* [sqlite](/blog/tags/sqlite.md)
* [testing](/blog/tags/testing.md)
* [architecture](/blog/tags/architecture.md)

[**Read more**](/blog/sqlite-test-isolation.md)
