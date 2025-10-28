# CurlingSchedules.com

The Curling Draw Schedule Builder creates balanced draws, tracks fairness, and lets you fine-tune every game with drag-and-drop editing. Use this guide to understand how each control works and how the interface responds while you plan events.

[Generate a Schedule](https://curlingschedules.com/)

note

A tutorial video will live here. For now, use the walkthrough below to explore every control.

## Top Controls[​](#top-controls "Direct link to Top Controls")

The controls above the schedule grid set the size of the draw and regenerate the layout.

### Teams dropdown[​](#teams-dropdown "Direct link to Teams dropdown")

Choose how many teams participate (2–48). Adjustments preview immediately and commit on blur or when you stop dragging the slider in mobile browsers. Changing the team count queues a fresh baseline so the optimizer can rebuild the schedule with the new roster.

### Sheets dropdown[​](#sheets-dropdown "Direct link to Sheets dropdown")

Pick the number of active playing surfaces (1–16). When you lower the count, excluded sheets disappear from the grid; when you raise it, new empty columns are added. The optimizer only uses the sheets that remain visible.

### Optimize / Reset button[​](#optimize--reset-button "Direct link to Optimize / Reset button")

Run the optimizer to improve fairness without disturbing manual assignments. If the most optimal layout for your settings already exists, the optimizer button is disabled.

### Shuffle button[​](#shuffle-button "Direct link to Shuffle button")

Randomize the teams across your schedule while maintaining the existing fairness metrics. Use it to explore alternative matchups while keeping the same team and sheet counts.

## Fairness Metrics Bar[​](#fairness-metrics-bar "Direct link to Fairness Metrics Bar")

A line beginning with “Repeats per team” summarizes fairness metrics for the current schedule. “Repeats per team” reports the maximum number of times any team appears, “consecutive” counts unwanted back-to-back appearances, and “total” counts excess games beyond the perfect round robin. Lower values indicate a more balanced draw.

## Schedule Grid[​](#schedule-grid "Direct link to Schedule Grid")

The central table represents the full draw with one row per draw and one column per sheet. Cells contain draggable games and respond to sheet exclusions and conflicts.

### Column headers[​](#column-headers "Direct link to Column headers")

Each header displays the sheet label and a toggle icon. Click the icon to exclude or re-enable a sheet. Excluded sheets turn gray, strike through their labels, and are ignored by the optimizer until re-enabled.

### Table cells[​](#table-cells "Direct link to Table cells")

Cells show each matchup as a draggable game. Drag a game to another cell to move it, or drag it to another game to swap the two assignments. Cells highlight in yellow when they are valid swap targets, red when a placement introduces a conflict, and soft red when a conflict is persistent.

### Bye column[​](#bye-column "Direct link to Bye column")

When there is an odd number of teams, the final column shows “BYE” slots to guarantee each team rests once. These slots cannot receive games and help you verify that byes rotate evenly.

### Drag-and-drop tips[​](#drag-and-drop-tips "Direct link to Drag-and-drop tips")

* Drag a game to another cell to move it; drop on an occupied cell to swap.
* Yellow outlines mark valid swap targets; red outlines signal conflicts that will create duplicate teams in a draw.
* Dropping onto the queue removes the assignment while keeping the game ready to re-place.
* The optimizer respects manual placements; regenerate when you want a fresh baseline.

## Sidebar[​](#sidebar "Direct link to Sidebar")

The sidebar provides quick actions for managing schedules, adjusting preferences, and staging games.

### Schedules[​](#schedules "Direct link to Schedules")

The Schedules panel lists the active working copy, previously saved layouts, and a New schedule template. Each saved entry exposes actions so you can manage draws without leaving the sidebar.

* **Load / Reload**: Load swaps the working grid to the selected schedule. Reload restores the last-saved state of the active entry, discarding any unsaved edits.
* **Export CSV**: Export the chosen schedule as a CSV with draws, sheets, and matchup pairings—either from the active grid or directly from the saved copy.
* **Share**: Open the Share modal with a base64 share code plus metadata. Use Copy code to place it on the clipboard or Download to save the encoded text for teammates.
* **Copy**: Duplicate the saved layout into a new entry so you can tweak variations without overwriting the original.
* **Delete**: Remove the saved schedule after confirmation. The active working copy remains untouched until you load another entry.
* **New schedule**: Create a fresh baseline using the default team and sheet counts—handy when starting a brand-new event.
* **Import code**: Launch the Import modal. Paste a shared code, validate it, and then load or overwrite the current schedule once conflicts are resolved.

### Settings[​](#settings "Direct link to Settings")

Rename the schedule, adjust the singular/plural venue labels, choose numeric or alphabetic sheet sequencing, toggle the draw-packing behavior (“Fill unused sheets with the next round”), and expand the Team names list for up to 48 custom entries. Select Apply to commit pending changes; Cancel closes the panel without saving.

### Save schedule[​](#save-schedule "Direct link to Save schedule")

Collect a schedule title, highlight conflicts or validation warnings, and offer Save with an optional Overwrite action when a name already exists. Use it to store snapshots as you refine the draw.

### Game queue[​](#game-queue "Direct link to Game queue")

Park games temporarily in the drop zone labeled “Drag games here to unassign them.” Games in the queue remain draggable back into any open cell, and the zone shares the conflict-highlighting rules so you can spot issues before reassigning.

***

Updated for Draw Schedule Builder v1.0.0.
