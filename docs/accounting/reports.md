---
id: reports
title: Reports
slug: /accounting/reports
---
import useBaseUrl from '@docusaurus/useBaseUrl';

Curling IO produces reports that give you, the curling club manager or bookkeeper, insight into the financials and membership at your club.

You can find the Reports section by clicking **Reports** in the top navigation bar.

![Reports Navigation](/img/docs/club-management/reports/navigation.png)

All of the reports can be filtered by date range and sometimes other varying options, like payment status or method.


## Downloading Raw Data

All of the reports can be downloaded as CSV files.
CSV stands for "Comma Separated Values" and it's a standard format supported by Excel, Google Sheets, MS Access, and all other spreadsheet, database, and accounting software programs.

The downloaded data will always include more fields than what is shown on the screen, and we highly recommend using it for your own accounting purposes.
Just click the **Download** button at the bottom of the screen on any of your reports.
If you are running any filters, like a date range, then the downloaded data will reflect those filters.


## List of Reports

### Fees

These are the fees that have been ordered, including any affiliates your club inherits.
To view the raw data click on **Fees**.
To see a chart comparing the revenue per fee, click the **Revenue** link in the description.
To see a chart comparing the volume of orders per fee, click the **Orders** link in the description.

Custom fields are not included in this report's download unless you have [explcitly included them.](/docs/club-management/custom-fields#select-relevant-reports)

### Leagues

These are the leagues that have been ordered.
To view the raw data click on **Leagues**.
To see a chart comparing the revenue per league, click the **Revenue** link in the description.
To see a chart comparing the volume of orders per league, click the **Orders** link in the description.

Custom fields are not included in this report's download unless you have [explcitly included them.](/docs/club-management/custom-fields#select-relevant-reports)

### Competitions

These are the competitions that have been ordered.
To view the raw data click on **Competitions**.
To see a chart comparing the revenue per competition, click the **Revenue** link in the description.
To see a chart comparing the volume of orders per competition, click on the **Orders** link in the description.

Custom fields are not included in this report's download unless you have [explcitly included them.](/docs/club-management/custom-fields#select-relevant-reports)

### Products

These are the products that have been ordered.
To view the raw data click on **Products**.
To see a chart comparing the revenue per products, click the **Revenue** link in the description.
To see a chart comparing the volume of orders per products, click the **Orders** link in the description.

Custom fields are not included in this report's download unless you have [explcitly included them.](/docs/club-management/custom-fields#select-relevant-reports)

### Payments

These are the payments that have been made.
To view the raw data click on **Payments**.
To see a chart showing payments by date, click the **Payments by date** link in the description.


### Refunds

These are the refunds that have been made.
To view the raw data click on **Refunds**.
To see a chart showing refunds by date, click the **Refunds by date** link in the description.


### Discounts

These are the discounts that have been received by your curlers.

Custom fields are not included in this report's download unless you have [explcitly included them.](/docs/club-management/custom-fields#select-relevant-reports)


### Club Credit Logs

History of all club credits that have been granted and used.


### Waivers

These are the waivers that have been accepted by your curlers.


### Members

This report tracks member information for curlers who have registered for items requiring a curler profile during the current season.

**How members are created**: Member records are automatically created from curler profiles when:
1. A curler completes registration for an event, league, program, product, or fee that requires a curler profile (orders that are submitted or paid)
2. A scheduled background process runs (typically nightly) that syncs curler data into member records
3. Once created, member records persist even if the order is later cancelled, refunded, or deleted

**Filtering options**:
- **Season**: Select which season's members to view
- **Keyword search**: Search by name, email, postal code, city, province, or club name

**Download**: Click the **Download** button to export member data as a CSV file with all fields included.

**Note**: Members are deduplicated automatically - if a curler registers for multiple items in the same season, only one member record is created for that club and season combination. However, the member count may be slightly inflated due to:
- **Duplicate profiles**: If curlers create duplicate profiles and register with both, duplicate member records will appear in the report. These duplicates should be apparent when reviewing the report data (identical or very similar names, dates of birth, etc.).
- **Cancelled/refunded orders**: Members remain in the report even if their orders are later cancelled or refunded, as long as the order items existed when the nightly background process ran.


### Spares

These are the curlers that have opted to spare for one of more events.


### Order Items

This is an unfiltered list of all order items (leagues, products, competitions, and fees).

Custom fields are not included in this report's download unless you have [explcitly included them.](/docs/club-management/custom-fields#select-relevant-reports)


### Payouts

This is a list of all bank payouts (direct deposits) you've received from our payment processor.
To see a chart showing payouts by date, click the **Payouts by date** link in the description.

This report only shows up once you're set up with our online payment processor, and is necessary for bookkeeping, as it links your orders to your deposits.


### Disputes

List of payment disputes that can be filtered by date range.

This report only shows up once you're set up with our online payment processor.
