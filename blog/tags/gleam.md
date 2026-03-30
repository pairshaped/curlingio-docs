## [LiveView Admin Panel w/ Gleam and Lustre](/blog/live-admin-without-javascript.md)

March 26, 2026 ·

<!-- -->

11 min read

![Dave Rapin](https://avatars.githubusercontent.com/u/1202?v=4)

Dave Rapin

Founder @ Curling IO

Curling IO's admin panel has dozens of pages: product configuration, discount rules, affiliate fees, registrations, event scheduling, reports. In Version 2, every form submission reloads the page. Click save, wait for the round trip. It works, but it's slow when you're editing multiple sections on the same product, and it makes features like live toggle switches or inline editing impossible without sprinkling in JavaScript.

Version 3's admin is a single Lustre server component running on the BEAM. One WebSocket connection, one long-lived Erlang process per session. Every interaction goes over that WebSocket and comes back as a DOM patch. The page never reloads, and there's no client-side JavaScript framework. The entire admin UI is written in Gleam, compiled to Erlang, and runs server-side.

**Tags:**

* [foundation](/blog/tags/foundation.md)
* [gleam](/blog/tags/gleam.md)
* [beam](/blog/tags/beam.md)
* [lustre](/blog/tags/lustre.md)
* [architecture](/blog/tags/architecture.md)

[**Read more**](/blog/live-admin-without-javascript.md)
