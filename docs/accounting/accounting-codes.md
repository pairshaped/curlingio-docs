---
id: accounting-codes
title: Accounting Codes
slug: /accounting/accounting-codes
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Overview

Curling IO provides two levels of accounting features:

1. **Accounting Codes** (All Plans) - Categorize revenue items with account, class, and project codes that appear in your order items report
2. **Accounting Transactions** (Premium Only) - Comprehensive double-entry bookkeeping with accrual accounting that generates detailed journal entries for every order, payment, and refund

Most clubs use accounting codes for basic revenue categorization. Premium clubs can enable the full accounting transactions system for complete integration with accounting software like QuickBooks, Xero, or Sage.

This document covers **Accounting Codes**, which are available to all clubs. For information about the Premium accounting transactions system, see [Accounting Transactions](/docs/accounting/accounting-transactions).

## Accounting Codes (All Plans)

Accounting codes allow you to categorize revenue items for reporting. When enabled, you can set default account codes for each type of registration, and optionally add more detailed tracking codes at the item level. These codes appear in your Order Items report and can be exported to CSV.

**Available to:** All clubs

**What you get:**
- Categorize revenue by account, class, and project codes
- Codes captured at time of purchase
- Appears in Order Items report
- CSV export for manual import into accounting software

## When to Use Accounting Codes

Most clubs either don't need accounting codes at all, or simply set up 8 default codes and never touch individual items. You can add optional sub-categorization at the item level for detailed tracking by demographics, departments, or grant funding.

## The Two-Tier System

### 1. Club-Level Defaults (Simple)

Set default account codes in [Club Settings](/docs/club-management/settings) for each type of registration:

- **Leagues** - Individual league registrations (e.g., 1000)
- **Bonspiels** - Competition/bonspiel registrations (e.g., 2000)
- **Programs** - Programs like Learn to Curl, camps, seminars (e.g., 3000)
- **Products** - Pro shop items and merchandise (e.g., 4000)
- **Fees** - Membership and other fees (e.g., 5000)
- **Venues** - Venue rental revenue (e.g., 6000)
- **Order Adjustments** - Manual adjustments, discounts, and credits applied to orders (e.g., 7000)
- **Convenience Fees** - Processing and service fees charged on orders (e.g., 8000)

These codes will automatically apply to all items of that type unless you override them.

**Tip:** Account codes typically match your chart of accounts in QuickBooks, Sage, or other accounting software. Use the same codes you have in your accounting system for seamless reporting and integration.

### 2. Item-Level Overrides (Advanced)

For more detailed tracking, you can add codes to individual items:

- **Leagues and Competitions** - Track by demographics (MENS, WOMENS, JUNIOR), skill level, or special events
- **Products** - Separate merchandise from rentals, track fundraising campaigns
- **Fees** - Differentiate membership types or age groups
- **Programs** - Track Learn to Curl vs training camps, grant-funded programs

## The Three Code Types

### Account Code

**Purpose:** Primary revenue or expense category from your chart of accounts

**When to override:**
- Use a special account for charity events
- Separate different product categories (merchandise vs rentals)
- Track different fee types (membership vs capital improvement)

**Examples:** `1000`, `2000`, `3000`, `4000`, `5000`

**Leave blank** to use the club default (recommended for most items)

### Class Code (Optional)

Sub-category for tracking by department, demographic, or program type. Typically maps to Class in QuickBooks and Category in Xero.

**Common examples:**
- Demographics: `MENS`, `WOMENS`, `JUNIOR`, `SENIOR`, `MIXED`
- Skill level: `COMPETITIVE`, `RECREATIONAL`, `BEGINNER`, `ADVANCED`
- Program type: `LEARN2CURL`, `TRAINING`, `CAMP`, `VOLUNTEER`
- Product type: `PROSHOP`, `RENTAL`, `MERCHANDISE`, `APPAREL`, `EQUIPMENT`
- Fee type: `ADULT`, `JUNIOR`, `STUDENT`, `AFFILIATE`

### Project Code (Optional)

Track specific grants, fundraisers, or special initiatives. Typically maps to Location or Project in QuickBooks and Category in Xero.

**Common examples:**
- Grants: `GRANT_2024`, `YOUTH_DEVELOPMENT`, `ACCESSIBILITY_GRANT`
- Fundraising: `CAPITAL_CAMPAIGN_2024`, `FUNDRAISER_2024`
- Initiatives: `GROW_THE_GAME`, `COACH_TRAINING`, `FACILITY_UPGRADE`

## Understanding Order Items vs Payments

Accounting codes are assigned to **order items**, not payments. When a member checks out, they typically purchase multiple items in their cart:

- A league registration
- Affiliate fees (provincial and national)
- Membership fees
- Add-ons like lockers
- Additional leagues for their children

A single payment covers all these items, but each item gets its own accounting codes. For example, in one checkout:

- League registration → Account: 1000, Class: MENS
- Provincial Fee → Account: 5000, Class: AFFILIATE
- Membership Fee → Account: 5100
- Locker → Account: 4000, Class: RENTAL

This item-level detail allows you to properly categorize revenue in your accounting software, even though the member only made one payment. Your order item reports will show each item separately with its corresponding codes, making it easy to track revenue by category.

## How Codes Are Captured

When a member completes a registration or purchase, Curling IO captures the accounting codes at that moment and stores them with the order item. The codes are captured once and don't change, even if you later modify the item's codes. This ensures historical accuracy in your financial records.

These codes then appear in your order item reports and can be exported for use in your accounting software.

## Common Use Cases

### Basic Club (Most Common)

**Setup:**
- Enable accounting in Club Settings
- Set 8 default account codes
- Never touch individual items

