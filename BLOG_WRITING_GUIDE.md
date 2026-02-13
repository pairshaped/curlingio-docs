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

## Target Audience

1. **Club managers evaluating platforms** - Build confidence through transparency
2. **Developers building SaaS** - Real-world architecture and scaling insights
3. **Gleam community** - Large-scale production application examples
4. **People migrating from Rails** - Practical migration journey
5. **SQLite advocates/skeptics** - Per-sport database architecture at scale
6. **Indie hackers** - Vertical-first scaling, cost optimization, building profitably
7. **Sports tech builders** - Domain-specific insights for league management
