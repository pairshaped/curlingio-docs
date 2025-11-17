---
id: accounting-transactions
title: Accounting Transactions
slug: /accounting/accounting-transactions
---

## Overview

The accounting transactions system provides comprehensive double-entry bookkeeping with accrual accounting principles. Instead of just tagging revenue items with codes, the system automatically generates detailed journal entries (debits and credits) for every financial event in your club.

**What you get:**
- Full double-entry bookkeeping (every transaction has balanced debits and credits)
- Accrual accounting (revenue recognized when order placed, not when paid)
- Automatic journal entries for orders, payments, refunds, and deposits
- Journal entry grouping (related transactions grouped together for easy import)
- Balance sheet tracking (Accounts Receivable, HST Payable, Club Credit Liability, etc.)
- Processing fee expense tracking for payment processor fees (Stripe, SportsPay)
- Club credit accounting (payments, refunds, and manual grants)
- Human-readable account labels (Revenue, A/R, HST, etc.) for easy filtering
- Dedicated Accounting Transactions report with visual grouping
- CSV export optimized for QuickBooks, Xero, and Sage integration
- Sequential payment allocation with partial refund tracking

**Important:** Accounting transactions are only recorded while you have an active Premium subscription. Historical data is not available if you upgrade later - transactions are only tracked from the date accounting codes are enabled forward.

## Prerequisites

:::info Premium Feature
The accounting transactions system is only available to Premium clubs. All clubs can use basic [Accounting Codes](/docs/accounting/accounting-codes), but the full double-entry bookkeeping system with accrual accounting requires a Premium subscription or online payments setup and enabled (which automatically grants Premium).
:::

Before enabling accounting transactions, you should first understand [Accounting Codes](/docs/accounting/accounting-codes). The accounting transactions system builds on accounting codes by adding full journal entries and balance sheet tracking.

## Accrual Accounting Principles

Traditional cash-basis accounting records revenue when you receive payment. Accrual accounting recognizes revenue when it's earned (when the order is placed), giving you a more accurate picture of your club's financial position.

**Example:**
- Member registers for a $100 league on January 15
- Member pays $50 on January 20
- Member pays remaining $50 on February 10

**Cash-basis accounting** would show:
- January: $50 revenue
- February: $50 revenue

**Accrual accounting** (what Curling IO uses) shows:
- January 15: $100 revenue recognized, $100 Accounts Receivable created
- January 20: $50 cash received, $50 Accounts Receivable reduced
- February 10: $50 cash received, $50 Accounts Receivable reduced

This approach shows you earned $100 in revenue in January, even though you haven't collected it all yet.

## Double-Entry Bookkeeping

Every transaction creates balanced journal entries where debits equal credits. This is the foundation of professional accounting and ensures your books always balance.

**Example:** Member purchases a $113 league registration (includes $13 HST)

```
Journal Entry:
DR  Accounts Receivable        $113.00
CR  Revenue (Account 4010)     $100.00
CR  HST Payable                $13.00
```

When they pay:

```
Journal Entry:
DR  Undeposited Funds          $113.00
CR  Accounts Receivable        $113.00
```

## Balance Sheet Account Codes

In addition to revenue account codes (4000 series), the system uses balance sheet accounts to track assets, liabilities, and expenses:

### Assets
- **Accounts Receivable (1200)** - Money owed to the club from unpaid or partially-paid orders
- **Undeposited Funds** - Payments received but not yet deposited to bank
- **Cash Account** - Your actual bank account balance

### Liabilities
- **HST Payable (2110)** - Sales tax collected that must be remitted to government
- **Club Credit Liability** - Customer deposits/prepayments owed to members as club credits (similar to gift card liability)

### Expenses
- **Processing Fee Expense** - Payment processor fees (Stripe, SportsPay) deducted from deposits
- **Club Credit Expense** - Cost of granting club credits to members (courtesy credits, promotions)

These accounts are configured in **Club → Settings** and cannot be overridden at the item level.

## Tax Handling

The accounting transactions system automatically tracks all sales taxes (HST, GST, PST) as liabilities that need to be remitted to the government.

### How Tax is Recorded

When an order is placed, taxes are recorded in the **HST Payable** liability account:

```
DR  Accounts Receivable    $113.00
CR  Revenue                $100.00
CR  HST Payable (2110)     $13.00
```

This creates a liability - the club owes $13.00 to the government. When you remit taxes quarterly or annually, your accountant will use this HST Payable balance.

### Multiple Tax Rates

If your club charges multiple tax rates (e.g., GST + PST, or different HST rates for different provinces), all taxes flow into the single HST Payable account. The system tracks the breakdown:

**Example:** $100 item with 5% GST and 7% PST

```
DR  Accounts Receivable    $112.00
CR  Revenue                $100.00
CR  HST Payable            $12.00
```

