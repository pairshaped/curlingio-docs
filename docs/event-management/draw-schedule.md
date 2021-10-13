---
id: draw-schedule
title: Draw Schedule
slug: /event-management/draw-schedule
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Walkthrough Video

The following video will take you, the curling club or event manager, through the basics of setting up teams for a league or competition.
If you're new to Curling I/O, it's worthwhile to watch this before wading through the rest of our documentation.

<div className="text--center videoWrapper">
  <iframe width="100%" src="https://www.youtube.com/embed/j9rZtDobvg0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
</div>

## Finding the Draw Schedule Section

You can generate and / or manually create a draw schedule for each of your leagues and competitions.
To get to the draw schedule screen, first click on the name of a league or competition.

![Events List](/img/docs/event-management/shared/events.png)

You should then see a list of tabs near the top.
Click on the **Schedule** tab.

![Draw Schedule Navigation](/img/docs/event-management/draw-schedule/navigation.png)

## Settings

Before you can generate a draw schedule, Curling I/O first needs some basic information.
Click the *Change Settings* button to provide this information.

### Number of sheets

This will default to the number of sheets defined in your [club settings](/docs/club-management/settings), but you can override it here if you are using fewer sheets for a specific league or competition.

### Sheet prefix

Do you want to call them "Sheets" or "Ice" in the public view of your draw schedule.

### Sheet ordering

Do you want to order your sheets by alphanumeric (A, B, C, ... A1, B1, etc.) or numeric (1, 2, 3, ... 27, 28, etc.)?

### Show sheets

Do you want to display the sheet names on the public view of your draw schedule?

### Interval

How often do the draws occur?
For leagues this is usually *Every Week*, but could also be *Every Other Week* or *Every Day*.

### Draw days

A comma separated list of the day of the week that your draws occur on.
If it's one draw per week, every Monday, just enter "Monday".
If it's two draws per week, every Tuesday and Thursday, enter "Tuesday, Thursday".

### Draw times

A comma separated list of draw times.
If your league is every Monday at 7:00 PM, just enter "7:00 pm".
If your league is every Monday at 7:00 PM and 9:45 PM, enter "7:00 pm, 9:45 pm".

### Exclude dates

If there are any days that fall within your schedule that should not have a draw, you can specify it here.
For example, to exclude christmas, you would enter "Dec 25".

## Schedule Generation

Curling I/O will do it's best to automatically generate your draw schedule when you ask it to do so.

**Important: Regenerating an existing schedule will wipe it out and start from scratch.**

The auto-generation will use matching [draw schedule templates](/docs/club-management/draw-schedule-templates) provided by Curling I/O or custom templates specific to your club.
If there's more than one matching draw schedule template, you will be prompted to choose which one to use.

If there are no matching draw schedule templates, then we will attempt to auto-assemble your draw schedule.
This is usually a good starting place, but you may need to make some manual tweaks.

## Manual Scheduling

You can click on any game cell (combination of draw and sheet) and a dropdown will appear listing the available games that can be scheduled.
If the dropdown doesn't appear, make sure you remove the contents of the cell first.

![Manual Edit](/img/docs/event-management/draw-schedule/manual-edit.png)

Only the games that can be assigned will be shown.
If a a game is already scheduled it won't show up in the dropdown, and if you need to reschedule it, you first need to remove it from the game cell where it is already scheduled.
If a team is already playing during a draw you won't be able to schedule that team again for the same draw (a team can't play two games at the same time).

You can add draws to your schedule by clicking the "Add Draw" near the bottom right of the screen.
You can remove draws from your schedule by clicking the "X" button next to the draw.
You can undo all of the changes made since your last save by clicking the "Reset" button.

When you're happy with your draw schedule, click the "Save" button to save it.
