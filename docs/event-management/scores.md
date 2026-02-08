---
id: scores
title: Scores
slug: /event-management/scores
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Walkthrough Video

The following video will take you, the curling club or event manager, through the basics of recording scores for a league or competition.

<div className="text--center videoWrapper">
  <iframe width="100%" src="https://www.youtube.com/embed/EOdBqh3txkY" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
</div>

## Finding the Scores Section

You can record the results of each of your games within a league or competition.
To get to the scores screen, first click on the name of a league or competition.

![Events List](/img/docs/event-management/shared/events.png)

You should then see a list of tabs near the top.
Click on the **Scores** tab.

![Scores Navigation](/img/docs/event-management/scores/navigation.png)

## Select the Game to Score

To enter a result for one of your games, simply click on the name of the game.

![Select a Game](/img/docs/event-management/scores/select-a-game.png)

This will open up the game window.

## Scoring a Game

With the game window open, you can click the button for who won or lost, which will automatically select the opposite option for the opponent.
You can optionally enter a score if you want to keep track.

![Scoring a Game](/img/docs/event-management/scores/scoring-a-game.png)

Click the **Save** button when you're done to save the changes.

## End Scores

**[This is a Premium Only Feature](/docs/getting-started/premium)**

If end scores are enabled for your league or competition, you'll be presented with more options:

![End Scores](/img/docs/event-management/scores/end-scores.png)

* Scoring each end.
* Setting which team has the first hammer (last shot in first end).
* Choosing the rock color for each team.
* If a game is tied after all ends have been played (10), we will keep adding new ends until one team scores, or until you set the result to "Tied".


## Open Source

Our scoring application is open source! More details can be found on the project's github page here: [https://pairshaped.github.io/curlingio-scoring/](https://pairshaped.github.io/curlingio-scoring/)


## How Bracket Advancement Works

When you enter a score for a bracket game, the system automatically advances teams to their next games based on the winner/loser connections you've set up in the bracket builder.

**What happens automatically:**
- The winning team moves to the next game if you've connected the winner (green "W") to another game
- The losing team moves to their next game if you've connected the loser (red "L") to another game
- This happens immediately when you save the score
- Multi-level brackets work automatically - teams flow through quarterfinals → semifinals → finals without any extra work

**Understanding game sides:**
- Each game has two sides (top and bottom positions) that associate teams with their results
- When a team advances into a game, they're assigned to one of these sides
- The side holds the score, outcome, and other game data - not the team itself
- This means teams can be swapped in and out, and they'll take over whatever results are associated with that side
- The only exception is shot-by-shot data (used in about 1% of events), which tracks specific curlers and cannot be reassigned to different teams

**Removing or changing scores:**
- If you change a score that results in a different winner, the new winner/loser will propagate to downstream games
- The new teams will take over the sides in downstream games, inheriting any scores or data already there

**Changing teams in bracket games:**
- For first-round games (or any game without an incoming winner/loser connection), you can manually change the teams at any time
- For games that are fed by another game's winner or loser, you cannot directly change the team - instead, change the team in the source game and that change will propagate forward through all connected games

This automatic advancement means you can focus on entering scores and let the system handle moving teams through your bracket.