Your Order Items report shows the tax breakdown per item (tax1_amount, tax2_amount), but the accounting transactions combine them into one liability account for simplicity.

### Tax on Refunds

When you refund an item, the tax liability is reduced:

```
DR  Revenue                $100.00
DR  HST Payable            $13.00
CR  Accounts Receivable    $113.00
```

This reduces your HST Payable balance, since you're no longer collecting that tax from the member.

### Tax-Exempt Items

Items with no tax (tax-exempt products, services, etc.) simply don't create HST Payable entries:

```
DR  Accounts Receivable    $100.00
CR  Revenue                $100.00
```

The system automatically handles this based on your tax settings for each item.

### Reconciling Tax Payable

Your HST Payable account balance represents the total tax you've collected and owe to the government. To reconcile:

1. Export the Accounting Transactions report
2. Filter by Account Code: 2110 (HST Payable)
3. Sum all credits (tax collected) minus all debits (tax refunded)
4. This balance should match your tax filing

**Example balance calculation:**
- Credits (tax collected): $15,600
- Debits (tax refunded): -$780
- **Net HST Payable: $14,820**

This is the amount you owe for the reporting period.

## Transaction Types

The system creates different types of accounting transactions for different financial events. The following sections detail each transaction type and its journal entries:

1. **Revenue Recognition** - When orders are submitted
2. **Cash Receipts** - When payments are received
3. **Refunds** - When refunds are processed
4. **Order/Item Deletion** - When orders or items are deleted
5. **Deposit Processing** - When payments are deposited to bank
6. **Offline Payments** - When cash/check/e-transfer payments are recorded
7. **Club Credit Payments** - When members pay with club credit
8. **Club Credit Refunds** - When refunds are issued as club credit
9. **Manual Club Credit Grants** - When managers grant courtesy credits

### 1. Revenue Recognition (Order Submitted)

When a member submits an order, revenue is recognized immediately:

```
DR  Accounts Receivable     (Total order amount)
CR  Revenue (by item)       (Item subtotals using your account codes)
CR  HST Payable             (Tax amounts)
```

**Example:** Order with $100 league + $13 HST

| Date | Type | Account | Debit | Credit |
|------|------|---------|-------|--------|
| 2025-01-15 | Revenue recognized | 1200 (A/R) | $113.00 | |
| 2025-01-15 | Revenue recognized | 4010 (League Revenue) | | $100.00 |
| 2025-01-15 | HST charged | 2110 (HST Payable) | | $13.00 |

### 2. Cash Receipts (Payment Succeeded)

When a payment is received, cash is recorded and Accounts Receivable is reduced:

```
DR  Undeposited Funds       (Payment amount)
CR  Accounts Receivable     (Payment amount)
```

Payments are allocated to order items sequentially (smallest items paid first). This allocation method enables refunding of fully-paid items even when an order is only partially paid, providing flexibility for partial refunds and cancellations.

**Example:** $113 payment received

| Date | Type | Account | Debit | Credit |
|------|------|---------|-------|--------|
| 2025-01-20 | Payment initiated | Undeposited Funds | $113.00 | |
| 2025-01-20 | Payment initiated | 1200 (A/R) | | $113.00 |

### 3. Refunds (Full and Partial)

**Important:** The system handles refunds intelligently based on whether each item is being fully or partially refunded. A single refund operation can include multiple items, some fully refunded (cancellations) and others partially refunded (price adjustments).

**3a. Full Refund (Cancellation)**

When an item is refunded for its full remaining amount (bringing net amount paid to $0), this is treated as a **cancellation**. The item status changes to `'cancelled'`.

**Journal Entries:**

```
DR  Revenue ([account_code])  (Remaining revenue after previous reductions)
DR  HST Payable               (Remaining tax after previous reductions)
CR  Undeposited Funds         (Cash returned to member)
CR  Accounts Receivable       (Any remaining unpaid balance cleared)
```

**Note on credits:** If the item was fully paid, only Undeposited Funds is credited (cash refund). If the item had an unpaid balance, that balance is credited to A/R to clear the receivable, with the remainder going to Undeposited Funds.

**Key Point:** If there were previous partial refunds on this item, the system only reverses the *remaining* revenue and tax, not the original full amount. This prevents double-reversing revenue that was already reduced in earlier partial refunds.

**3b. Partial Refund (Price Adjustment)**

When an item is refunded for less than its full remaining amount (leaving some net payment remaining), this is treated as a **price adjustment**. The item's price is reduced, but it remains in paid/partially-paid status.

**Journal Entries:**

```
DR  Revenue ([account_code])  (Proportional base amount)
DR  HST Payable               (Proportional tax amount)
CR  Undeposited Funds/A/R     (Refund amount based on payment status)
```

The revenue reduction is proportional to the refund amount relative to the item's total. The item's `amount` field is reduced by the proportional base amount, effectively lowering the price.

