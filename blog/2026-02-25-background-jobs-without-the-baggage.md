---
slug: background-jobs-without-the-baggage
title: 'Background Jobs Without the Baggage'
authors: [dave]
tags: [foundation, gleam, beam, otp, architecture]
---

In most web stacks, adding background jobs means adding infrastructure: Redis, Sidekiq, a separate worker process, a monitoring dashboard, another thing to deploy and keep running. Version 2 uses Delayed Job backed by PostgreSQL, which works well but requires a separate worker daemon alongside the web process.

Version 3 runs on the BEAM (Erlang's virtual machine), and background jobs are just another process in the same runtime. No Redis. No separate worker. No additional infrastructure. This post covers how we built it, why we chose SQLite persistence over in-memory queues, and how the whole thing fits into a few hundred lines of Gleam.

<!--truncate-->

## The BEAM Advantage

The BEAM VM was designed for telecom systems that needed to handle millions of concurrent operations without downtime. Every BEAM application already has lightweight processes, supervisors, and message passing built in. These aren't OS threads. They're managed by the VM's own scheduler, and you can run hundreds of thousands of them in a single OS process.

This means a "background worker" isn't a separate service. It's just another process running alongside your HTTP handlers, sharing the same runtime and the same log output. Starting one is a function call, not a deployment.

## Why Not Just Fire-and-Forget?

The simplest approach on BEAM would be to spawn a process for each job and let it run. Or use an OTP actor with in-memory messages. We considered this, but it has a gap: if the server restarts, every pending job disappears. A lost login email is minor (the user just requests another), but we'll also be running draw schedule generation, payment processing through Stripe, and accounting syncs. Losing those mid-flight is a real problem.

We wanted durability without complexity. SQLite was already there.

## A Separate Database

Curling IO already uses SQLite for its sport-specific databases (one per sport). We could have added a `jobs` table there, but we deliberately put it in a separate `shared.db`. Background job processing means frequent writes (insert job, mark running, mark completed), and there's no reason to contend for write locks on the sport databases. SQLite uses a write-ahead log with a single writer, so separating the workloads means job processing never blocks a registration query and vice versa.

The jobs table:

```sql
CREATE TABLE IF NOT EXISTS jobs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  kind TEXT NOT NULL,
  payload TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  attempts INTEGER NOT NULL DEFAULT 0,
  max_attempts INTEGER NOT NULL DEFAULT 3,
  error TEXT,
  created_at INTEGER NOT NULL,
  run_at INTEGER NOT NULL,
  started_at INTEGER,
  completed_at INTEGER
) STRICT;
```

## Enqueue Is Just an INSERT

From a request handler, sending a background email looks like this:

```gleam
jobs.enqueue_email(rc.jobs_db, rc.postmark_api_token, email)
```

Under the hood, that's a single `INSERT INTO jobs` with the email details serialized as JSON in the `payload` column. It returns in microseconds. The user gets their response immediately instead of waiting 100-500ms for the Postmark API call to complete.

In a typical Rails setup, background email means Redis running, a job framework configured, and a worker process deployed alongside the app. Here, the "queue" is just a SQLite table in the same filesystem.

## The Worker: An OTP Actor

The worker is a single OTP actor, which is BEAM's abstraction for a stateful process that handles messages sequentially. Ours has exactly one message type:

```gleam
pub type Message {
  CheckForWork
}
```

On startup, the actor sends itself a `CheckForWork` message after a one-second delay. When it handles that message, it queries for pending jobs, processes them, and schedules the next check. It's a self-sustaining polling loop:

```gleam
fn handle_message(state, msg) {
  case msg {
    CheckForWork -> {
      process_pending_jobs(state)
      process.send_after(state.self, 1000, CheckForWork)
      actor.continue(state)
    }
  }
}
```

Each poll picks up a batch of pending jobs where `run_at` is in the past, processes them one at a time, and marks each as completed or failed. The actor never crashes on a bad job. Errors are caught and logged, and the actor keeps processing the rest of the batch.

## Retry With Exponential Backoff

Not every failure is permanent. Postmark might be briefly unreachable, or return a 500. The retry logic is straightforward: if a job fails and has attempts remaining, set it back to `pending` with a future `run_at`. The backoff is exponential (5 seconds, 25 seconds, 125 seconds):

```
Attempt 1 fails → retry in 5s
Attempt 2 fails → retry in 25s
Attempt 3 fails → permanently failed
```

Three attempts is the default, configurable per job via the `max_attempts` column. A permanently failed job stays in the table with its error message, so you can see exactly what went wrong:

```sql
SELECT id, kind, error, attempts FROM jobs WHERE status = 'failed';
```

No separate monitoring dashboard needed. It's just SQL.

## Supervised for Resilience

The actor runs under an OTP supervisor. If the actor process dies, the supervisor restarts it automatically under the same registered name. The polling loop resumes, and any jobs that were marked `running` when the crash happened get recovered by a cleanup sweep.

Each job has a `max_running_seconds` column (default: 120 seconds). At the start of every poll cycle, the actor checks for jobs that have been in `running` status longer than their timeout and resets them back to `pending`. Since the `attempts` counter was already incremented when the job entered `running`, the existing retry and backoff logic handles the rest, including capping retries at `max_attempts`. Completed and failed jobs are purged after 7 days. which is plenty of time to debug anything that goes wrong.

This is the BEAM's bread and butter. Erlang's "let it crash" philosophy means you don't write defensive code to prevent every possible failure. You write a supervisor that recovers from it, and a cleanup sweep that catches anything that slips through. The result is less code that's more resilient.

## The Full Architecture

Here's what happens when a user requests a login email:

1. **Request handler** validates the email, generates a token, and calls `jobs.enqueue_email()`, which is just an INSERT into `jobs.db` (microseconds)
2. **Response** returns immediately with the "check your email" page
3. **Jobs actor** picks up the pending job on its next poll (within 1 second)
4. **Actor** marks the job as `running`, calls the Postmark API, marks it `completed`
5. If Postmark is down, the job goes back to `pending` with a backoff delay

All of this runs in a single OS process. The HTTP server, the background worker, and the supervisor are all lightweight BEAM processes sharing the same runtime. One thing to deploy, one thing to monitor, one log stream.

## What We Didn't Need

Here's what's absent from this setup:

- No Redis. The queue is a SQLite table.
- No separate worker process. The actor runs in the same BEAM VM.
- No job framework. It's a few hundred lines of Gleam.
- No monitoring service. Failed jobs are queryable with SQL.
- No deployment coordination. One binary, one process.

This setup can comfortably scale to tens of thousands of clubs. SQLite handles the throughput, the BEAM handles the concurrency, and you can read the whole thing in one sitting.

## What's Next

The jobs system is designed to grow. Adding a new job type means adding a new `kind` string and a handler function. Webhook delivery, report generation, bulk email campaigns: they all follow the same pattern. INSERT a row, let the actor pick it up.

---

*This is Part 4 of the Curling IO Foundation series.*
