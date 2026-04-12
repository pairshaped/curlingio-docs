# Automate Club Management With AI

April 12, 2026 ·

<!-- -->

5 min read

![Dave Rapin](https://avatars.githubusercontent.com/u/1202?v=4)

Dave Rapin

Founder @ Curling IO

Imagine you're a club manager setting up next season. You open your AI agent and type (or just say):

> Set up early bird pricing for the Tuesday Night League. 15% off if they register before September 1st.

Five seconds later, it's done. No browser tabs, no forms, no clicking through menus. With Curling IO v3, this is how it will work.

## The Agent in Action[​](#the-agent-in-action "Direct link to The Agent in Action")

The following conversation occurs after you've already logged in to Curling IO and authorized the `curling` CLI (more on that below):

> **You:** Help me get the new season ready. Set up early bird pricing for the Tuesday Night League, 15% off if they register before September 1st.

Agent

Ran 2 commands

```
$ curling call admin.items.list --org vancouver
$ curling commands admin.discounts.create
```

Found the Tuesday Night League (2026-27). Creating the early bird discount now.

Ran 1 command

```
$ curling call admin.discounts.create --org vancouver '{"params": {...}}'
```

Done. 15% early bird discount on the Tuesday Night League, valid until September 1st. I also see a Monday Mixed and Friday Doubles league for this season. Want early bird pricing on those too?

> **You:** Same deal for Monday Mixed. Skip Friday, that one fills up on its own.

Agent

Ran 1 command

```
$ curling call admin.discounts.create --org vancouver '{"params": {...}}'
```

Done. Monday Mixed has the same 15% early bird discount. By the way, last season's Tuesday Night League still has 3 people on the waitlist. Want me to send them an email letting them know registration is open for the new season?

> **You:** Yes, do that.

Agent

Ran 2 commands

```
$ curling call admin.waitlists.list --org vancouver '{"item_id": 31}'
$ curling call admin.emails.send --org vancouver '{"params": {...}}'
```

Sent. Three emails went out to the waitlisted curlers from last season's Tuesday Night League, letting them know the 2026-27 season is open with early bird pricing until September 1st.

> **You:** What does our registration look like so far this season?

Agent

Ran 1 command

```
$ curling call admin.items.list --org vancouver '{"season": "2026-27"}'
```

Here's where things stand for 2026-27:

| League               | Registered | Capacity | Status |
| -------------------- | ---------- | -------- | ------ |
| Monday Mixed         | 14         | 72       | Open   |
| Tuesday Night League | 23         | 96       | Open   |
| Friday Doubles       | 52         | 64       | Open   |

Friday Doubles is already at 81% capacity with no discount. Tuesday and Monday are still early. Want me to keep an eye on these and let you know when any league crosses 80%?

> **You:** Yeah, check in with me weekly on that.

Season setup, targeted outreach, and reporting in a five-minute conversation.

The same pattern works for setting up a full season's events, bulk-adjusting fees across leagues, generating financial reports, or processing waitlists. Anything an admin can do through the web interface, an agent can do through the CLI.

This isn't theoretical. We're building this right now.

## How It Works[​](#how-it-works "Direct link to How It Works")

Behind the scenes, the agent is calling a command-line tool called `curling`. Any AI agent with shell access can call it: OpenClaw, NemoClaw, Claude Code, Codex.

We considered MCP (Model Context Protocol), a standard for connecting AI models to external tools. We built a working prototype. But a CLI is simpler, more portable, and works with every agent framework, not just MCP-compatible ones. MCP can come later as a thin layer on top.

The CLI connects to the same backend as the Curling IO admin web interface. Every admin operation available in the browser is also available through the CLI. When we add a new feature to the admin, it becomes available to agents automatically with no client update.

## Authentication[​](#authentication "Direct link to Authentication")

Before an agent can manage your club, you grant it access. One time, takes about 30 seconds.

```
curling login
```

The CLI prints a URL. You open it, log into Curling IO, and approve access. That's it. The CLI stores a token and handles refreshes silently from that point on.

This uses the OAuth 2.1 device flow (RFC 8628), the same standard behind the GitHub CLI, Google Cloud CLI, and AWS SSO. It's well understood by security teams and works in any environment.

After login, the agent discovers which clubs you manage:

```
curling orgs
```

And scopes its commands accordingly:

```
curling call admin.events.list --org vancouver
```

## Who It's For[​](#who-its-for "Direct link to Who It's For")

The real target is an AI agent acting on behalf of a club manager. The CLI's natural users are administrators who are early adopters of AI tools, the ones already using agents to help manage their inbox, draft communications, and automate repetitive work. For them, giving an agent access to `curling` is the next logical step.

We build it as if a human expert might use it directly. No wizard prompts, no hand-holding. Terse, precise output. Comprehensive `--help` that rewards reading. Agents are evolving toward human-like behaviour, so building a proper CLI serves both audiences.

## The Bigger Picture[​](#the-bigger-picture "Direct link to The Bigger Picture")

Club management software has always been built for humans navigating web interfaces. That's the right design for most users most of the time. But administrators have repetitive, structured work: setting up a new season, bulk-updating pricing, generating reports, approving registration queues. Work that an agent can handle.

Most clubs aren't thinking about this yet, but we believe they will be within the next few years as AI tools and agents become more prominent. In the near term it'll probably be just a handful of technically oriented club managers who give it a try, and will probably never go back.

**Tags:**

* [ai](/blog/tags/ai.md)
* [agents](/blog/tags/agents.md)
