---
slug: 21-reasons-ai-agents-love-gleam
title: 'AI Agents Love Gleam'
authors: [dave]
tags: [gleam, ai, architecture]
---

*Fair warning: this post contains some opinions that are going to be controversial and may not age well. Here be dragons.*

AI coding agents like Claude Code, OpenAI Codex, and Google Gemini can write code, run it, read the errors, and try again. That loop is the whole game. The faster and more informative that loop is, the more useful the agent becomes. After building Curling IO Version 3 in Gleam alongside AI coding agents, I'm convinced Gleam is the best language for this workflow. Agents don't write better Gleam - there's less training data. But Gleam's compiler lets agents self-correct without waiting for a human.

<!--truncate-->

## The Feedback Loop That Matters

Every AI coding agent works the same way: write code, check if it works, fix what's broken, repeat. The quality of that "check if it works" step determines everything.

In a dynamically typed language, "check if it works" means running the test suite. Tests take time, they might not cover the thing that's actually broken, and they're code too - every test you add increases the complexity of your project. And many bugs don't surface until runtime, sometimes much later, in production. The agent writes code that looks correct, you review it, it looks correct to you too, and then a user hits a nil error at 2am.

In Gleam, "check if it works" means compiling. That takes a few seconds. When compilation fails, the error messages are specific: here's the file, here's the line, here's what you wrote, here's what was expected. The agent reads that, fixes it, and compiles again. A few rounds of this and the code is structurally sound.

## What the Compiler Catches

### No Nulls

Gleam has no null. Optional values are represented as `Option(T)`, which is either `Some(value)` or `None`. You can't accidentally dereference a nil. The compiler forces you to handle both cases. Null-related errors are [the most common exception in production](https://www.harness.io/blog/10-exception-types-in-production-java-applications), appearing in 70% of production environments in a study of over 1 billion events.

When an agent writes code in JavaScript, it has to remember to check for null everywhere. It doesn't always remember. Gleam removes the possibility entirely.