**Mixed Refunds:**

When processing a refund with multiple items, each item is handled according to its refund amount:
- Items refunded for their full remaining balance are cancelled
- Items refunded for less than their remaining balance have their price adjusted
- All items are processed in the same refund transaction

### 4. Order/Item Deletion

When a club deletes an order or order item, the system automatically creates reversal transactions to maintain balanced books.

**For submitted but unpaid orders:**

If you delete an order that was submitted but never paid, the system reverses the revenue recognition entries:

```
DR  Revenue (by item)       (Item amounts)
DR  HST Payable             (Tax amounts)
CR  Accounts Receivable     (Total order)
```

This removes the revenue and Accounts Receivable that were created when the order was submitted.

**For paid orders:**

Deleting paid orders or individual items requires processing refunds first. The system prevents deletion of paid items to maintain accurate financial records.

**Why this matters:** This ensures your Accounts Receivable balance stays accurate. If a member cancels before paying, deleting the order removes the receivable without requiring a formal refund process.

### 5. Deposit Processing

When online payments (Stripe, SportsPay) are received, they initially go to **Undeposited Funds**. When your payment processor deposits funds to your bank account, you can record the deposit:

**Automatic (Stripe/SportsPay):**

For clubs using Stripe or SportsPay, deposits are automatically recorded when payouts are processed. Payment processors typically deduct processing fees before depositing funds:

**With processing fees:**
```
DR  Cash Account            (Net amount after fees)
DR  Processing Fee Expense  (Processing fees + application fees)
CR  Undeposited Funds       (Gross payment amount)
```

**Example:** $113 payment with $3.58 processing fee + $1.50 application fee

| Date | Type | Account | Debit | Credit |
|------|------|---------|-------|--------|
| 2025-01-25 | Payment deposited | Cash | $107.92 | |
| 2025-01-25 | Processing fee expense | Fee Expense | $5.08 | |
| 2025-01-25 | Payment deposited | Undeposited | | $113.00 |

**Without processing fees:**
```
DR  Cash Account       (Gross payment amount)
CR  Undeposited Funds  (Gross payment amount)
```

The system tracks which payments are included in each payout, maintaining a clear audit trail from payment → undeposited funds → cash account.

**Manual Recording:**

Some clubs manage deposits manually to perform bank reconciliation, matching deposits in the system to their bank statements. This ensures proper cash controls and accurate financial reporting.

### 6. Offline Payments

When a club records an offline payment (cash, check, e-transfer recorded manually), the accounting treatment is the same as online payments:

```
DR  Undeposited Funds    (Payment amount)
CR  Accounts Receivable  (Payment amount)
```

However, offline payments go directly to your **Cash Account** if you mark them as "Already Deposited" when recording them:

```
DR  Cash Account         (Payment amount)
CR  Accounts Receivable  (Payment amount)
```

This provides flexibility for clubs that receive cash/checks and deposit them immediately, versus clubs that batch deposits weekly or monthly.

### 7. Club Credit Payments

When a member uses club credit (store credit) to pay for an order, the accounting treatment differs from cash payments because it involves a liability reduction instead of cash:

```
DR  Club Credit Liability  (Payment amount)
CR  Accounts Receivable    (Payment amount)
```

**Example:** $50 club credit applied to order

| Date | Type | Account | Debit | Credit |
|------|------|---------|-------|--------|
| 2025-01-15 | Club credit applied | Club Credit Liability | $50.00 | |
| 2025-01-15 | Club credit applied | A/R | | $50.00 |

**Key differences from cash payments:**

- **Reduces liability** - Applying credit reduces what the club owes to the member
- **No deposit** - Club credit payments never have a deposit date since no actual cash is involved
- **Sequential allocation** - Like cash payments, club credit allocates to order items sequentially (smallest first)

### 8. Club Credit Refunds

When a refund is issued as club credit instead of cash, the accounting treatment creates or increases a liability to the member. Like cash refunds, the system distinguishes between full refunds (cancellations) and partial refunds (price adjustments).

**Journal Entries:**

```
DR  Revenue ([account_code])  (Refunded amount - proportional for partial refunds)
DR  HST Payable               (Refunded tax - proportional for partial refunds)
CR  Club Credit Liability     (Total refund)
```

Note that unlike cash refunds, there is **no cash withdrawal entry** because the club retains the funds. The refund increases the club's liability to the member (club credit balance).

**Example:** Refund $22.60 to club credit ($20 + $2.60 HST)

| Date | Type | Account | Debit | Credit |
|------|------|---------|-------|--------|
| 2025-02-01 | Refund initiated | Revenue (4030) | $20.00 | |
| 2025-02-01 | Refund initiated | HST Payable (2110) | $2.60 | |
| 2025-02-01 | Refund initiated | Club Credit Liability | | $22.60 |

**Key differences from cash refunds:**

