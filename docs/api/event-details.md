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

Replacing **[subdomain]** with your clubs Curling IO subdomain, and **[id]** with the events (league or competition) unique identifier.
For example Curling Canada's Curling IO site is at https://canada.curling.io, and the 2023 Time Hortons Brier ID is 14890.
Therefore we replace **[subdomain]** with **canada** and **[id]** with **14890** giving us:

```
https://api-curlingio.global.ssl.fastly.net/en/clubs/canada/events/14890
```

Replacing **en** with **fr** will fetch the french version.


Note: If you don't know the event ID, you can find it within the [Curling IO admin area](https://curling.io/docs/club-management/leagues), or by using the [Items API to get a list of events along with their IDs](/docs/api/items).


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
  "stages": [],
  "sheet_names": [],
  "end_scores_enabled": true,
  "number_of_ends": 10,
  "top_rock": "red",
  "bot_rock": "yellow",
  "shot_by_shot_enabled": true,
  "last_stone_draw_enabled": false,
  "draws": []
}
```


### Teams

Within the teams array node (```"teams": []```) you have team data.
These team IDs will be referenced in standings and game_positions.

Path: teams -> team

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


Within the lineup array node (```"lineup": []```) you have curler data.
The curler IDs will be referenced in shots.

Path: teams -> team -> lineup

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


### Stages

Within the stages array node (```"stages": []```) you have round robin and bracket data.

Path: stages -> stage

```
{
  "id": 6736,
  "type": "RoundRobin",
  "name": "Pool A",
  "standings": [],
  "games": []
}

```

#### Standings

Within the standings array node (```"standings": []```) you have team standings / rank data.

Path: stages -> stage -> standings -> standing


```
{
  "id": 47187,
  "rank": 1,
  "played": 8,
  "wins": 8,
  "ties": 0,
  "losses": 0
},

```

#### Games

Within the games array node (```"games": []```) you have game data.

Path: stages -> stage -> games -> game


```
{
  "name": "WC2 (CAR) vs NU (HIG)",
  "state": "complete",
  "id": "fd1bc71e",
  "game_positions": []
}

```

##### Game Positions


Within the game_positions array node (```"game_positions": []```) you have game position (side) data, which includes end scores.
Evey game should have exactly two game positions, one for each team participating.
It's possible to have a game position without a team assigned yet for bracket games, where it's populated by the winner / loser from another game that hasn't finished yet.
The end scores are indexed, so the first end score of 2 in the below example is in the first end, followed by 1 in the second end, 0 in the third, etc.

Path: stages -> stage -> games -> game -> game_positions -> game_position

```
{
  "team_id": 47037,
  "score": 8,
  "result": "won",
  "top_rock": true,
  "first_hammer": true,
  "time_remaining": "606",
  "end_scores": [2, 1, 0, 0, 3, 0, 2, 0, 0, 0],
  "shots": []
}

```

###### Shots

Within the shots array node (```"shots": []```) you have shot by shot data. Most events don't track shot by shot data.
The end number references the indexes from the end scores, starting at 1 (not 0).

Path: stages -> stage -> games -> game -> game_positions -> game_position -> shots -> shot

```
{
  "turn": "I",
  "throw": "E",
  "rating": "4",
  "curler_id": 56162,
  "end_number": 1,
  "shot_number": 1
}

```


### Draws

Within the draws array node (```"draws": []```) you have draw schedule data.
The draw sheets list the game IDs for each sheet in order.
In this example, the game ID of "3db7fda0" is on Sheet 1.
Often sheets will be null when there is no game on that sheet for the draw.

The epoch field is a timestamp in seconds and can be used to sort / order draws if needed. Draws should be in the correct order already (oldest -> newest).

Path: draws -> draw

```
{
  "id": 127575,
  "label": "1",
  "epoch": 1739577600,
  "starts_at": "Mar 03 at  7:00 pm",
  "attendance": 3910,
  "draw_sheets": ["3db7fda0", "cc34ae70", "5f1d2e2b", "0da23f90"]
}
```
