# Integrations

**[This is a Premium Only Feature](/docs/getting-started/premium.md)**

Integrations connect Curling IO with the external services your club already relies on, keeping data synchronized and automating tasks that would otherwise require manual exports or imports.

* **Mailchimp** — Sync member contact details and registration tags to your marketing audience so mailing lists stay current.
* **QuickBooks Online** — Push online payment payout data into QuickBooks and track sync health directly from the integration dashboard.
* **External Calendar** — Mirror events from an iCal/WebCal feed (like Google Calendar) so your club calendar stays in step with your other schedules.

## Finding Integrations[​](#finding-integrations "Direct link to Finding Integrations")

Within your admin area, click on the **Club** dropdown menu in the top bar and then click on **Integrations**.

![Navigation](/assets/images/navigation-8e705c0230cfe50bc5f18c0ce79c22b5.png)

## Mailchimp[​](#mailchimp "Direct link to Mailchimp")

Connect your Curling IO member and registration data to a Mailchimp audience so lists stay up to date without manual exports.

![Mailchimp Integration](/assets/images/mailchimp-integration-072c010b7b473493097f0677f0cdbd5b.png)

### What gets synced[​](#what-gets-synced "Direct link to What gets synced")

* Member profile fields map to Mailchimp merge fields when present: `ID`, `EMAIL`, `FNAME`, `LNAME`, `PHONE`, `GENDER`, `DOB`, `PCODE`, and mailing address components (`addr1`, `city`, `state`, `zip`, `country`).
* Completed registrations add Mailchimp tags for the item name and, when applicable, the event category (e.g., `Bonspiels`).

### Set up the connection[​](#set-up-the-connection "Direct link to Set up the connection")

1. Navigate to **Admin → Integrations** and open the Mailchimp panel.
2. Enter a Mailchimp API key (create one via [Mailchimp’s API key guide](https://mailchimp.com/help/about-api-keys/)).
3. Provide the target Audience (List) ID (see [Mailchimp’s audience ID instructions](https://mailchimp.com/help/find-audience-id/)).
4. Save. Curling IO verifies the credentials and begins syncing changes automatically.

The integrations page shows the last successful sync time and any recent Mailchimp errors.

### Common errors[​](#common-errors "Direct link to Common errors")

* **“Data did not match any of the schemas described in anyOf”** — A merge field in Mailchimp rejected the data. Make sure optional fields stay optional or match Curling IO formats (for example, phone numbers formatted like `+1 403-555-1234`).
* **“Invalid Resource”, “Member is in a compliance state”, “Permanently deleted”** — The contact cannot be updated via the API. Ask the member to resubscribe directly through Mailchimp.
* **API key or datacenter errors** — Confirm the API key is active and belongs to the same datacenter as the target audience.

## QuickBooks Online[​](#quickbooks-online "Direct link to QuickBooks Online")

Connect Curling IO with QuickBooks Online so online payment payouts land inside your accounting ledger without manual exports. OAuth credentials stay in the integration record, letting you manage access entirely from the admin panel.

![QuickBooks Online Integration](/assets/images/quickbooks-online-integration-f511021a431995d8d8635d3c293386b5.png)

### Connection actions[​](#connection-actions "Direct link to Connection actions")

* **Connect QuickBooks** — Launches the Intuit OAuth flow; sign in with a QuickBooks admin for the company that should receive your online payment data.
* **Reconnect** — Runs the OAuth handshake again when tokens are expiring or you need to switch companies. Use this as soon as you see token warnings or authorization-related sync failures.
* **Disconnect** — Severs the link, clears stored tokens, disables automatic sync jobs, and marks the integration inactive.

### Status card fields[​](#status-card-fields "Direct link to Status card fields")

* **Status** — `Connected` after a successful sync, `Not connected` when tokens are missing or invalid, `Pending` immediately after setup, `Failed` when the most recent sync hit an error, and `Disabled` after a manual disconnect.
* **Last synced** — Timestamp of the latest successful import (`Never` until the first run finishes).
* **Consecutive failures** — Count of consecutive sync errors; resets to `0` once a job succeeds.
* **Company ID** — Displays the QuickBooks realm/company currently authorized, or `Pending` until one is saved.
* **Credentials updated** — When OAuth tokens were last refreshed.
* **Refresh token expires** — Expiration date for the long-lived refresh token. The status card warns inside seven days of expiry and flips to `Failed` once the date passes.
* **Access token expires** — Short-lived token expiry for reference.
* **Recent errors** — Chronological list of failed sync attempts with timestamps and the message returned from Curling IO or Intuit.

### Configuration form fields[​](#configuration-form-fields "Direct link to Configuration form fields")

* **Deposit bank (`default_bank_account_id`)** — QuickBooks bank account that should receive online payment deposits.
* **Online payments clearing (`card_clearing_id`)** — Clearing or undeposited funds account that the accountant reconciles against.
* **Processing fee expense (`processing_fee_expense_id`)** — Expense account that captures online payment processing fees.
* **Notification email** — Optional address for sync failure alerts; defaults to the club email when left blank.
* **Active** — Master toggle for the integration; turn it off to pause sync jobs (status becomes `Disabled`).

### Workflow tips[​](#workflow-tips "Direct link to Workflow tips")

1. Fill in all mapping fields before clicking **Connect** so the first sync can post without corrections.
2. Keep an eye on the refresh-token expiry and run **Reconnect** before the date arrives to avoid authorization failures.
3. After any failure, review **Recent errors**—most issues stem from missing mappings, expired tokens, or unexpected QuickBooks API responses.
4. If you disconnect, the account mappings remain in place, but no new data flows until you connect again.

## External Calendar[​](#external-calendar "Direct link to External Calendar")

Import events from an external iCal/WebCal feed and display them alongside your Curling IO events.

![External Calendar Integration](/assets/images/external-calendar-integration-4f5dc59b37fe5bef5e758e038cf3edb8.png)

### Configure the feed[​](#configure-the-feed "Direct link to Configure the feed")

1. In **Admin → Club Dropdown → Integrations**, open the External Calendar panel.
2. Provide the subscription URL for the iCal/WebCal feed you want to mirror.
3. (Optional) Add a notification email to receive sync error alerts.
4. Enable the integration to start nightly syncs. You can disable or re-run syncs manually from this screen.

### Find your Google Calendar public URL[​](#find-your-google-calendar-public-url "Direct link to Find your Google Calendar public URL")

1. Open [Google Calendar](https://calendar.google.com) in a browser and click the gear icon → **Settings**.
2. Under **Settings for my calendars**, pick the calendar you want to share.
3. (Optional) If you want a publicly shareable feed, check **Make available to public** in the **Access permissions for events** section.
4. In **Integrate calendar**, copy the **Public address in iCal format**.
5. If you prefer to keep the feed private, use the **Secret address in iCal format** instead and keep it confidential.

### Sync behavior[​](#sync-behavior "Direct link to Sync behavior")

* Curling IO fetches the feed nightly using conditional requests (ETag/Last-Modified) to reduce traffic, and shows the last sync status and any failure messages in the integration panel.
* Recurring events are expanded, cancellations are respected, and stale occurrences fall out automatically when they disappear from the feed.
* Only events within the active sync window are stored; older items are purged after about three months to keep the view concise.
* Sync failures trigger retries and, when you provide a notification email, send an alert so issues can be resolved quickly.

If the feed includes malformed entries (missing `UID`, `DTSTART`, etc.), they are skipped but reported in the integration status so you can follow up with the feed provider.
