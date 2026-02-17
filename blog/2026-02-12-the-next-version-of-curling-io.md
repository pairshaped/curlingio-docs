---
slug: the-next-version-of-curling-io
title: 'The Next Version of Curling IO'
authors: [dave]
tags: [foundation, architecture, gleam, sqlite, scaling]
---

We're building the next version of Curling IO - same features, same experience, stronger foundation. After over a decade of serving hundreds of curling organizations across Canada, the US, and internationally, we're investing in technical upgrades that set Curling IO up for the next 20+ years.

This is Part 1 of a series of technical posts documenting our journey and decisions as we build.

<!--truncate-->

## How This Affects You

**For club managers:** Curling IO isn't changing from your perspective. We're upgrading the technical infrastructure behind the scenes - no downtime, no disruption, no action required from you. Your data stays exactly where it is. When the upgrade is complete (thoroughly tested and proven), the transition will be seamless. You'll have the same Curling IO you know, even faster and more reliable.

**For curlers:** You won't notice the technology change. Registration, scoring, schedules, results - everything works the same way. You might notice things feel snappier, especially during peak registration times or when checking live scores at major competitions.

## Why a New Foundation?

Curling IO has been serving curling clubs since late 2014. We upgraded the platform once already in 2019, and our Version 2 system has been running successfully on Rails ever since. Everything works, clubs are happy, and growth is strong. So why invest in a new foundation?

Because we're planning to be here for the long haul. This new foundation ensures Curling IO can serve curling clubs not just for the next few years, but for the next 20+ years. While competitors come and go, we're investing in infrastructure built to last and evolve with the sport.

**Three key reasons:**

1. **AI Agent APIs** - We're adding new APIs specifically designed for AI agents to work with easily. Your existing web interface isn't changing - these are additional capabilities on top of what you already use. As AI assistants become ubiquitous (whether you love them or not), we're designing for that reality. Users are already asking ChatGPT and Claude to help them register for leagues or check schedules - we want those interactions to work reliably.

2. **Concurrency and correctness** - As the platform grows, we need stronger guarantees around correctness and performance. We want a tech stack that can handle massive concurrency - both during peak registration periods and during large traffic spikes for scoring and results at provincial and national competitions like the Scotties and Brier. It needs to prevent runtime errors and scale efficiently as the sport grows.

3. **Easier developer onboarding** - We want a codebase that's easy to hand off between developers. Type safety and functional patterns make code self-documenting - new developers (with help from AI coding assistants) can jump in and contribute safely without deep institutional knowledge. Gleam's deterministic patterns are much easier for AI assistants to reason about than dynamic languages, which means faster onboarding and more productive collaboration between developers and their AI tools. This significantly reduces key-person dependency.

## Choosing the Tech Stack

Given our goals - agent-native APIs, clean architecture, and battle-tested reliability at scale - we need a stack that can deliver:

**What we're looking for**
- **Type safety** - Catch errors at compile time, not in production
- **Massive concurrency** - Handle thousands of simultaneous registrations
- **Functional patterns** - Predictable, testable code that developers can reason about
- **Shared types** - Same data structures on client and server
- **Proven at scale** - Used in production by major companies

**Why Gleam?**

<a href="https://gleam.run" target="_blank">Gleam</a> checks every box. It's a type-safe functional language that compiles to both Erlang (for the server) and JavaScript (for the client). You get:

- **<a href="https://www.erlang.org/blog/a-brief-beam-primer/" target="_blank">BEAM VM</a> reliability** - The same runtime that powers WhatsApp (billions of messages with ~50 engineers) and Discord (millions of concurrent users). Built-in fault tolerance and lightweight processes.
- **ML-family type system** - Stronger than Elixir, catches entire classes of bugs at compile time
- **<a href="https://lustre.build" target="_blank">Lustre</a> for frontend** - An <a href="https://elm-lang.org" target="_blank">Elm</a>-architecture framework for Gleam that compiles to JavaScript. We already love Elm for our current frontend apps, and Lustre brings that same architecture everywhere. Same types from database to UI, all type-safe.
- **Simple language** - Focused, consistent, easy to reason about. Perfect for building deterministic APIs.

**What about other options?**

We didn't jump straight to Gleam. We seriously considered several other stacks:

**<a href="https://postgrest.org" target="_blank">PostgREST</a> + Elm/Lustre** - This was a very serious contender using tools we're already familiar with. PostgREST provides instant APIs from your PostgreSQL schema, and Elm/Lustre provides type-safe UI. But we'd need something else for background jobs (like Go), and the tooling for building, debugging, and testing PostgreSQL functions isn't great. The multi-language setup felt fragmented.