- **Increases liability** - Refunding to credit increases what club owes to member
- **No withdrawal** - Club credit refunds don't reduce your bank balance
- **Member retains value** - Credit can be used on future purchases

### 9. Manual Club Credit Grants

When a club manager manually grants club credit to a member (courtesy credit, compensation, promotions), the system records both an expense and a liability:

```
DR  Club Credit Expense    (Grant amount)
CR  Club Credit Liability  (Grant amount)
```

**Example:** Manager grants $25 courtesy credit to member

| Date | Type | Account | Debit | Credit |
|------|------|---------|-------|--------|
| 2025-02-15 | Club credit granted | Club Credit Expense | $25.00 | |
| 2025-02-15 | Club credit granted | Club Credit Liability | | $25.00 |

**Key points:**

- **Expense recognition** - Records the cost of giving away credit
- **Liability tracking** - Increases club's debt to members
- **Separate from refunds** - Manual grants are recorded separately from refund-generated credits

## The Accounting Transactions Report

Premium clubs have access to a dedicated **Accounting Transactions** report under **Reports → Accounting Transactions**.

<!-- TODO: Add screenshot of Accounting Transactions report -->
<!-- ![Accounting Transactions Report](/img/docs/accounting/accounting-transactions-report.png) -->

### Understanding Journal Entry Grouping

The report visually groups related transactions together that represent a single financial event (like submitting an order or receiving a payment). Each group includes all the debits and credits that balance to $0 for that event.

**Visual grouping:** The Order ID, Transaction Type, and Date appear only on the first row of each group, making it easy to see which transactions belong together. Subsequent transactions in the same group have these columns blank, creating a clear visual hierarchy.

**Example:** When a member submits an order for $113 (including HST), the report shows:

| Order ID | Type | Date | Item | Account | Label | Debit | Credit |
|----------|------|------|------|---------|-------|-------|--------|
| 12345 | Revenue recognized | 2025-01-15 | League | 1200 | A/R | $113.00 | |
| | | | League | 4010 | Revenue | | $100.00 |
| | | | League | 2110 | HST | | $13.00 |

This grouping makes it clear that all three accounting entries are part of the same journal entry and should balance together (debits = credits).

The report shows:

- **Order ID** - Reference to the order (clickable to filter) - shown once per group
- **Type** - Revenue recognized, Payment initiated, Refund processed, etc. - shown once per group
- **Date** - Transaction date - shown once per group
- **Item Type** - Type of item (League, Product, Fee, etc.)
- **Description** - Item description
- **Class Code** - Sub-categorization
- **Project Code** - Grant/project tracking
- **Account Code** - The account affected
- **Label** - Human-readable account type (Revenue, A/R, HST, Cash, Processing Fees, etc.)
- **Debit** - Debit amount (if applicable)
- **Credit** - Credit amount (if applicable)

### Understanding Account Labels

The **Label** column provides human-readable names for account types, making it easier to filter and understand transactions without needing to memorize account codes.

**Account Label Examples:**

| Account Type | Label | Account Codes |
|--------------|-------|---------------|
| Revenue accounts | `Revenue` | 4010 (Leagues), 4020 (Programs), 4030 (Products), 4040 (Fees) |
| Asset accounts | `A/R`, `Cash`, `Undeposited Funds` | 1200 (Accounts Receivable), club-specific codes |
| Liability accounts | `HST`, `PST`, `GST`, `Sales Tax`, `Club Credit Payable` | 2110 (HST Payable), club-specific codes |
| Expense accounts | `Processing Fees`, `Club Credit Given` | Club-specific codes |

**Tax Labels:** Tax labels are automatically determined based on your club's location:
- **Ontario clubs:** `HST` (Harmonized Sales Tax)
- **BC clubs:** `GST` and `PST` (separate federal/provincial taxes)
- **US clubs:** `Sales Tax` and `State` (varies by state)
- **Other locations:** Falls back to `Tax 1` and `Tax 2` if no match found

**Why Labels Matter:**

Labels let you filter transactions without knowing specific account codes. For example:
- Want to see all revenue? Filter by Label: `Revenue` (includes all revenue accounts regardless of code)
- Need all tax transactions? Filter by Label: `HST`, `GST`, or `PST` depending on your location
- Looking for cash movements? Filter by Labels: `Cash`, `Undeposited Funds`, `A/R`

**Understanding the Columns:**

Each transaction shows three pieces of information to help you track and categorize:
- **Item Type** - What was sold (League, Product, Fee, Program)
- **Account Code** - Matches your chart of accounts (4010, 1200, 2110)
- **Account Label** - Easy-to-read category (Revenue, A/R, HST)

This lets you filter reports either by specific account codes or by broad categories.

### Filters

