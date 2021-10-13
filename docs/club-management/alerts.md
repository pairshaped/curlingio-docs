---
id: alerts
title: Alerts
slug: /club-management/alerts
---
import useBaseUrl from '@docusaurus/useBaseUrl';

Alerts allow you, the curling club manager, to display specific messages to your members on specific screens, and until a specific date like so:

![Alert Displayed](/img/docs/club-management/alerts/offline-payment-alert-display.png)


## Finding your Alerts

Within your admin area, click on the **Club** dropdown menu in the top bar and then click on **Alerts**.

![Navigation](/img/docs/club-management/alerts/navigation.png)

To create an alert click on the **New Alert** button.

![New](/img/docs/club-management/alerts/new.png)

To update an existing alert, click the **Edit** link next to it.

![Edit](/img/docs/club-management/shared/edit.png)


## The Basics


### Display until

Controls how long you want to run the alert for.


### Body text

This is the content of the alert that your user's will see along the top of the screen.

### Locations to show the alert

This controls when the alert will be displayed based on the URL of the web page.
You first need to find out what the URL of the page is that you want to display the alert on.

1. Go to your public side of your Curling I/O website.
2. Navigate to the screen you want to display the alert on.
3. Examine the URL in your browser's address bar.
4. Enter a pattern that matches the URL in your address bar.


## Examples

### All screens

To create an alert that appears on ALL screens:

* Matching method: **Starts with**
* Pattern: **/**


### Just the producst listing screen

To create an alert that appears only on the products listing screen:

* Matching method: **Exact match**
* Pattern: **/products**


### Specific league details screen

To create an alert that appears only on a specific leagues detail screen:

* Matching method: **Exact match**
* Pattern: **/events/3742-monday-night-mens**


### The Cart screen

To create an alert that appears only on the user's cart screen:

* Matching method: **Exact match**
* Pattern: **/cart**


### Offline Payment Submitted

To create an alert that only appears when members make an offline purchase (submitted payment to be paid outside of Curling I/O) you'll want the following location:

* Matching method: **Contains**
* Pattern: **/payments/offline**

![Alert Setup](/img/docs/club-management/alerts/offline-payment-alert-setup.png)
