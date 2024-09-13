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


## Payload

```
{
  "id": 14890,
  "name": "2023 Tim Hortons Brier",
  "starts_on": "Mar 03, 2023",
  "ends_on": "Mar 12, 2023",
  "state": "complete",
  "location": "London, Ontario",
  "venue": "Budweiser Gardens",
  "team_restriction": "Open",
  "age_range": "N/A",
  "no_registration_message": "Registration closed",
  "teams": [],
  "registrations": [],
  "spares": [],
  "stages": [],
  "sheet_names": [],
  "end_scores_enabled": true,
  "shot_by_shot_enabled": true,
  "number_of_ends": 10,
  "top_rock": "red",
  "bot_rock": "yellow",
  "draws": []
}
```


### Teams

```
{
  "id": 47029,
  "name": "Alberta (Koe)",
  "short_name": "AB (KOE)",
  "affiliation": "The Glencoe Club",
  "location": "Calgary, Alberta",
  "lineup": []
}
```

#### Lineup

```
{
  "curler_id": 1781,
  "position": "fourth",
  "skip": true,
  "name": "Kevin Koe",
  "delivery": "Right",
  "club_name": "Glencoe Club",
  "club_city": "Calgary"
}

```


### Registrations

```
{
  "team_name": "Karsten Sturmay",
  "lineup": {}
}
```

#### Lineup

```
{
  "first": "Geoff Walker",
  "third": "Mark Nichols",
  "fourth": "Brad Gushue",
  "second": "EJ Harnden",
  "alternate_1": ""
}
```


### Spares

```

```


### Stages

```

```


### Sheet Names

```

```


### Draws

```

```