Null references are famously the [billion dollar mistake](https://www.infoq.com/presentations/Null-References-The-Billion-Dollar-Mistake-Tony-Hoare/), and they're not just a theoretical concern. In June 2025, [a single null value in a database field](https://dev.to/pantoai/how-a-null-pointer-exception-brought-down-mighty-google-7-hours-of-downtime-explained-p2g) cascaded through Google Cloud's Service Control system and took down multiple GCP and Workspace products worldwide for hours. The null hit a code path with no error handling, replicated globally in seconds, and the resulting outage took nearly three hours to fully resolve. Gleam's `Option` type would have forced the developer or the agent to handle the missing case before the code compiled. It doesn't prevent every failure in a chain like that, but it removes the specific class of bug that triggered it.

There's a security angle too. Unhandled nulls can leave an application in unexpected states - authentication checks skipped because a nil slipped through, or data exposed through an error page that should never have been reached. Every error class the compiler eliminates is attack surface the agent can't accidentally introduce.

### Structural Changes

Here's a real example from our codebase. Say the agent adds a new field to a type:

```gleam
pub type Listing {
  Listing(
    id: Int,
    name: String,
    capacity: Int,
    waitlist_enabled: Bool,  // new field
  )
}
```

In JavaScript, adding a property to an object changes nothing until runtime. If some template or API endpoint doesn't include the new field, you won't know until that code path executes. Your test suite might catch it. Or it might not, if coverage is incomplete.

In Gleam, every function that constructs or destructures a `Listing` now fails to compile. The compiler lists every location that needs updating. The agent works through the list, updates each one, and compiles clean.

This extends to every structural change: renaming a field, changing a type from `String` to `Int`, adding a variant to a union type. Agents handle this well. Humans forget things in lists.

### Exhaustive Pattern Matching

Gleam's compiler requires that pattern matches cover every possible case. If you match on a `Result` type, you handle both `Ok` and `Error`. If you match on a custom union type with four variants, you handle all four. Miss one and the compiler tells you.

Say you have a payment status type:

```gleam
pub type PaymentStatus {
  Pending
  Completed
  Refunded
  Failed
}
```

If someone adds a `Disputed` variant, every `case` expression matching on `PaymentStatus` across the entire codebase will fail to compile until it handles `Disputed`. In a dynamically typed language, the agent writes a `switch` or `if` chain that handles the common cases and forgets the edge case. That's a runtime error waiting to happen. In Gleam, the compiler catches it before the code ever runs.

## Simple Syntax, Fewer Ways to Go Wrong

Gleam is a small language. There's one way to define a function, one way to handle errors and optional values (`Result` and `Option`). No exceptions, no implicit conversions, no macros.

This matters for agents because smaller decision space means fewer wrong decisions. When there are six ways to do something, the agent has to pick one, and it might not pick the idiomatic one. In Gleam, there's usually one way. The agent doesn't need to know the community's style preferences or the codebase's conventions for error handling. The language already decided.

Formatting is the same story. `gleam format` is canonical. No configuration, no style debates. The agent's output looks identical to hand-written code after formatting. You can't tell the difference, and you don't need to.

## Whitespace Doesn't Matter

I actually prefer whitespace-significant languages. Elm and Haskell are two of my favorites. Clean indentation instead of curly braces everywhere looks better to me. But agents aren't good at it yet. In my experience, agents constantly trip over Slim templates: indentation errors are common with LLM-generated code. The model might mix tabs and spaces, or get the nesting level wrong by one indent. These errors are silent and semantic (they change what the code does).

Gleam uses curly braces. Whitespace is irrelevant to the compiler. `gleam format` normalizes it. One fewer class of errors for agents to make.

## Tight Feedback Loops

### Fast Compilation

Gleam's compiler runs in a few seconds for our full project. A typical test suite in a dynamically typed language takes 30 seconds to a few minutes. When the agent is iterating, the difference between a few-second compile and a multi-minute test run adds up fast.

### Fast Tests

Tests are fast too. Because each test gets its own in-memory SQLite database with no shared state, we [run them all in parallel](/blog/parallel-tests-for-free). Around 800 tests finish in under a second. That speed accumulates over a session where the agent is compiling and testing dozens of times.

## Less Training Data Is a Real Cost

Gleam has less training data than JavaScript, TypeScript, or Python. Agents write worse Gleam on their first attempt. They reach for patterns that don't exist and invent functions that aren't in the standard library.

This is a real cost. The agent takes longer to write initial code in Gleam than it would in JavaScript.

But here's what I've found: the total time from "start writing" to "code is correct and deployed" is shorter in Gleam. The agent writes slower but the compiler catches errors instantly. In JavaScript, the agent writes faster but errors surface later, in tests or in production.

## The Workflow in Practice

Here's how a typical feature goes:

1. We write a spec describing what we want. This is iterative - we go back and forth with the agent refining the spec before any code is written. A good spec is the difference between useful output and garbage.
2. The agent writes the implementation: types, database queries, request handlers, views
3. It runs `gleam build`. Compilation fails with 5-10 errors.
4. The agent reads each error, fixes the code, rebuilds. A few rounds.
5. Compilation succeeds. The agent runs the tests. They pass, or they fail on business logic (not on null errors or type mismatches).
6. We review the diff. We're looking at logic, intent, and redundancy.

Agents tend to duplicate code rather than reuse existing functions, probably because of context window limits. Catching those opportunities to extract shared logic is the most common feedback we give.

We still write a fair amount of code by hand. Agents aren't always right, and they sometimes produce ugly or redundant code that needs to be caught and rewritten. We step in when the agent is spinning out on something, going in circles trying to fix the same error. In Gleam that happens a lot less than what we've seen in dynamic languages.

## Other Languages

Other statically typed languages with good compilers share some of these properties. Rust, OCaml, Haskell, and Elm all have strong type systems that catch errors at compile time.

But Gleam has a specific combination that makes it well-suited for agents:

- Simple syntax that's easy to generate
- Fast compilation for tight feedback loops
- Canonical formatting so agent output looks like hand-written code
- No nulls, eliminating one of the most common error classes
- Exhaustive pattern matching so no cases are forgotten
- Whitespace-insensitive so formatting errors can't change behavior

It also runs on the BEAM, which gives you fault tolerance and concurrency, but that's a [separate conversation](/blog/background-jobs-without-the-baggage).

The trade-off is ecosystem maturity and training data. Gleam is young. Libraries are fewer. Agent-generated code needs more correction on the first pass. That gap is closing as training data grows.

## The Bet

I believe AI agents are already writing most of the code in a growing number of projects. Language choice is being evaluated differently. "How fast can a human write this?" matters less. "How much of the developer's review time does this require?" matters most.

The developer is the bottleneck. We're slow compared to computers. A language where the compiler has already verified structural correctness before the diff reaches your screen means the reviewer can focus on logic and intent instead of chasing down missing nil checks.

We picked Gleam for other reasons, but how well it works with AI coding agents has been huge.

---

## Addendum: The State of AI-Assisted Coding

Stepping back from the technical argument. AI-assisted coding is here to stay. Even if the technology doesn't meaningfully improve from where it is today, it's already useful enough that developers are adopting it en masse.

### The Bar Is Higher, Not Lower

Agents are good enough for a lot of business application work right now, but "good enough" comes with a big asterisk. Every diff needs scrutiny. The operator needs to be a domain expert, a security expert, and a programming expert. The speed at which code is produced has raised the expertise required from the operator, not lowered it.

### Expect More Security Vulnerabilities

Agents generate code that works, but "works" and "secure" are very different bars. They'll probably catch the obvious stuff like SQL injection. The less obvious stuff is where it gets dangerous - like not realizing that a decision you made three prompts ago means all your customers' PII is now accessible on a public URL as a side effect. That requires understanding the full picture, and agents don't have that yet. I think this will become a visible reality over the next few years as more agent-written code hits production without adequate review.

### The Industry Is Evolving

The industry is actively trying to figure out what the right abstractions look like for AI-assisted development. Two notable attempts:

[Mog](https://moglang.org/) is a language designed to be written and read by AIs rather than humans. I'm skeptical. If the developer reviewing the diff is the bottleneck, optimizing for machine readability at the expense of human readability makes things worse.

[Codespeak](https://codespeak.dev/) takes a different approach: specs and code as interchangeable representations, where you can move between them seamlessly. I think both specs and code are important, and right now neither is enough on its own. A spec is great for big-picture thinking, but it lacks the detail that matters when things go wrong. Code has all the detail, but it's hard to step back and reason about the whole system by reading it. They operate at different levels of granularity, and collapsing them into one thing loses what makes each useful.

Statically typed languages have an advantage here: types are self-documenting. A well-defined type in Gleam already communicates a lot of what a spec would say about the shape of data and the boundaries of a function, without needing a separate document to describe it.

### What Comes Next

The developer's role is shifting toward a supervisory one. That might mean a lot more software gets written, or a lot fewer developers get employed, or both. And the supervisory role itself might not last if agents get good enough to close the loop on their own. That's a real possibility and it's worth being honest about.

After a year of building production software with AI coding agents, it works if you put in the effort to verify everything that comes out the other end. Gleam wasn't designed for AI agents, but good language design turns out to matter more than any tool built specifically for them.