Filter transactions by:
- **Date Range** - From/To dates
- **Order ID** - See all transactions for a specific order
- **Transaction Type:**
  - **All** - Show all transactions
  - **Revenue Recognition** - Order items submitted (revenue and tax entries)
  - **Cash Receipts** - Payments received (cash and club credit applications)
  - **Deposits** - Payments moved to bank (including processing fees)
  - **Refunds** - Money returned to members (cash and club credit refunds)
  - **Club Credit** - Club credit activity (payments, refunds, manual grants)
  - **Processing Fees** - Payment processor fee expenses
  - **Reversals** - All reversal transactions (from deletions)

### Summary Totals

The report displays:
- **Count** - Total number of transactions
- **Total Debits** - Sum of all debit entries
- **Total Credits** - Sum of all credit entries
- **Balance** - Should always be $0 (debits = credits)

### CSV Export

Export to CSV in standard double-entry format for import into:
- QuickBooks Desktop or Online
- Xero
- Sage
- Other accounting software

The CSV export includes additional columns not shown in the on-screen report, specifically designed for accounting software integration.

**CSV Columns (in order):**

1. **Journal Entry Group** - Unique identifier grouping related transactions (e.g., `123-RevenueRecognized`)
2. **Order ID** - Reference to the order
3. **Transaction Type** - Type of accounting event
4. **Date/Time** - Transaction timestamp
5. **Item Type** - What was sold (League, Product, Fee, etc.)
6. **Description** - Item description
7. **Class** - Sub-categorization code
8. **Project** - Project/grant tracking code
9. **Account** - Account code from your chart of accounts
10. **Label** - Human-readable account type (Revenue, A/R, HST, etc.)
11. **Debit** - Debit amount (if applicable)
12. **Credit** - Credit amount (if applicable)

**Journal Entry Grouping:**

The **Journal Entry Group** column (first column) groups related transactions that represent a single financial event. This makes it easy to import complete journal entries into QuickBooks or other accounting software.

**Examples:**
- `12345-RevenueRecognized` - All transactions from order item 12345's revenue recognition
- `67890-PaymentInitiated` - All transactions from payment 67890

All transactions with the same Journal Entry Group ID should balance to $0 (total debits = total credits).

**Example CSV Output:**

```csv
Journal Entry Group,Order ID,Type,Date,Item,Description,Class,Project,Account,Label,Debit,Credit
123-RevenueRecognized,100,Revenue recognized,2025-01-15 10:23:45,League,Monday Night League,,MENS,1200,A/R,113.00,
123-RevenueRecognized,100,Revenue recognized,2025-01-15 10:23:45,League,Monday Night League,,MENS,4010,Revenue,,100.00
123-RevenueRecognized,100,Revenue recognized,2025-01-15 10:23:45,League,Monday Night League,,MENS,2110,HST,,13.00
456-PaymentInitiated,100,Payment initiated,2025-01-20 14:32:10,,,,,1050,Undeposited Funds,113.00,
456-PaymentInitiated,100,Payment initiated,2025-01-20 14:32:10,League,Monday Night League,,MENS,1200,A/R,,113.00
456-PaymentDeposited,100,Payment deposited,2025-01-25 00:00:01,,,,,1000,Cash,107.92,
456-PaymentDeposited,100,Payment deposited,2025-01-25 00:00:01,,,,,5500,Processing Fees,5.08,
456-PaymentDeposited,100,Payment deposited,2025-01-25 00:00:01,,,,,1050,Undeposited Funds,,113.00
```

**Key Features:**

- **Complete data** - Every row includes all fields for easy import
- **Chronological order** - Oldest transactions first (standard for accounting imports)
- **Balanced groups** - Each journal entry group balances to $0
- **Import-ready** - Standard format compatible with major accounting software

The CSV maintains the double-entry structure with separate Debit and Credit columns, ensuring compatibility with all major accounting systems.

## Sequential Payment Allocation & Partial Refunds

When a payment is received for an order with multiple items, the system allocates payment sequentially to the smallest items first. This enables accurate partial refund tracking.

**Example:** Order with three items totaling $140.60
- Fee: $5.00
- Product: $22.60
- League: $113.00

**Payment of $70 is allocated:**
1. Fee: $5.00 paid in full (100%)
2. Product: $22.60 paid in full (100%)
3. League: $42.40 paid (37.5% paid, 62.5% unpaid)

This means you can refund the fee or product in full, even though the order is only partially paid. The system tracks which payments have been applied to each item, showing the refundable amount (net amount paid) for each item.

### Refunding Partially Paid Orders

The sequential allocation system makes partial refunds straightforward:

**Example 1: Full Refund of Fully-Paid Item**

An order has three items where $70 has been paid (fee $5 + product $22.60 + league $113). Staff decides to refund the product in full.

**Refund form:**
- Staff checks the "Locker" item
- Refund amount shows $22.60 (the full refundable amount)
- Staff processes the refund

