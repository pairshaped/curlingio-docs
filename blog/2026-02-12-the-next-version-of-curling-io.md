---
slug: the-next-version-of-curling-io
title: 'The Next Version of Curling IO'
authors: [dave]
tags: [architecture, gleam, sqlite, vertical-scaling, rails-migration]
---

After serving hundreds of curling organizations and processing millions of registrations with Ruby on Rails for years, we're starting to rebuild Curling IO's backend in Gleam on the BEAM VM. Same features, same experience, better foundation.

This is the first in a series of technical posts documenting our journey and decisions as we build.

<!--truncate-->

## How This Affects You

**For club managers:** Curling IO isn't changing from your perspective. We're upgrading the technical infrastructure behind the scenes - no downtime, no disruption, no action required from you. Your data stays exactly where it is. When the upgrade is complete (thoroughly tested and proven), the transition will be seamless. You'll have the same Curling IO you know, even faster and more reliable.

**For curlers:** You won't notice the technology change. Registration, scoring, schedules, results - everything works the same way. You might notice things feel snappier, especially during peak registration times or when checking live scores at major competitions.

## Why Rebuild?

Curling IO has been serving curling clubs since late 2014. We rebuilt the platform once already in 2019, and our v2 system has been running successfully on Rails ever since. Everything works, clubs are happy, and growth is strong. So why rebuild again?

Because we're planning to be here for the long haul. This rebuild ensures Curling IO can serve curling clubs not just for the next few years, but for the next 20+ years. While competitors come and go, we're investing in a foundation built to last and evolve with the sport.

**Four key reasons:**

1. **AI Agent APIs** - We're adding new APIs specifically designed for AI agents to work with easily. Your existing web interface isn't changing - these are additional capabilities on top of what you already use. As AI assistants become ubiquitous (whether you love them or not), we're designing for that reality. Users are already asking ChatGPT and Claude to help them register for leagues or check schedules - we want those interactions to work reliably.

2. **Multi-sport expansion** - Curling IO has been curling-only for over a decade. We're rebuilding with a modular architecture that separates sport-specific features (draw scheduling, scoring rules, team structures) from shared platform code (registration, payments, member management). This lets us expand into other sports while maintaining the deep domain expertise that makes Curling IO great for curlers.

3. **More scalable foundation** - As the platform grows, we need stronger guarantees around correctness and performance. We want a tech stack that can handle massive concurrency - both during peak registration periods and during large traffic spikes for scoring and results at provincial and national competitions like the Scotties and Brier. It needs to eliminate entire classes of runtime errors and scale efficiently for the next 20+ years.

4. **Easier developer onboarding** - We want a codebase that's easy to hand off between developers. Type safety and functional patterns make code self-documenting - new developers (with help from AI coding assistants) can jump in and contribute safely without deep institutional knowledge. Gleam's deterministic patterns are much easier for AI assistants to reason about than dynamic languages, which means faster onboarding and more productive collaboration between developers and their AI tools. This significantly mitigates the hit-by-a-bus factor.

## Choosing the Tech Stack

Given our goals - agent-native APIs, multi-sport modularity, and rock-solid reliability at scale - we need a stack that can deliver:

**What we're looking for**
- **Type safety** - Catch errors at compile time, not in production
- **Massive concurrency** - Handle thousands of simultaneous registrations without breaking a sweat
- **Functional patterns** - Predictable, testable code that developers can reason about
- **Shared types** - Same data structures on client and server
- **Proven at scale** - Battle-tested in production by major companies

**Why Gleam?**

Gleam checks every box. It's a type-safe functional language that compiles to both Erlang (for the server) and JavaScript (for the client). You get:

- **BEAM VM reliability** - The same runtime that powers WhatsApp (billions of messages with ~50 engineers) and Discord (millions of concurrent users). Built-in fault tolerance and lightweight processes.
- **ML-family type system** - Stronger than Elixir, catches entire classes of bugs at compile time
- **Lustre for frontend** - An Elm-architecture framework for Gleam that compiles to JavaScript. We already love Elm for our current frontend apps, and Lustre brings that same architecture everywhere. Type-safe UI components that share types with the backend, with full type safety from database to UI.
- **Simple language** - Focused, consistent, easy to reason about. Perfect for building deterministic APIs.

**What about other options?**

We didn't jump straight to Gleam. We seriously considered other functional, type-safe stacks:

**PostgREST + Elm/Lustre** - This was a very serious contender. We already love this combination for our current frontend apps. PostgREST provides instant APIs from your PostgreSQL schema, and Elm/Lustre provides type-safe UI. But we'd need something else for background jobs (like Go), and the tooling for building, debugging, and testing PostgreSQL functions isn't great. The multi-language setup felt fragmented.

**F# SAFE Stack** - F# is a fantastic functional language with a solid .NET ecosystem. The SAFE stack (Suave/Saturn, Azure/AWS, Fable, Elmish) offers full-stack type safety with The Elm Architecture (TEA) on the frontend. We really liked this option, but ultimately chose Gleam for its BEAM VM benefits and simpler deployment story.

**Haskell** - We like Haskell's powerful type system and purity. But we weren't comfortable enough with it to build our entire stack in it, which would have meant bringing in a separate frontend solution. The ecosystem is mature, but the learning curve felt steep for a production rewrite with our timeline.

**BEAM was the killer feature.** None of these other options came close to what the BEAM VM offers: rock-solid concurrency, fault tolerance, and proven scalability (WhatsApp, Discord, etc.). Gleam gives us BEAM on the backend with familiar functional patterns (like Elm) on the frontend, all in a single language. That combination was unbeatable.

**Why not stick with Rails?**

To be clear: we love Ruby on Rails. It's been fantastic for rapid development and has scaled well for our needs. For heavier interactive features, we've already been using Elm for frontend apps like Bracket Builder, Scheduling, Scoring, and Results widgets, with PostgREST providing clean APIs on the backend. This functional programming approach has worked beautifully.

But for our next 10 years, we need:
- Compile-time safety (Ruby is dynamically typed)
- BEAM-level concurrency (Rails doesn't even come close)
- Shared client/server types (Rails is backend-only)
- Functional patterns built-in (Rails is object-oriented)

This isn't about Rails being bad. It's about choosing the right foundation for the next 20+ years. Ruby on Rails will always have a place in our hearts, but Gleam is the right tool for where we're going.

## SQLite Over PostgreSQL

**This one surprised us.**

Curling IO v2 runs on PostgreSQL. We assumed we'd use Postgres for v3. But we're betting on SQLite instead.

**Why SQLite?**

- **Per-sport databases** - Each sport gets its own database (curling.db, tennis.db, etc.)
- **No scaling bottleneck** - Databases are isolated by sport, not shared
- **In-process speed** - Zero network latency between app and database
- **Operational simplicity** - No database server to manage, tune, or cluster
- **Cost savings** - Orders of magnitude cheaper than managed Postgres
- **Litestream backups** - Continuous replication to offsite storage

**The key insight:** We'll never have cross-sport queries. Curling clubs don't need to query tennis leagues. This creates a natural isolation boundary.

**What about scale?**

Here's the bet: for the same infrastructure budget as Rails + PostgreSQL, we believe Gleam + SQLite can handle:
- 50,000+ clubs
- Tens of millions of member records
- Hundreds of millions of transactions
- Tens of thousands of concurrent connections
- Peak traffic during major competitions

The combination of BEAM's efficiency, SQLite's in-process speed, and a single powerful server should massively outperform a multi-server PostgreSQL setup at the same cost.

That said, we'll be doing extensive benchmarking and performance testing before we're 100% committed to this switch. The theory is sound, but we need to validate it with real-world load tests.

If SQLite doesn't scale as expected, we'll just stick with PostgreSQL - an equally fantastic database.

## Vertical-First Scaling

**The scaling philosophy:** Don't horizontally scale until you've maxed out vertical scaling.

**Our scaling roadmap:**

**Phase 1: Start on bare metal**
- All sports on one powerful server
- Co-located app + databases
- Warm backup server + continuous offsite backups
- Scale up CPU and RAM as we grow
- Handles 20,000+ clubs

**Phase 2: Horizontal (only if needed)**
- Split edge layer (Caddy/Varnish) from sport servers
- Route by domain (*.curling.io → curling server)
- Each sport gets dedicated server
- Keep SQLite in-process (app + DB same box)

**Why vertical-first?**

- ✅ Operational simplicity (one server to deploy, backup, monitor)
- ✅ No distributed systems complexity
- ✅ SQLite stays fast (in-process, no network)
- ✅ Cost-effective
- ✅ Defer complexity until actually needed

**The horizontal scaling path gives us optionality.** If our performance estimates are wildly off, we have a clean path to splitting servers. If SQLite scales better than expected, we stay simple longer. Either way, we win.

---

*This is the first in a series of posts documenting our technical journey. Stay tuned for deep dives on the implementation, performance testing, and lessons learned along the way.*
