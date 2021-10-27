---
id: stages
title: Stages
slug: /event-management/stages
---
import useBaseUrl from '@docusaurus/useBaseUrl';

Stages are your round robins and eventually playoff brackets (coming soon!).

To get to the stages screen, first click on the name of a league of competition.

![Events List](/img/docs/event-management/shared/events.png)

You should then see a list of tabs near the top.
Click on the **Stages** tab.

![Stages Navigation](/img/docs/event-management/stages/navigation.png)

## Round Robins

Currently the only stage type we support are "Round Robins".

Before you can schedule or score your games, you need to create those games by creating a Round Robin stage.

Click the **New round robin** button to create a round robin.

### Name

If you have more than one stage what you name your round robin will show up on the public site in a dropdown menu.

If you just have the one stage, a common name you might use is "Regular Season".

### Iterations

How many times should teams play each other?

An iteration of *1* will generate games where every team plays every other team one time.
For example, a round robin with *8 teams* and *2 iterations* will generate *56 games* where each team plays every other team *twice*.

### Ranking Method

This is how teams will be ranked for your event's standings.
Provincial and National competitions will typically assign 1 point per win, 0 for ties (since there are no ties), and 0 for losses.
Most club leagues will use 3 points per win, 1 point per tie, and 0 point per loss.

### Tiebreaker

How do you want to handle point assignment for ties?
Provincial and national competitions will typically break tied teams into recursive subgroups for head to head comparisons and fall back to the skill ranking if teams are still tied after breaking out into their smallest possible head to head groups.
For most club leagues it's usually OK to have teams tied in the standings and you can select *None*.

### Results carry over to

You can have this round robin's results carry over to another round robin for combined standings (a.k.a. crossover).
For example; the top four teams from two qualifier round robins, Pool A and Pool B, carrying into a championship round.
You will still need to assign the teams that carry over.

### Team Assignment

These are the teams that will participate in the round robin.
If you haven't assembled the teams yet, you can still generate the games and draw schedule.
The system will simply mark any unassigned team slot as *TBD*.

![Team Assignment](/img/docs/event-management/stages/team-assignment.png)

### Notes

After saving a round robin, the system will generate all of it's games in the background. It might take a few seconds before this completes and you can set up the draw schedule.

When you make changes to a round robin that affect the games generated you may have to edit or rebuild your draw schedule to compensate those changes.

## Elimination Brackets

We're busy working on a new drag and drop bracket builder. We'll let you know when it's done and can be used to assemble your elimination / playoff brackets.