**What happens:**
- Product item status changes to `'cancelled'`
- Member receives $22.60 refund
- Fee and league remain active

**Accounting entries:**

```
DR  Revenue (Product)     $20.00
DR  HST Payable           $2.60
CR  Undeposited Funds     $22.60
```

**Result:** Member receives $22.60 refund, product is cancelled.

**Example 2: Partial Refund (Price Adjustment)**

A league registration was paid in full for $113. Staff decides to issue a $20 discount (member missed a session).

**Refund form:**
- Staff checks the "League" item
- Staff changes the refund amount from $113.00 to $20.00
- Staff processes the refund

**What happens:**
- Item price is reduced from $113 to $93
- Item remains in `'paid'` status (not cancelled)
- Member receives $20 refund

**Accounting entries:**

```
DR  Revenue                $17.70    (proportional to $20 refund)
DR  HST Payable            $2.30     (proportional tax)
CR  Undeposited Funds      $20.00
```

**Result:** Member receives $20 refund, item price adjusted to $93, still marked as paid.

**Example 3: Mixed Refund (Multiple Items)**

An order has three items all fully paid:
- League: $113 (refundable)
- Curling Canada Fee: $5 (refundable)
- Locker: $22.60 (refundable)

**Refund form:**
- Staff checks "Curling Canada Fee" - leaves amount at $5.00 (full refund)
- Staff checks "Locker" - changes amount from $22.60 to $10.00 (partial refund)
- Staff leaves "League" unchecked (no refund)
- Staff processes the refund

**What happens:**
- Fee item: Status changes to `'cancelled'`
- Locker item: Price reduced from $22.60 to $12.60, remains `'paid'`
- League item: Unaffected
- Member receives total refund of $15

**Accounting entries for the combined refund:**

```
DR  Revenue (Fee)            $5.00
DR  Revenue (Locker)         $8.85     (proportional to $10 refund)
DR  HST Payable (Locker)     $1.15     (proportional tax)
CR  Undeposited Funds        $15.00
```

**Result:** One refund transaction handles both a cancellation and a price adjustment.

**Important Note for Event Registrations:** Partial refunds do not remove a participant's registration from an event (league, bonspiel, program). Only a full refund that cancels the item will unregister the participant. This allows clubs to offer discounts or adjustments while keeping participants enrolled.

### Refundable Amounts in the UI

When viewing an order, each item displays:
- **Amount Paid** - How much has been paid toward this specific item
- **Net Amount Paid** - Amount paid minus any previous refunds or price reductions
- **Refundable Amount** - The amount available to refund (equal to net amount paid)

Items that haven't been paid yet show as "Not refundable" and are disabled in the refund form. You can only refund what's been paid.

**Important:** The refundable amount automatically accounts for any previous partial refunds. If an item had a $20 partial refund processed previously, the refundable amount is reduced accordingly.

## Setting Up Accounting Transactions

### Step 1: Upgrade to Premium

Accounting transactions require an active Premium subscription. Go to **Club → Premium** to upgrade.

### Step 2: Enable Accounting

1. Go to **Club → Settings**
2. Scroll to **Accounting**
3. Check the box to enable accounting
4. Configure all account codes:
   - Revenue codes (Leagues, Bonspiels, Programs, Products, Fees, Venues, Order Adjustments, Convenience Fees)
   - Asset codes (Accounts Receivable, Undeposited Funds, Cash Account)
   - Liability codes (HST Payable, Club Credit Liability)
   - Expense codes (Processing Fee Expense, Club Credit Expense)
5. Save

### Step 3: Start Recording Transactions

Once enabled, the system automatically creates accounting transactions for:
- New orders submitted (revenue recognition)
- New payments received (cash receipts and club credit applications)
- New refunds processed (cash refunds and club credit refunds)
- Payment deposits with processing fee tracking
- Manual club credit grants

### Important Limitations

- **No Historical Data** - Transactions are only recorded from the date you enable accounting forward. Past orders/payments/refunds are not backfilled.
- **Premium Required** - If your Premium subscription lapses, no new transactions will be recorded (but existing transactions remain accessible).
- **Immutable Records** - Once recorded, accounting transactions never change. If you modify account codes, only future transactions are affected.

## Best Practices for Accounting Transactions

### Configure Before Enabling

Plan your account code structure completely before enabling the feature. While you can change codes later, existing transactions won't be updated.

### Review Transaction Types

Understand when each transaction type is created:
- **Revenue Recognition** - As soon as order is submitted (even if unpaid)
- **Cash Receipts** - Only when payment successfully processes
- **Refunds** - When refund is issued

### Reconciliation Procedures

Regular reconciliation ensures your books accurately reflect your club's financial position. Follow these procedures monthly (or more frequently during busy periods):

#### 1. Reconcile Undeposited Funds to Bank Deposits