**<a href="https://safe-stack.github.io" target="_blank">F# SAFE Stack</a>** - F# is a fantastic functional language with a solid .NET ecosystem. The SAFE stack (Suave/Saturn, Azure/AWS, Fable, Elmish) offers full-stack type safety with The Elm Architecture (TEA) on the frontend. We really liked this option, but ultimately chose Gleam for its BEAM VM benefits and simpler deployment story.

**TypeScript + Node + React** - The obvious choice given its massive ecosystem and the sheer volume of material AI agents can draw from. We've been using React off and on since 2014 and like Redux (which is Elm-inspired) for the frontend. But JavaScript/TypeScript has issues we couldn't get past: nulls everywhere, a type system that feels bolted on (TypeScript's safety is opt-out with `any`, `as`, and `!`), relentless library churn, and recurring npm supply chain vulnerabilities. React itself has become overly complex. Popularity is a real advantage, but it wasn't enough to outweigh the correctness and simplicity we wanted.

**BEAM was the killer feature.** None of these other options came close to what the BEAM VM offers: rock-solid concurrency, fault tolerance, and proven scalability (WhatsApp, Discord, etc.). Gleam gives us BEAM on the backend with familiar functional patterns (like Elm) on the frontend, all in a single language.

**Why not stick with Rails?**

To be clear: we love <a href="https://rubyonrails.org" target="_blank">Ruby on Rails</a>. It's been amazing for rapid development and has scaled well for our needs. For heavier interactive features, we've already been using Elm for frontend apps like Bracket Builder, Scheduling, Scoring, and Results widgets, with PostgREST providing clean APIs on the backend. This functional programming approach has worked really well.

But for where we're headed, we need:
- Compile-time safety (Ruby is dynamically typed)
- BEAM-level concurrency (Rails doesn't even come close)
- Shared client/server types (Rails is backend-only)
- Functional patterns built-in (Rails is object-oriented)

This isn't about Rails being bad - we've been building with it since version 1.2 and nothing else lets you iterate that fast. But over time we've moved towards functional, compiled, typed languages because runtime errors are the absolute worst to debug and fix. Gleam gives us that correctness without giving up the developer experience we love about Rails.

## SQLite Over PostgreSQL

**This one surprised us.**

Curling IO Version 2 runs on PostgreSQL. We assumed we'd use Postgres for Version 3. But we're betting on <a href="https://sqlite.org" target="_blank">SQLite</a> instead.

**Why SQLite?**

- **Isolated databases** - Clean separation of concerns with dedicated database files
- **In-process speed** - Zero network latency between app and database
- **Operational simplicity** - No database server to manage, tune, or cluster
- **Cost savings** - Orders of magnitude cheaper than <a href="https://www.crunchydata.com/products/crunchy-bridge" target="_blank">managed Postgres</a>
- **<a href="https://litestream.io" target="_blank">Litestream</a> backups** - Continuous replication to offsite storage

**What about scale?**

For the same infrastructure budget as Rails + PostgreSQL, we expect Gleam + SQLite to handle roughly:
- 1,000x more concurrent connections
- 100x the data volume
- 100x the throughput during peak traffic (registrations, live scoring)

These numbers sound outrageous, but they aren't pulled out of thin air. BEAM processes are ~2KB each vs Rails threads at ~1MB - that's where the 1,000x connection multiplier comes from. And eliminating network round-trips to a separate database server (SQLite runs in-process) while leveraging BEAM's lightweight concurrency model accounts for the throughput gains. These are well-documented characteristics of the technology, not optimistic guesses.

That said, we'll be validating everything with extensive benchmarking and real-world load tests as we build.

If SQLite doesn't scale as expected, we'll just stick with PostgreSQL - an equally great database.

## Vertical-First Scaling

Our scaling strategy is simple: start on a single powerful server and scale up from there.

- One server with co-located app + database (one thing to deploy, backup, monitor)
- Warm backup server + continuous offsite backups
- Scale up CPU and RAM as we grow
- No distributed systems complexity until actually needed

If we ever outgrow a single server, we have a clean path to splitting things up. But with BEAM's concurrency and SQLite's in-process speed, we expect that to be a long way off.

## What's Next

We'll be building this out over the coming months alongside the existing platform. Curling IO Version 2 isn't going anywhere - it continues to run and receive updates as usual. When Version 3 is ready and thoroughly tested, we'll transition everyone over at once - a clean, coordinated switch rather than a drawn-out process. We won't make that switch until we're confident everything is solid.

---

*This is Part 1 of the Curling IO Foundation series. Next up: [bilingual support with compile-time guarantees](/blog/bilingual-by-design).*

