---
id: settings
title: Club Settings
slug: /club-management/settings
---
import useBaseUrl from '@docusaurus/useBaseUrl';

You can modify all of the core operational settings for your club in this screen.

Within your admin area, click on the **Club** dropdown menu in the top bar and then click on **Settings**.

![Settings Navigation](/img/docs/club-management/settings/navigation.png)

This page consolidates all club configuration including general settings, payments & accounting, navigation & branding (website hosting), and contact information. Mailchimp configuration has moved—see the [Integrations guide](/docs/club-management/integrations) for the new workflow.

The sections below cover the main areas of the Club → Settings page.


## General

This section includes your club's basic information and identity settings.

### Club Name and Languages

- **Name** — Controls the header text and the default club name shown publicly.
- **English supported** and **French supported** — Enable these checkboxes to determine which language toggles appear to your curlers and which content fields you can complete in the admin screens. When both are enabled, curlers can switch languages on the fly.

### Branding

- **Logo** and **Nav logo** — Upload full-size and compact versions for the header and navigation bar.

### Season Start

You can select the month that you'd like your season to begin. It's always going to be the 1st of this month (at 12:00 AM). This date should occur **before you start taking registrations** for the current season. This cutoff affects the following:

1. Your seasonal fees and seasonal products. This determines which season they are collected for during registration.
2. Your leagues based on their start dates.
3. Your age restrictions. For example a maximum age restriction of 17, means they cannot be older than 17 when this month begins.
4. Seasonal filters where you can select a season (like at the top of your public leagues screen).

**Be careful changing this since the effects are so wide reaching and we cannot retroactively fix your orders.** You should rarely, if ever, need to change this month more than once.


### Sheet Configuration

The remaining ice-sheet fields let you control how sheets appear when creating draws or scheduling events:

- **Sheets** — Total number of sheets at your club.
- **Sheet prefix** — Text prefixed to each sheet number (e.g., "Sheet" results in "Sheet 1").
- **Sheet ordering** — Choose ascending or descending naming.
- **Show sheets** — Toggle whether sheet assignments display publicly.

### Widget URL

The Widget URL gives you an embeddable link you can drop into an external website. It points to your Curling IO-hosted registration widget so members can register without navigating away from your main site.


## Payments & Accounting

This section controls payment methods, fees, and accounting integration.

### Payment Options

These settings determine how curlers can complete checkout for club products.

- **Can be paid online** — Allow credit card payments. (Ignored until your club is connected to our payment processor.)
- **Can be paid offline** — Allow offline methods (cash, cheque, etc.).
- **Accept partial payments** — Let curlers submit a deposit rather than the full balance.

### Convenience fee / Surcharge

A convenience fee or surcharge can be added to your orders automatically.
You can specify its label (shown to your members), how it will be applied (online, offline, etc.), a percentage amount, and a fixed amount (percent and fixed are combined).

When a convenience fee is added to a member's cart specific to one payment method (online or offline), Curling IO will display a notice at the top of the cart alerting the member to its addition as well as showing the fee in the cart and total.

This convenience fee is never taxed or discounted, and is always automatically calculated based on your percentage (of the order total) and fixed amount.

**Curling IO is not responsible for fees or surcharges that you incorrectly choose to implement. Make sure your use is compliant with potential laws in your region.**

**You may not apply a convenience fee for online payments that exceeds a total of $3.30 on a $100 payment if you are also accepting offline payments. Anything higher than this potentially ends up being too punishing and lowering online payment volume significantly enough that it costs Curling IO to provide an online payment option to your club. If you absolutely MUST have a higher convenience fee, then we'll need to arrange for you to cover the $5.00 month fee we have to pay to enable your online payments. We will be enforcing this rule for the 2026/2027 season.**

It is your responsibility, before adding a convenience fee / surcharge, to make sure you understand the implications and whether or not this is legal in your jurisdiction. For example:
- There's a limit to the amount you can surcharge to cover credit card processing fees.
- In the province of Quebec you are currently not allowed to pass along credit card processing fees to the consumer.
- There's a difference between a convenience fee and a surcharge, so make sure you use a label that reflects what you are charging.
- You may be required to offer a non-surcharge option if you choose to implement one for online payments.

Please review the relevant laws in your region regarding surcharges and convenience fees. Here are some Canada specific links:
- https://www.canada.ca/en/financial-consumer-agency/services/merchants/credit-fees-merchant.html
- https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/gi-200/application-gst-hst-credit-card-surcharges.html

Note: Fees you implement should never reflect on the Curling IO platform, therefore we are restricting certain words in the convenience fee's label and may add further restrictions in the future if necessary.


### Accounting

Accounting features allow you to categorize revenue items and track financial transactions for integration with accounting software like QuickBooks, Xero, or Sage.

Check the checkbox to enable accounting for your club. Once enabled, you can set default account codes for each type of registration (Leagues, Bonspiels, Programs, Products, Fees, Venues).

![Accounting Codes](/img/docs/accounting/accounting-codes/accounting-codes-defaults.png)

Most clubs either don't need accounting codes at all, or simply set up these 6 default codes and never touch individual items. Advanced users can add more detailed tracking codes (Class and Project codes) at the item level for tracking by demographics, departments, or grant funding.

**For complete details on how to use accounting codes, see the [Accounting Codes Guide](/docs/accounting/accounting-codes). For more information on double-entry bookkeeping and accrual accounting, see the [Accounting Transactions Guide](/docs/accounting/accounting-transactions).**


## Navigation and Branding

This section controls the visual appearance and navigation structure of your public website.

### Brand Palette

- **Brand palette** — Pick a palette preset and fine-tune individual colours (Primary, Secondary, Success, Info, Warning, Danger, Light, Dark) by entering hex codes.

### Navigation and Layout

- **Calendar enabled?** — Toggle the public calendar tab. When enabled, visitors can browse draws, rentals (Premium), and closures.
- **Calendar default view** — Select the view you want to load first (Month, Week, or Day). Clubs with rentals often prefer the day view.
- **Landing page** — Choose where visitors land first (Landing Page, Leagues, Bonspiels, Programs, Products, Calendar, etc.).
- **Program label** and **Competition label** — Rename these tabs to match local terminology.
- **Banner** and **Banner visibility** — Upload a 1200 × 250 banner image and choose which screens display it.
- **Sidebar options** — Decide which touts appear on hosted pages (Current games, Random sponsor, Latest news).
- **Section summaries** — Provide English and French blurbs for Leagues, Bonspiels, Programs, Products, and the Calendar. These appear below public section headers and on Landing Page cards.

### Tags

Tags are used to make it easier for your curlers to search a large number of leagues and competitions.
We don't recommend using tags unless you have multiple pages worth of leagues or competitions that curlers must search through.


## Contact Information

This section manages all contact details and links shown on your public website.

- **Address block** — Street, unit, mailing address, city, province/state, country, postal/ZIP code, and time zone (used for draw schedules and emails).
- **Primary contact** — Phone number and email shown on the contact page.
- **Site & policy links** — Website URL, Terms URL, Privacy URL.
- **Social & media handles** — Facebook, X (Twitter), Instagram, TikTok, YouTube.
- **Community invites** — Optional invitation links for WhatsApp, Slack, and Discord; shared with members on receipts and the contact page.
- **Club contacts** — Add individual contacts (name, email, phone) to spotlight specific volunteers or board members.