**Purpose:** Verify all payments received have been properly deposited to your bank account.

**Procedure:**
1. Export Accounting Transactions report
2. Filter by Account Label: `Undeposited Funds`
3. Calculate the Undeposited Funds balance:
   - Sum all debits (payments received)
   - Subtract all credits (payments deposited or refunded)
   - Result = Outstanding payments not yet deposited
4. Compare to your actual undeposited payments (e.g., cash/checks on hand)
5. Investigate any discrepancies

**Common timing differences:**
- Online payments processed but not yet paid out by Stripe/SportsPay (typically 2-7 business days)
- Cash/checks received but not yet deposited to bank
- Refunds processed but not yet withdrawn from bank account

#### 2. Reconcile Accounts Receivable

**Purpose:** Verify outstanding member balances are accurate and collectible.

**Procedure:**
1. Export Accounting Transactions report
2. Filter by Account Code: 1200 (A/R)
3. Calculate A/R balance:
   - Sum all debits (orders placed, unpaid balances)
   - Subtract all credits (payments received, refunds for unpaid items)
   - Result = Total outstanding member balances
4. Cross-reference to Orders report filtered by status: `submitted`, `partially_paid`
5. Review aging of receivables:
   - Current (0-30 days)
   - 31-60 days
   - 61-90 days
   - Over 90 days (may require collection action)

**Red flags:**
- A/R balance doesn't match outstanding orders report
- Large balances over 90 days old
- Negative A/R balance (indicates overpayment or accounting error)

#### 3. Reconcile Tax Payable (HST/GST/PST)

**Purpose:** Ensure tax liability is accurately calculated for remittance to government.

**Procedure:**
1. Export Accounting Transactions report for your tax reporting period
2. Filter by Account Code: 2110 (HST Payable)
3. Calculate tax liability:
   - Sum all credits (tax collected on sales)
   - Subtract all debits (tax refunded)
   - Result = Net tax owed to government
4. This amount should match your tax filing for the period
5. When you remit tax to government, create a manual journal entry:
   ```
   DR  HST Payable     (Amount remitted)
   CR  Cash Account    (Amount remitted)
   ```

**Important:** The system does NOT automatically record tax remittances. You must manually record these payments to clear the HST Payable liability.

#### 4. Reconcile Club Credit Liability

**Purpose:** Track total outstanding club credit obligations to members.

**Procedure:**
1. Export Accounting Transactions report
2. Filter by Account Label: `Club Credit Payable`
3. Calculate club credit liability:
   - Sum all credits (credits granted or refunded to credit)
   - Subtract all debits (credits applied to orders)
   - Result = Total club credits outstanding
4. Cross-reference to Club Credits report (if available) or member balances
5. Review for:
   - Stale credits (over 12 months unused)
   - Unusually large credits or frequent grants that may need review

#### 5. Verify Processing Fee Expenses

**Purpose:** Ensure payment processor fees are accurately recorded.

**Procedure:**
1. Export Accounting Transactions report for the month
2. Filter by Account Label: `Processing Fees`
3. Sum all processing fee debits
4. Compare to:
   - Stripe/SportsPay monthly statements
   - Bank deposit reconciliation (net deposits + fees should equal gross payments)
5. Investigate any discrepancies

**Common issues:**
- Fees from previous month included in current month payout
- Application fees vs. processing fees split incorrectly
- Manual deposits recorded without fee tracking

### Monthly Reconcile Checklist

Use this checklist to ensure complete monthly reconciliation:

- [ ] Undeposited Funds balance reconciles to actual undeposited items
- [ ] Accounts Receivable balance matches outstanding orders
- [ ] Accounts Receivable aging reviewed, collection actions documented
- [ ] Tax Payable balance calculated and documented
- [ ] Tax remittances recorded (if applicable for period)
- [ ] Club Credit Liability balance verified
- [ ] Processing Fee Expense reconciled to processor statements
- [ ] All journal entry groups balance (debits = credits)
- [ ] Bank reconciliation completed (Cash Account)
- [ ] Unusual or large transactions reviewed and documented

### Export Frequently

Export transactions to CSV regularly for import into your accounting software. The sequential nature of the report makes it easy to export only new transactions since your last import.

### Monitor Accounts Receivable

The A/R balance represents money owed to your club from unpaid orders. Monitor this balance to:
- Follow up on outstanding payments
- Identify members with unpaid balances
- Reconcile against your bank deposits

### Monitor Club Credit Liability

If your club uses club credits (store credit), the Club Credit Liability balance represents money your club owes to members. Monitor this balance to:
- Track total outstanding credit obligations
- Budget for potential redemptions
- Reconcile credit grants, applications, and refunds
- Identify unusual patterns in credit usage

## Frequently Asked Questions

### Can I change account codes after enabling accounting transactions?

