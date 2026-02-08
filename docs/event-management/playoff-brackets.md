# Playoff Brackets

## Walkthrough Video[​](#walkthrough-video "Direct link to Walkthrough Video")

The following video will take you, the curling club or event manager, through the basics of creating playoff brackets for a league or competition.

## Finding the Playoff Brackets[​](#finding-the-playoff-brackets "Direct link to Finding the Playoff Brackets")

To get to the stages screen and manage your playoff brackets, first click on the name of a league of competition.

![Events List](/assets/images/events-d18b109ded429fddd604c714df19b8be.png)

You should then see a list of tabs near the top. Click on the **Stages** tab.

![Stages Navigation](/assets/images/navigation-b267264a260493a3bc180c2e5229b896.png)

## Playoff Brackets[​](#playoff-brackets "Direct link to Playoff Brackets")

Our bracket builder makes it easy for you to setup elimination brackets / tournaments. Your events can mix round robins and brackets. E.g. Round robin league play ending in an elimination playoff bracket.

Click the **New bracket** button to create a playoff bracket.

*Playoff Bracket Cheat Sheet* ![Playoff Bracket Cheat Sheet](/assets/images/playoff-bracket-a6483cf623c2cbc05db218f042006b67.png)

### Groups[​](#groups "Direct link to Groups")

* You can have one or more groups in a bracket. Usually these would be named "Group 1", "Group 2", or "A Event", "B Event", etc.
* Edit a group's name by clicking the pencil icon next to it.
* Click the group's name to collapse or show it's grid of games.
* Add new groups by clicking the "Add Group" button at the bottom of the screen.
* Remove a group on it's edit screen if it's empty (has no games).
* You can connect game results between brackets. For example, you could have a B event where teams that have lost play each other, and the winner of the B event could play the winner of the A event in a consolation game.

### Games[​](#games "Direct link to Games")

* Add new games by double clicking on a blank area within a group.
* Click the red ✘ in the top right corner of a game to remove that game.
* Move games around by clicking the header of the game (where the game name is), holding down, and dragging the game to a new location. You can even drag games between groups.
* Double click on a game to edit it and / or assign teams.
* Click and drag a game's green "W" (winner) or red "L" (loser) circle icon to a game position (top of bottom slot) of another game to connect the potential winner or loser to their next game. For example you can click the green "W" of a semifinal game and drag it to the top slot of the final game.
* The grid will automatically grow or shrink as you move games near it's edges.

### Saving[​](#saving "Direct link to Saving")

None of your changes are persisted until you click the "Save" button. So feel free to play around since you can cancel your changes at any time.

## Open Source[​](#open-source "Direct link to Open Source")

Our bracket builder is open source! More details can be found on the project's github page here: <https://pairshaped.github.io/curlingio-bracket-builder/>

## How Winners and Losers Flow Through Brackets[​](#how-winners-and-losers-flow-through-brackets "Direct link to How Winners and Losers Flow Through Brackets")

When you connect games using the winner (green "W") and loser (red "L") connections, you're setting up automatic advancement paths for your bracket.

**Setting up connections:**

* Drag the green "W" from one game to a slot in another game - the winner will automatically go there
* Drag the red "L" from one game to a slot in another game - the loser will automatically go there
* You can connect winners and losers to different games (common in double-elimination or consolation brackets)
* Connections can chain through multiple levels (quarterfinals → semifinals → finals)

**When scores are entered:** Once you've set up these connections and start entering scores on the Scores tab:

* Winners and losers automatically populate their next games as soon as you save each result
* You don't need to manually assign teams to downstream games
* The bracket updates in real-time as games are completed
* Multi-level cascading works automatically - if a semifinal winner advances to the final, that happens immediately

**How team changes work:**

* Each game has two sides (top and bottom) that serve as the connection point between teams and their game results
* When a team advances into a game, they're assigned to a side and inherit whatever is associated with that side
* For first-round games (or any game without an incoming connection), you can manually assign or change teams at any time
* For games that are fed by winner/loser connections, you cannot directly change the team - instead, change the team in the source game and the change will propagate forward automatically
* If you change a score resulting in a different winner, the new winner/loser will propagate to downstream games, taking over the sides there
* The only time teams cannot be automatically swapped is when shot-by-shot data has been recorded (used in about 1% of events), since that data is tied to specific curlers

**Common bracket patterns:**

* **Single elimination:** Only use winner connections - losers are eliminated
* **Double elimination:** Use loser connections to create a "B bracket" where losing teams get a second chance
* **Consolation games:** Connect the losers from semifinals to a 3rd place game
* **A/B/C Events:** Create multiple groups and connect losers from the A Event to the B Event, etc.

The key is to set up your connections before the event starts, then just enter scores and let the system handle team advancement.