**Result:** All revenue automatically categorized by type with zero ongoing effort

### Intermediate Club - Demographics

**Need:** Track league revenue by gender for board reporting

**Setup:**
- Set club default for leagues (1000)
- Edit each league to add class codes:
  - Men's League → Class: `MENS`
  - Women's League → Class: `WOMENS`
  - Mixed League → Class: `MIXED`

**Result:** All leagues use account 1000, but can report separately by gender

### Advanced Club - Grant Tracking

**Need:** Report on grant-funded youth development program

**Setup:**
- Set club default for programs (3000)
- Edit program:
  - Leave account blank (uses default 3000)
  - Set class code: `JUNIOR`
  - Set project code: `GRANT_2024`

**Result:** Easy to filter and report all grant-funded youth program revenue

### Sophisticated Club - Multiple Categories

**Need:** Separate merchandise from rentals, track fundraising campaigns

**Setup:**
- Products with different accounts:
  - Pro shop items: Account `4100`, Class `MERCHANDISE`
  - Equipment rentals: Account `4200`, Class `RENTAL`
  - Fundraising items: Account `4300`, Project `CAPITAL_CAMPAIGN_2024`

**Result:** Complete separation and tracking across multiple dimensions

## Setting Up Accounting Codes

### Step 1: Enable the Feature

1. Go to **Club → Settings**
2. Scroll to the **Accounting** section
3. Check the box to enable accounting
4. Save

### Step 2: Set Default Codes

In the same section, set default account codes for each type:

1. **Leagues** - e.g., 1000
2. **Bonspiels** - e.g., 2000
3. **Programs** - e.g., 3000
4. **Products** - e.g., 4000
5. **Fees** - e.g., 5000
6. **Venues** - e.g., 6000
7. **Order Adjustments** - e.g., 7000
8. **Convenience Fees** - e.g., 8000

Use codes that match your accounting software's chart of accounts.

### Step 3: Add Item-Level Codes (Optional)

For more detailed tracking, edit individual items:

**Leagues and Competitions:**
1. Edit the league or competition
2. Scroll to the **Accounting Codes** section
3. Add Account Code (override), Class Code, or Project Code as needed
4. Save

**Products, Fees, and Programs:**
Follow the same process in each item's edit form.

## Reporting and Exporting

### Order Items Report

All accounting codes appear in your order items report:

1. Go to **Reports → Order Items**
2. Use filters to find specific codes
3. Export to CSV for import into your accounting software

The CSV export includes columns for:
- Account Code
- Class Code
- Project Code

## Best Practices

### Keep It Simple

Start with just the 8 club defaults. Only add item-level codes if you have a specific reporting need.

### Use Consistent Naming

Establish a standard for class and project codes:
- Use UPPER_CASE for consistency
- Keep codes short but descriptive
- Document your codes for other administrators

### Examples:
- ✅ Good: `MENS`, `WOMENS`, `JUNIOR`, `GRANT_2024`
- ❌ Avoid: `men's`, `Women`, `jr`, `grant`

### Plan Before You Start

Before enabling accounting codes:
1. Review your accounting software's chart of accounts
2. Decide which account codes to use for each type
3. Determine if you need class or project tracking
4. Document your code structure

### Don't Overcomplicate

You can't change codes after purchase, so:
- Start simple and add complexity only when needed
- Most clubs only need account codes, not class/project
- Consider if you'll actually use the granularity before adding it

## Frequently Asked Questions

### Can I change codes after a purchase is made?

No. Codes are captured at the moment of purchase and become part of the historical record. This ensures accuracy in your financial reports. If you need to change how future purchases are categorized, update the codes on the item itself.

**For Premium clubs with accounting transactions enabled:** Any changes to account codes in Club Settings or on individual items will only affect new transactions going forward. Existing accounting transactions are immutable and will never be changed or backfilled. This maintains the integrity of your financial audit trail. See [Accounting Transactions](/docs/accounting/accounting-transactions) for more details.

### What happens if I don't set any codes?

Items will have blank/null accounting codes in reports. This makes it visible which items don't have codes assigned, rather than incorrectly assigning them to a default category.

### Do I need to use all three code types?

No. Most clubs only use account codes. Class and project codes are optional and should only be used if you have specific tracking needs.

### Can I use the same class or project code across different item types?

Yes! For example, you might use `JUNIOR` as a class code for both leagues and fees to track all junior-related revenue across categories.

### What if my accounting software doesn't support class or project tracking?

Just use account codes. The class and project codes will be in your exports but you can ignore them if your accounting system doesn't use them.

### How do I track codes for inherited fees (provincial/national)?

Inherited fees (like provincial and national affiliation fees) automatically use your club's default fee account code. Any codes set on the inherited fee itself are ignored. If you want to categorize inherited fees differently, set a specific fee account code in your Club Settings, and all inherited fees will use that code.

## Premium Accounting Transactions

For Premium clubs, Curling IO offers a comprehensive **Accounting Transactions** system that provides full double-entry bookkeeping with accrual accounting principles. Instead of just tagging revenue items with codes, the system automatically generates detailed journal entries (debits and credits) for every financial event.

Learn more: [Accounting Transactions](/docs/accounting/accounting-transactions)

## Related Documentation

- [Accounting Transactions](/docs/accounting/accounting-transactions) - Premium double-entry bookkeeping system
- [Club Settings](/docs/club-management/settings) - Enable accounting features
- [Leagues & Competitions](/docs/club-management/leagues) - Add codes to events
- [Products](/docs/club-management/products) - Add codes to products
- [Fees](/docs/club-management/fees) - Add codes to fees
- [Programs](/docs/club-management/programs) - Add codes to programs
