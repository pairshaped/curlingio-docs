---
id: draw-schedule-templates
title: Draw Schedule Templates
slug: /event-management/draw-schedule-templates
---
import useBaseUrl from '@docusaurus/useBaseUrl';

**[This is a Premium Only Feature](/docs/getting-started/premium)**

Draw schedules templates allow you, the curling club manager, to pre-create draw schedules that you will re-use between multiple leagues and competitions year after year.

Curling IO provides a standard set of templates, which will likely grow over time.

You can copy these templates as a starting point or create your own from scratch.

When you generate a draw schedule for one of your leagues or competitions, Curling IO will find any templates that closely match the number of teams and sheets, then ask you to select which one you would like to use.

:::tip
Draw Schedule Templates use the same schedule builder as [CurlingSchedules.com](/docs/advanced/curlingschedules). You can create schedules there and import them into Curling IO, or create them directly within Curling IO. The main difference is that templates in Curling IO are saved to your club's database instead of your browser's local storage.
:::


## Finding Draw Schedule Templates

Within your admin area, click on the **Club** dropdown menu in the top bar and then click on **Draw Schedule Templates**.

![Navigation](/img/docs/event-management/draw-schedule-templates/navigation.png)


## The Basics

### Creating the Template

When you first create the template, you need to fill in a few required fields and then we'll generate all of the games for you.

#### Name

Give your draw schedule template a description name. As an example, the name of one of our standard templates is "Standard: 8 teams, 4 sheets".

If the template is custom to a specific league or competition though, you will probably name it after that league or competition.

#### Teams

How many teams will there be for this draw schedule? If you are running 2 pools, please double the number of teams. For example, 2 pools of 8 teams each will require your draw schedule template to specify 16 teams.

#### Sheets

How many sheets are being used for this draw schedule?

#### Draws

How many draws will there be in this draw schedule?

#### Pools

If you are running multiple round robin stages (pools). Multiple pools are assumed to have the same number of teams in each. For example, 2 pools of 8 teams each, will assign team numbers of 1-8 for the first pool, and 9-16 for the second pool.

When using a multiple pool draw schedule template, each of your pools must have the same number of teams and sheets.


### Using the Schedule Builder

After creating the template, you'll use a visual schedule builder to create your draw schedule. This is the same schedule builder used on curlingschedules.com.

#### Top Controls

The controls above the schedule grid let you adjust the size of your draw and regenerate the layout.

**Teams dropdown**

Choose how many teams participate (2–48). When you change the team count, the schedule builder will create a new baseline layout that you can then customize.

**Sheets dropdown**

Pick the number of sheets you'll use (1–16). When you lower the count, excluded sheets disappear from the grid; when you raise it, new empty columns are added.

**Optimize / Reset button**

Run the optimizer to improve fairness without disturbing games you've manually placed. If the schedule is already optimal for your settings, this button will be disabled.

**Shuffle button**

Randomize the teams across your schedule while maintaining fairness. Use it to explore different matchup patterns.

#### Fairness Metrics Bar

A line beginning with "Repeats per team" shows how balanced your schedule is. "Repeats per team" shows the maximum number of times any team appears, "consecutive" counts unwanted back-to-back games, and "total" counts extra games beyond a perfect round robin. Lower numbers mean a more balanced schedule.

#### Schedule Grid

The central table shows your full draw with one row per draw and one column per sheet.

**Column headers**

Each header shows the sheet label and a toggle icon. Click the icon to exclude or re-enable a sheet. Excluded sheets turn gray and are ignored by the optimizer until re-enabled.

**Table cells**

Cells show each game as a draggable box. Drag a game to another cell to move it, or drag it onto another game to swap the two. Cells highlight in yellow when they're valid targets, and red when a move would create a conflict (like the same team playing twice in one draw).

**Bye column**

When you have an odd number of teams, a final column shows "BYE" slots to ensure each team gets one rest. These slots help you verify that byes rotate evenly through all teams.

**Drag-and-drop tips**

- Drag a game to another cell to move it; drop on an occupied cell to swap the two games
- Yellow outlines mark valid targets; red outlines mean the move would create a conflict
- Drop a game onto the queue at the bottom to remove it from the schedule while keeping it available to place later
- The optimizer respects games you've manually placed

#### Sidebar

The sidebar provides quick actions for managing your template and adjusting settings.

**Schedules**

In Curling IO, your templates are saved to your club's database rather than your browser's local storage. This means:

- **Save**: Saves your current template to the database. You can check the "Active" checkbox to make it available when generating draw schedules
- **Load**: If editing an existing template, you can reload it to discard any unsaved changes
- **Import code**: You can paste a share code from CurlingSchedules.com to import a schedule you created there

**Settings**

Name your template and adjust the sheet labels (numeric or alphabetic). Click Apply to save your changes.

**Game queue**

Drag games here to temporarily remove them from the schedule. Games in the queue can be dragged back into any cell on the grid.


## Copying a Draw Schedule Template

You can copy any of your existing draw schedule templates to use them as a starting point for further customization. When viewing the template list, click the **Copy** link next to the template you want to duplicate.

The copied template will be created with "(Copy)" added to its name and will be set to inactive status until you review and activate it.

## Deleting Draw Schedule Templates

To remove a draw schedule template, click the **Delete** link next to it in the template list. You can only delete templates created for your club - global templates provided by Curling IO cannot be deleted.


