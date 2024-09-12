---
id: items
title: Items
slug: /api/items
---

Leagues, competitions, and products can be accessed through the items API via different end points.


## Fetching the list of leagues

```
https://api-curlingio.global.ssl.fastly.net/en/clubs/[subdomain]/leagues
```

Replacing [subdomain] with your clubs subdomain.
For example Curling Canada's Curling I/O site is at https://canada.curling.io, therefore their subdomain is "canada", so their leagues API URL would be:

```
https://api-curlingio.global.ssl.fastly.net/en/clubs/canada/leagues
```


## Fetching the list of competitions

```
https://api-curlingio.global.ssl.fastly.net/en/clubs/[subdomain]/competitions
```

Replacing [subdomain] with your clubs subdomain.
For example Curling Canada's Curling I/O site is at https://canada.curling.io, therefore their subdomain is "canada", so their competitions API URL would be:

```
https://api-curlingio.global.ssl.fastly.net/en/clubs/canada/competitions
```

## Fetching the list of products

```
https://api-curlingio.global.ssl.fastly.net/en/clubs/[subdomain]/products
```

Replacing [subdomain] with your clubs subdomain.
For example Curling Canada's Curling I/O site is at https://canada.curling.io, therefore their subdomain is "canada", so their products API URL would be:

```
https://api-curlingio.global.ssl.fastly.net/en/clubs/canada/products
```

## Filtering results

### By Season

You can filter by season using ```occurred=[delta]``` where delta is the number of years previous to the current.
So for the current season you would pass ```occurred=0``` and for last season you would pass -1, so ```occurred=-1```, etc.

For example, if I wanted to fetch Curling Canada competitions from last year I would use:

```
https://api-curlingio.global.ssl.fastly.net/en/clubs/canada/competitions?occurred=-1
```

## Payload

There are two nodes at the root. One which lists all of the available seasons (varies club by club), and another which lists all of the available items (leagues, competitions, or products).

```
{
  "seasons": [...],
  "items": [...]
}
```

### Seasons

The ```seasons``` node contains an arraw of available seasons for the club.

```
{
  "display": "2024 / 2025",
  "delta": 0
},
{
  "display": "2023 / 2024",
  "delta": -1
}
```

#### Fields

| Field   | Type    | Nullable | Notes                                                                                                                                            |
| ------- | ------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| display | string  | No       | Start year / End year. E.g. 2024 / 2025                                                                                                          |
| delta   | number  | No       | Difference between current season and this season. 0 would be current season, -1 would be the previous season, -2 would be two seasons ago, etc. |


### Items

The ```items``` node contains an array of leagues, competitions, or products depending on which end point was accessed.

```
{
  "id": 17984,
  "name": "Mixed Doubles Super Series - Chilliwack",
  "summary": "Mixed Doubles Super Series - Chilliwack",
  "occurs_on": "Oct 12 - Oct 15",
  "no_registration_message": "Registration closed",
  "publish_results": true
},
{
  "id": 17867,
  "name": "Mixed Doubles Super Series - Sherwood Park",
  "summary": "Mixed Doubles Super Series - Sherwood Park",
  "occurs_on": "Oct 05 - Oct 08",
  "time_zone_short": "MDT",
  "location": "Sherwood Park, AB",
  "venue": "Sherwood Park Curling Club",
  "no_registration_message": "Registration closed",
  "publish_results": true
}
```

#### Fields

| Field                   | Type     | Nullable | Events | Products | Notes                                                                                 |
| ----------------------- | -------- | -------- | ------ | -------- | ------------------------------------------------------------------------------------- |
| id                      | number   | No       | Yes    | Yes      | Unique identifier. E.g. 1                                                             |
| name                    | string   | No       | Yes    | Yes      | E.g. Monday Night Open                                                                |
| summary                 | string   | Yes      | Yes    | Yes      | E.g. Draws are at 7:00 and 9:00 PM                                                    |
| add_to_cart_url         | string   | Yes      | Yes    | Yes      | URL to add item to users cart. E.g. https://demo.curling.io/en/products/1/add_to_cart |
| add_to_cart_text        | string   | Yes      | Yes    | Yes      | Text for the add to cart link. E.g. Register                                          |
| no_registration_message | string   | Yes      | Yes    | Yes      | Message when there is no registration. E.g. Sold out                                  |
| occurs_on               | string   | Yes      | Yes    | No       | When the event starts and ends. E.g. Oct 05 - Oct 08                                  |
| time_zone_short         | string   | Yes      | Yes    | No       | Short form of time zone. E.g. EDT                                                     |
| location                | string   | Yes      | Yes    | No       | Location of event. E.g. Vancouver                                                     |
| venue                   | string   | Yes      | Yes    | No       | Venue for event. E.g. Vancouver Culing Club                                           |
| publish_results         | boolean  | Yes      | Yes    | No       | Whether or not to publish event results. E.g. true                                    |

