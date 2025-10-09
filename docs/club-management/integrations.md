---
id: integrations
title: Integrations
slug: /club-management/integrations
---
import useBaseUrl from '@docusaurus/useBaseUrl';

**[This is a Premium Only Feature](/docs/getting-started/premium)**



Integrations connect Curling IO with the external services your club already relies on, keeping data synchronized and automating tasks that would otherwise require manual exports or imports.

- **Mailchimp** — Sync member contact details and registration tags to your marketing audience so mailing lists stay current.
- **QuickBooks Online** — Accounting export automation is coming soon; this section will be updated once the workflow is live.
- **External Calendar** — Mirror events from an iCal/WebCal feed (like Google Calendar) so your club calendar stays in step with league or facility schedules.

## Finding Integrations

Within your admin area, click on the **Club** dropdown menu in the top bar and then click on **Integrations**.

![Navigation](/img/docs/club-management/integrations/navigation.png)

## MailChimp

Connect your Curling IO member and registration data to a Mailchimp audience so lists stay up to date without manual exports.

### What gets synced
- Member profile fields map to Mailchimp merge fields when present: `ID`, `EMAIL`, `FNAME`, `LNAME`, `PHONE`, `GENDER`, `DOB`, `PCODE`, and mailing address components (`addr1`, `city`, `state`, `zip`, `country`).
- Completed registrations add Mailchimp tags for the product name and, when applicable, the event category (e.g., `Bonspiels`).

### Set up the connection
1. Navigate to **Admin → Integrations** and open the Mailchimp panel.
2. Enter a Mailchimp API key (create one via [Mailchimp’s API key guide](https://mailchimp.com/help/about-api-keys/)).
3. Provide the target Audience (List) ID (see [Mailchimp’s audience ID instructions](https://mailchimp.com/help/find-audience-id/)).
4. Save. Curling IO verifies the credentials and begins syncing changes automatically.

The integrations page shows the last successful sync time and any recent Mailchimp errors.

### Common errors
- **“Data did not match any of the schemas described in anyOf”** — A merge field in Mailchimp rejected the data. Make sure optional fields stay optional or match Curling IO formats (for example, phone numbers formatted like `+1 403-555-1234`).
- **“Invalid Resource”, “Member is in a compliance state”, “Permanently deleted”** — The contact cannot be updated via the API. Ask the member to resubscribe directly through Mailchimp.
- **API key or datacenter errors** — Confirm the API key is active and belongs to the same datacenter as the target audience.

## QuickBooks Online

The QuickBooks Online integration is coming soon. We will update this section as soon as the connection workflow is available.

## External Calendar

Import events from an external iCal/WebCal feed and display them alongside your Curling IO events.

### Configure the feed
1. In **Admin → Club Dropdown → Integrations**, open the External Calendar panel.
2. Provide the subscription URL for the iCal/WebCal feed you want to mirror.
3. (Optional) Add a notification email to receive sync error alerts.
4. Enable the integration to start nightly syncs. You can disable or re-run syncs manually from this screen.

### Find your Google Calendar public URL
1. Open [Google Calendar](https://calendar.google.com) in a browser and click the gear icon → **Settings**.
2. Under **Settings for my calendars**, pick the calendar you want to share.
3. (Optional) If you want a publicly shareable feed, check **Make available to public** in the **Access permissions for events** section.
4. In **Integrate calendar**, copy the **Public address in iCal format**.
5. If you prefer to keep the feed private, use the **Secret address in iCal format** instead and keep it confidential.

### Sync behavior
- Curling IO fetches the feed nightly using conditional requests (ETag/Last-Modified) to reduce traffic, and shows the last sync status and any failure messages in the integration panel.
- Recurring events are expanded, cancellations are respected, and stale occurrences fall out automatically when they disappear from the feed.
- Only events within the active sync window are stored; older items are purged after about three months to keep the view concise.
- Sync failures trigger retries and, when you provide a notification email, send an alert so issues can be resolved quickly.

If the feed includes malformed entries (missing `UID`, `DTSTART`, etc.), they are skipped but reported in the integration status so you can follow up with the feed provider.