Yes, but only future transactions will use the new codes. Existing accounting transactions are immutable and will never be changed or backfilled. This maintains the integrity of your financial audit trail.

### What happens if my Premium subscription lapses?

No new accounting transactions will be recorded while your subscription is lapsed. However, all existing transactions remain accessible in your reports. When you renew Premium, transaction recording will resume from that date forward.

### Can I delete orders that have accounting transactions?

You can delete unpaid orders - the system will automatically create reversal transactions to maintain balanced books. Paid orders require refunding before deletion to ensure accurate financial records.

**Tip for testing during offseason:** If you want to submit test orders during the offseason without creating accounting transactions, you can temporarily disable accounting in your Club Settings. However, we don't recommend this approach as you might forget to turn it back on before your season starts!

### How do I reconcile my Accounts Receivable balance?

Export the Accounting Transactions report and filter by Account Code 1200 (A/R). Sum all debits (money owed to you) minus all credits (payments received). This balance should match your outstanding orders.

### What if I made a mistake in an order?

Accounting transactions are immutable - you can't edit them. Instead:
- For unpaid orders: Delete the order (creates reversals) and create a new correct order
- For paid orders: Process a refund, then create a new order if needed
- This approach maintains a complete audit trail of all changes

### What's the difference between a full refund and a partial refund?

The system handles these two scenarios differently:

**Full Refund (Cancellation):** When you refund all payments made on an item, the item status changes to `'cancelled'` and all remaining revenue is reversed. This is treated as cancelling the service/product.

**Partial Refund (Price Adjustment):** When you refund less than the full amount paid, the item's price is reduced proportionally and the item remains in paid/partially-paid status. This is treated as a price discount or adjustment, not a cancellation.

**Example:** If a member paid $113 for a league and you refund $20, the league price drops to $93 (not cancelled). If you later refund the remaining $93, then it becomes a cancellation.

This distinction ensures your revenue accounts accurately reflect what services were actually provided versus cancelled.

### Can I use this with QuickBooks/Xero/Sage?

Yes! Export the Accounting Transactions report to CSV and import it into your accounting software. The export is specifically designed for accounting software integration:

**Key features for import:**
- **Journal Entry Group ID** - First column groups related debits/credits together
- **Standard double-entry format** - Separate Debit and Credit columns
- **Complete transaction data** - All fields included in every row
- **Chronological order** - Oldest transactions first (standard for imports)
- **Balanced entries** - Each group balances to $0 (debits = credits)

**QuickBooks users:** The Journal Entry Group ID column makes it easy to import complete journal entries. You can use this field to group transactions when importing, ensuring all related debits and credits stay together.

**Xero/Sage users:** The standard double-entry format works directly with most import tools. The Label column provides human-readable account types that can help map to your chart of accounts during import.

Most accounting software allows you to map CSV columns to their fields during import. The export follows accounting best practices and should work with any system that supports journal entry imports.

### Do I need to understand accounting to use this feature?

Basic understanding helps, but the system handles the complex accounting automatically. Your accountant can work with the exported CSV files even if you're not familiar with journal entries and double-entry bookkeeping.

### How are payment processing fees tracked?

When deposits are recorded from Stripe or SportsPay, the system automatically tracks processing fees as expenses. The deposit journal entry shows:
- Debit to Cash Account (net amount received)
- Debit to Processing Fee Expense (fees deducted)
- Credit to Undeposited Funds (gross payment amount)

This ensures your expense tracking accurately reflects the cost of accepting online payments.

### How does club credit accounting work?

Club credits create a liability (money the club owes to members). The accounting tracks:
- **Manual grants** - Debit Club Credit Expense, Credit Club Credit Liability
- **Credit payments** - Debit Club Credit Liability, Credit A/R (reduces liability as credit is used)
- **Credit refunds** - Debit Revenue/HST, Credit Club Credit Liability (increases liability when refunding to credit)

The Club Credit Liability balance shows your total obligation to members.

### How do I record tax remittances to the government?

The system does NOT automatically record tax payments to the government. When you remit HST/GST/PST:

1. Calculate your tax liability from the Accounting Transactions report (filter by Account 2110)
2. Pay the amount to the government via your normal process
3. **Manually record the payment** in your accounting software:
   ```
   DR  HST Payable (2110)
   CR  Cash Account
   ```

This clears the liability from your books. Without this entry, your HST Payable balance will continue to grow even after you've paid the government.

**Important:** Most clubs will make this journal entry in their primary accounting software (QuickBooks, Xero, etc.) rather than in Curling IO, as tax remittances are typically handled outside the club management system.

## Related Documentation

- [Accounting Codes](/docs/accounting/accounting-codes) - Basic accounting codes setup
- [Club Settings](/docs/club-management/settings) - Configure account codes
- [Premium Features](/docs/getting-started/premium) - Learn about Premium subscription
- [Reports](/docs/club-management/reports) - Other available reports
