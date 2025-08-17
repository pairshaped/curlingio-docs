# Calendar

**[Venue / Ice Booking is Premium Only](/docs/getting-started/premium.md)**

The calendar system allows you, the curling club manager, to display your draw schedules, schedule custom events, and allow members to book rentals. This comprehensive scheduling tool supports multiple venues including ice sheets and other club facilities.

You can access the calendar by going to the public side of your club's website and selecting the "Schedules" section from the top navigation. You can enable and disable the calendar in your [club settings](/docs/club-management/settings.md#calendar).

## Calendar Views[​](#calendar-views "Direct link to Calendar Views")

The calendar provides four different views to help you manage your schedule. You can toggle the display of games, bookings, and reservations to focus only on what you want to see.

Administrators have an "Admin View" toggle in the bottom right of the screen they can use to create test bookings and see what their members see.

### Day View[​](#day-view "Direct link to Day View")

Shows time intervals as rows with venues as columns, perfect for detailed scheduling of a single day. This view is ideal for managing ice sheet allocations and venue conflicts.

![Calendar Customization](/img/docs/club-management/calendar/calendar-customization.png)

Use the clock icon to configure your calendar settings, the plus icon to add new venues, and click on existing venues to edit their settings.

### Week View[​](#week-view "Direct link to Week View")

Displays time intervals as rows with days of the week as columns, giving you a broader perspective on weekly scheduling patterns.

### Month View[​](#month-view "Direct link to Month View")

Shows days as cells with weeks as rows and days of the week as columns (Sunday through Saturday), providing a high-level overview of your monthly schedule.

### List View[​](#list-view "Direct link to List View")

Displays all events in a chronological list format, making it easy to see upcoming events, search for specific bookings, and get a quick overview of all scheduled activities.

## Venue Management[​](#venue-management "Direct link to Venue Management")

![Edit Venue](/img/docs/club-management/calendar/edit-venue.png)

As an administrator, you can manage your club's venues including ice sheets, lounges, and other facilities. Each venue can be configured with:

* **Venue Type**: Specify whether it's an ice sheet or other facility. If the venue type is set to "Sheet" then the system will automatically map it to the club's draw schedules based on its position, and show any games scheduled on that sheet.
* **Publish**: The publish checkbox determines if the venue should be shown to the public
* **Bookable**: The bookable checkbox will allow the venue to be booked
* **Notification Email**: Useful if there's someone, like an ice technician, that needs to be informed when a new booking is made. Administrators will see all new bookings in the Orders section and shouldn't enter their own email here. This is meant for staff who do not have admin access but still need to be notified.
* **Requires Curler**: The requires curler checkbox will require and associate a curler with any bookings for the venue. By requiring a curler profile you are also requiring them to accept your waiver if you are using the Curling IO waivers feature.
* **Tax Configuration**: Configure applicable taxes for bookings
* **Pricing Structure**: Set hourly rates for rentals

### Booking Windows[​](#booking-windows "Direct link to Booking Windows")

![Booking Windows](/img/docs/club-management/calendar/booking-windows.png)

Configure booking windows to control when bookings can be made. This helps manage demand and ensures appropriate advance notice for facility preparation. Booking windows have the following fields:

* **Start Time**: When the booking window opens. If empty, defaults to the start of the club's daily operating hours.
* **End Time**: When the booking window closes. If empty, defaults to the end of the club's daily operating hours.
* **Duration**: Controls how long any bookings in the window last
* **Price**: The cost for this booking window

## Booking Cart[​](#booking-cart "Direct link to Booking Cart")

![Booking Cart](/img/docs/club-management/calendar/booking-cart.png)

When booking is enabled, multiple time slots can be added to the cart and completed as a single check out just like any other purchases.

## Event Types[​](#event-types "Direct link to Event Types")

The calendar displays and manages three types of events:

### Games[​](#games "Direct link to Games")

Read-only events that display your draw schedules imported from league and tournament management. These help prevent conflicts when scheduling other events.

### Rentals - Premium Feature[​](#rentals---premium-feature "Direct link to Rentals - Premium Feature")

Rental bookings made by club members for practice time or private events. These require:

* Premium subscription activation
* Venue configured as bookable
* Appropriate pricing setup

### Reservations[​](#reservations "Direct link to Reservations")

Administrative blocks for maintenance, closures, meetings, and other club events. These can be:

* One-time reservations
* Recurring reservations for regular maintenance
* Closure reservations to block rental bookings

## Calendar Settings[​](#calendar-settings "Direct link to Calendar Settings")

![Calendar Settings](/img/docs/club-management/calendar/settings.png)

Configure your calendar's core functionality:

* **Time Intervals**: Choose from 15 minute to 2 hour increments (default: 1 hour)
* **Daily Schedule**: Set your operating hours start and end times for each day
* **Min advance booking (days)**: Minimum number of days in advance that bookings can be made. If set to "0" (same day), the system still requires at least a 1 hour advance booking time.
* **Max advance booking (days)**: Maximum number of days in advance that bookings can be made

## Creating Reservations[​](#creating-reservations "Direct link to Creating Reservations")

![New Reservation](/img/docs/club-management/calendar/new-reservation.png)

Administrators can create reservations to block time for maintenance, meetings, or special events:

1. **Select Time and Venue**: Choose the date, time, and venue for your reservation
2. **Reservation Type**: Select between closure (blocks rental bookings) or other event types
3. **Recurring Options**: Set up repeating reservations for regular maintenance schedules
4. **Details**: Add descriptions and notes for internal reference

## Key Features[​](#key-features "Direct link to Key Features")

* **Drag-and-Drop Scheduling**: Easily move and reschedule events (admin only)
* **Multi-Venue Support**: Manage ice sheets, lounges, and other club facilities
* **Conflict Detection**: Automatic prevention of double-bookings
* **Mobile Responsive**: Works seamlessly on desktop, tablet, and mobile devices
