---
id: calendar
title: Calendar
slug: /club-management/calendar
---
import useBaseUrl from '@docusaurus/useBaseUrl';

**[Venue / Ice Booking is Premium Only](/docs/getting-started/premium)**

The calendar system allows you, the curling club manager, to display your draw schedules, schedule custom events, and allow members to book rentals. This comprehensive scheduling tool supports multiple venues including ice sheets and other club facilities.

You can access the calendar by going to the public side of your club's website and selecting the "Schedules" section from the top navigation. You can enable and disable the calendar in your [club settings](/docs/club-management/settings#calendar).

## Calendar Views

The calendar provides four different views to help you manage your schedule. You can toggle the display of games, bookings, and reservations to focus only on what you want to see.

Administrators have an "Admin View" toggle in the bottom right of the screen they can use to create test bookings and see what their members see.

### Day View
Shows time intervals as rows with venues as columns, perfect for detailed scheduling of a single day. This view is ideal for managing ice sheet allocations and venue conflicts.

<img alt="Calendar Customization" src={useBaseUrl('img/docs/club-management/calendar/calendar-customization.png')} />

Use the clock icon to configure your calendar settings, the plus icon to add new venues, and click on existing venues to edit their settings.

### Week View
Displays time intervals as rows with days of the week as columns, giving you a broader perspective on weekly scheduling patterns.

### Month View
Shows days as cells with weeks as rows and days of the week as columns (Sunday through Saturday), providing a high-level overview of your monthly schedule.

### List View
Displays all events in a chronological list format, making it easy to see upcoming events, search for specific bookings, and get a quick overview of all scheduled activities.

## Event Types

The calendar displays and manages three types of events:

### Games
Read-only events that display your draw schedules imported from league and tournament management. These help prevent conflicts when scheduling other events.

### Rental Bookings
Rental bookings made by club members for practice time or private events. These require:
- Premium subscription activation
- Venue configured as bookable
- Appropriate pricing setup

### Reservations
Administrative blocks for maintenance, closures, meetings, and bookable slots.

Reservations can be one-time or recurring, and include:
- **Bookable slot**: Premium option that creates a targeted reservation members can purchase with its own price and duration; these override booking windows when they overlap.
- **Closure**: Blocks rental bookings entirely for the selected period.
- **Standard reservation**: Reserves time for internal events or maintenance without making it bookable.

## Venue Management

<img alt="Edit Venue" src={useBaseUrl('img/docs/club-management/calendar/edit-venue.png')} />

As an administrator, you can manage your club's venues including ice sheets, lounges, and other facilities. Each venue can be configured with:

- **Venue Type**: Specify whether it's an ice sheet or other facility. If the venue type is set to "Sheet" then the system will automatically map it to the club's draw schedules based on its position, and show any games scheduled on that sheet.
- **Publish**: The publish checkbox determines if the venue should be shown to the public
- **Bookable**: The bookable checkbox will allow the venue to be booked
- **Notification Email**: Useful if there's someone, like an ice technician, that needs to be informed when a new booking is made. Administrators will see all new bookings in the Orders section and shouldn't enter their own email here. This is meant for staff who do not have admin access but still need to be notified.
- **Requires Curler**: The requires curler checkbox will require and associate a curler with any bookings for the venue. By requiring a curler profile you are also requiring them to accept your waiver if you are using the Curling IO waivers feature.
- **Tax Configuration**: Configure applicable taxes for bookings
- **Pricing Structure**: Set hourly rates for rentals

### Booking Windows

<img alt="Booking Windows" src={useBaseUrl('img/docs/club-management/calendar/booking-windows.png')} />

Booking windows are an optional way to configure rental availability that you can use instead of, or alongside, recurring bookable slots. Configure booking windows to control when bookings can be made. This helps manage demand and ensures appropriate advance notice for facility preparation. Booking windows have the following fields:

- **Start Time**: When the booking window opens. If empty, defaults to the start of the club's daily operating hours.
- **End Time**: When the booking window closes. If empty, defaults to the end of the club's daily operating hours.
- **Duration**: Controls how long any bookings in the window last
- **Price**: The cost for this booking window

#### When to use booking windows

Booking windows are ideal when you want broad availability without managing a long list of named programs. Clubs that simply open ice for rentals during specific hours, or that need to adjust availability for holidays or bonspiels, can do everything with booking windows alone. You can always add bookable slots when you have a special case that has an explicit name, price, and duration.

### Bookable Slots

<img alt="Bookable Slots" src={useBaseUrl('img/docs/club-management/calendar/bookable-slot.png')} />

Bookable slots let you define specific one-time or recurring reservations members can book with their own duration and price. These targeted openings take precedence over any overlapping booking windows, giving you finer control when you want to promote something like a daily "Practice Ice" slot from 2:00 to 3:00 PM. Bookable slots automatically inherit the venue's notification email, requires-curler requirement, taxes, and any custom fields so that important workflows stay consistent. These can stand alone for clubs with structured offerings, or complement existing booking windows when you want special availability to override the general schedule.

#### When to use bookable slots

Bookable slots shine when you offer defined programs or experiences—think practice ice or premium lounge rentals. Use them for recurring rentals that have a specific name and price point like Practice Ice. You can also layer them on top of booking windows when a special program should replace the usual availability.

## Booking Cart

<img alt="Booking Cart" src={useBaseUrl('img/docs/club-management/calendar/booking-cart.png')} />

When booking is enabled, multiple time slots can be added to the cart and completed as a single check out just like any other purchases.

## Calendar Settings

<img alt="Calendar Settings" src={useBaseUrl('img/docs/club-management/calendar/settings.png')} />

Configure your calendar's core functionality:

- **Default View**: Choose which view (Day, Week, Month, List) loads by default when users access the calendar
- **Time Intervals**: Choose from 15 minute to 2 hour increments (default: 1 hour)
- **Daily Schedule**: Set your operating hours start and end times for each day
- **Min advance booking (days)**: Minimum number of days in advance that bookings can be made. If set to "0" (same day), the system still requires at least a 1 hour advance booking time.
- **Max advance booking (days)**: Maximum number of days in advance that bookings can be made

## Creating Reservations

<img alt="New Reservation" src={useBaseUrl('img/docs/club-management/calendar/new-reservation.png')} />

Administrators can create reservations to block time for maintenance, meetings, or special events:

1. **Select Time and Venue**: Choose the date, time, and venue for your reservation
2. **Reservation Type**: Select closure, bookable slot (premium custom price/duration), or a standard reservation for internal events
3. **Recurring Options**: Set up repeating reservations for regular maintenance schedules
4. **Details**: Add descriptions and notes for internal reference

## Key Features

- **Drag-and-Drop Scheduling**: Easily move and reschedule events (admin only)
- **Multi-Venue Support**: Manage ice sheets, lounges, and other club facilities
- **Conflict Detection**: Automatic prevention of double-bookings
- **Mobile Responsive**: Works seamlessly on desktop, tablet, and mobile devices
