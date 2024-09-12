---
id: event-details
title: Event Details
slug: /api/event-details
---

Events are leagues and competitions.


## Fetching the event

```
https://api-curlingio.global.ssl.fastly.net/en/clubs/[subdomain]/events/[id]
```

Replacing **[subdomain]** with your clubs Curling I/O subdomain, and **[id]** with the events (league or competition) unique identifier.
For example Curling Canada's Curling I/O site is at https://canada.curling.io, and the 2023 Time Hortons Brier ID is 14890.
Therefore we replace **[subdomain]** with **canada** and **[id]** with **14890** giving us:

```
https://api-curlingio.global.ssl.fastly.net/en/clubs/canada/events/14890
```

Replacing **en** with **fr** will fetch the french version.

