# Curling IO Dev Blog - Writing Guide

Developer insights on building and enhancing Curling IO - architecture decisions, feature deep-dives, performance optimizations, and lessons learned.

## Writing Posts

### Create a new post

```bash
# Create file: blog/YYYY-MM-DD-post-slug.md
touch blog/2026-02-12-my-post-title.md
```

### Post frontmatter

```markdown
---
slug: my-post-slug
title: 'My Post Title'
authors: [dave]
tags: [tag1, tag2]
---

Your intro paragraph here.

<!--truncate-->

Rest of the post content...
```

### Authors

Edit `blog/authors.yml` to add new authors.

## Running Locally

```bash
# Start dev server
yarn start

# Build for production
yarn build
```

## Post Ideas

### Platform Rebuild (Gleam Migration)
- [ ] Database schema design (Postgres → SQLite)
- [ ] Registration flow implementation
- [ ] Multi-tenancy with compile-time safety
- [ ] BEAM concurrency patterns
- [ ] Agent-native API design
- [ ] Migration strategy (zero downtime)
- [ ] Performance benchmarks (Rails vs Gleam)
- [ ] SQLite at scale lessons learned
- [ ] Vertical scaling experiences
- [ ] Discount rule engine in pure functions

### Features & Enhancements
- [ ] How draw scheduling works (multi-sheet allocation)
- [ ] Real-time scoring and standings updates
- [ ] Email automation for leagues
- [ ] Payment processing with Stripe Connect
- [ ] Family account management
- [ ] Custom field framework
- [ ] Waiver management and GDPR compliance
- [ ] Mobile-first responsive design

### Performance & Operations
- [ ] Caching strategies (Varnish + ETS)
- [ ] Database query optimization
- [ ] Handling registration rush periods
- [ ] Monitoring and observability
- [ ] Deployment pipeline
- [ ] Backup and disaster recovery
- [ ] Cost optimization ($20-1000/mo journey)

### Product & Business
- [ ] Building for curling clubs (domain insights)
- [ ] Feature prioritization process
- [ ] Customer feedback loops
- [ ] Pricing model evolution
- [ ] Building in public journey

## Guidelines

- **Be technical** - Show code, explain trade-offs, discuss alternatives
- **Be honest** - Document mistakes and lessons learned
- **Be transparent** - Share performance numbers, costs, timelines
- **Be practical** - Focus on real-world decisions, not theory
- **Show, don't tell** - Code examples, diagrams, benchmarks

## Avoiding AI-Sounding Writing

Reference: [Wikipedia: Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing)

AI-generated text has recognizable patterns that erode reader trust. Since we use AI to draft posts, we need to actively edit these out. The goal is writing that sounds like a person who knows curling, not a language model that learned about it statistically.

### Words and phrases to cut or replace

**Significance puffery** — LLMs inflate importance by default. Cut these:
- "stands/serves as", "is a testament to", "underscores", "highlights its importance"
- "pivotal", "crucial", "key role/moment", "significant shift", "deeply rooted"
- "marking/shaping the", "setting the stage for", "indelible mark"
- "enduring legacy", "transformative power", "broader movement"

**Promotional language** — even without promotional intent, LLMs default to ad copy:
- "boasts", "vibrant", "rich" (figurative), "profound", "showcasing", "exemplifies"
- "nestled", "in the heart of", "groundbreaking", "renowned", "diverse array"
- "commitment to", "natural beauty", "enhancing", "featuring"

**Overused AI vocabulary** — words that spiked in frequency post-2023 and signal AI:
- "Additionally" (especially to start sentences), "delve", "tapestry", "landscape" (abstract)
- "intricate/intricacies", "foster/fostering", "garner", "interplay"
- "align with", "resonate with", "encompassing", "valuable insights"

**Vague attribution** — LLMs attribute opinions to nobody in particular:
- "Industry reports suggest", "Experts argue", "Observers have noted"
- "Several sources indicate", "has been described as"
- If you can't name the source, drop the claim.

### Structural patterns to avoid

**Replacing "is" with fancier verbs** — LLMs swap simple copulas for "serves as", "stands as", "represents", "boasts", "features", "offers". Just say "is" when that's what you mean.

**"Not only X, but also Y"** — LLMs use negative parallelisms ("It's not just about X, it's Y") to sound balanced and thoughtful. It's a crutch. State the point directly.

**Rule of three** — "adjective, adjective, and adjective" or "noun, noun, and noun" lists that exist to sound comprehensive rather than to communicate. Two specifics beat three generics.

**Elegant variation** — using different synonyms each time you reference the same thing (e.g., "the platform", "the tool", "the system", "the solution" all in one paragraph). Just repeat the word. Readers don't notice repetition; they do notice when you're clearly thesaurus-shopping.

**False "from X to Y" ranges** — figurative ranges where the endpoints are loosely related ("from registration to community building"). Only use from/to when there's a real scale.

**The "Despite challenges" formula** — "Despite its [positive qualities], [subject] faces challenges... Despite these challenges, it continues to [vague positive]". If you're writing about challenges, be specific about what they are and what you did about them.

**No em dashes** — Do not use em dashes (—) at all. They are one of the strongest AI writing tells. Use commas, periods, colons, or parentheses instead. Rewrite the sentence if needed.

**Boldface overuse** — bolding every key term or phrase reads like a slide deck, not a blog post. Reserve bold for actual emphasis, not decoration.

### What to do instead

- **Be specific** — "We handle 360+ Curling Canada competitions" beats "We power a wide array of prestigious national events."
- **Use simple verbs** — "is", "has", "runs", "does", "makes" are fine. They're invisible, which is the point.
- **Let facts carry weight** — if the fact is impressive, state it plainly. If it needs puffery to sound impressive, it probably isn't.
- **Read it out loud** — if you wouldn't say it to another curler at the club, rewrite it.
- **Cut filler sentences** — if a sentence only restates what the previous one said in different words, delete it. LLMs pad for length.

## Target Audience

1. **Club managers evaluating platforms** - Build confidence through transparency
2. **Developers building SaaS** - Real-world architecture and scaling insights
3. **Gleam community** - Large-scale production application examples
4. **People migrating from Rails** - Practical migration journey
5. **SQLite advocates/skeptics** - Per-sport database architecture at scale
6. **Indie hackers** - Vertical-first scaling, cost optimization, building profitably
7. **Sports tech builders** - Domain-specific insights for league management
