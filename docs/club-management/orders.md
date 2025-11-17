---
id: orders
title: Orders
slug: /club-management/orders
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Walkthrough Video

The following video will take you, the curling club manager, through the basics of handling orders in Curling IO.
If you're new to Curling IO, it's worthwhile to watch this before wading through the rest of our documentation.

<div className="text--center videoWrapper">
  <iframe width="100%" src="https://www.youtube.com/embed/VEkkiOkTOGE" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
</div>


## Finding your Orders

Within your admin area, click on **Orders** in the top bar.

![Navigation](/img/docs/club-management/orders/navigation.png)

You can search and filter your orders by:
- Keyword
- Order status (Paid, Submitted, Refunded, etc.)
- Date Range

![Filter Orders](/img/docs/club-management/orders/filter-orders.png)

To view and submit a payment for an order, click on the link in the **Summary** column.

## Submitting Payments

If the order has not been fully paid yet (status of **Submitted** or **Partially Paid**), you can submit a payment against it by clicking the **Add a payment** button near the bottom, or selecting Add a payment in the **Actions** dropdown.

You will then be taken to the payment form.

### Payment Form

![Submitted a Payment](/img/docs/club-management/orders/submitting-a-payment.png)

The amount of the payment will automatically default to the amount owing.
If you're accepting a partial payment you can change it to the appropriate amount.

Optionally you can specify when the payment was or is going to be deposited, and how the payment was made.
You can edit these later if you're not sure of the deposit date, or it changed.

You can also optionally add notes to the payment for your own future reference.
For example; _Hurly gave Sue a cheque for $180.80 at the bar._

If your club has online payments set up and enabled, then you'll have the option of using a Credit / Debit card to process the payment.
This is useful if a curler calls in with a credit card or brings in a credit card and you don't already have a point of sale system.

## Refunds

To refund an order, click the **Add a refund** button next to a payment near the bottom of the order screen.

![Add a Refund](/img/docs/club-management/orders/refund-a-payment.png)

This opens the refund form where you can select which items to refund and specify the amounts.

### Selecting Items to Refund

The refund form shows all refundable items from the order with checkboxes. Only items that have been paid (fully or partially) can be refunded.

![Refund Form](/img/docs/club-management/orders/refund-form.png)

**To refund items:**
1. Check the box next to each item you want to refund
2. The refund amount defaults to the full refundable amount for each item
3. You can adjust the amount for partial refunds (see below)
4. Use **Select All** to quickly select all refundable items

**Example:** If you're refunding a Curling Canada Fee because the member already paid it at another club, simply check the fee item and the system shows the full refundable amount.

### Full vs. Partial Refunds

You can refund an item either fully or partially:

**Full Refund:**
- Refund the entire refundable amount shown
- The item is cancelled and marked as refunded
- For event registrations (leagues, bonspiels, programs), the participant is unregistered
- Inventory is released if quantity-limited

**Partial Refund (Price Adjustment):**
- Change the refund amount to less than the full refundable amount
- The item price is reduced, but the item remains active
- For event registrations, the participant stays registered (useful for partial discounts)
- The item is not marked as cancelled

**Important:** Partial refunds will not remove a registration from an event. Only refunding the full amount will unregister a participant.

### Refund Methods

**Online Payments (Credit/Debit Card):**
If the original payment was made through online payments, you can:
- Refund to the member's original card (recommended)
- Refund to club credits (member gets store credit)
- Refund via another method (cash, cheque, etc.)

The system will autofill the withdrawal date and method when refunding to the original card.

**Offline Payments:**
For cash, cheque, or e-transfer payments, you can specify:
- How the refund was made (cash, cheque, club credit, etc.)
- When the funds were withdrawn from the club
- An optional reason for the refund

### Refund Tracking

The system tracks refunds against specific items, which helps with:
- Accurate reporting showing which items were refunded
- Inventory management (releasing quantity-limited spots)
- Registration tracking (unregistering participants for full refunds)
- Accounting transactions (if Premium accounting is enabled)

## Adjusting Submitted Orders

For submitted (unpaid) orders only, you can add **adjustments** to change the total.
An adjustment records as a new line item for the order where you can enter an amount (negative amounts reduce the total) and a description.

Adjustments are typically used to correct a mistake during registration without asking the curler to redo their order.
Adjustments can increase bookkeeping effort when balancing your books, so we recommend redoing orders instead, even if you need to login as the curler and order on their behalf.

You cannot make adjustments to orders that have been paid, so it's only relevant to offline orders during their submitted status.

## Sending an Order back to the Account's Cart

For submitted (unpaid) orders only, you can send the order back to the registering account's cart.

You may want to do this when a mistake was made during registration and you'd like the curler to correct the mistake themself, or correct it for them using the **Login as** feature.

You cannot send orders that have been paid back to their cart, so it's only relevant to offline orders during their submitted status.

## Deleting Submitted Orders

You can delete submitted (unpaid) orders. This is useful when testing out your discounts and pricing, which we highly recommend doing before sending your curlers to register.

You cannot delete paid orders as this would most definitely unbalance your bookkeeping reports.
If an order has offline payments however, you can delete those payments first, and then delete the order itself, as it will be moved back into a submitted state.


## Transferring Orders

You can transfer orders to another account at any time.
An account is basically a login represented by an email address.
You can only transfer orders to accounts that have been created within Curling IO and thus verified their email address.
You cannot transfer an order to a curler who has never logged in.

The reason for transferring an order is to have it show up within the accounts order history.
For example, if a curler registered at the club under a dedicated club registration login, you may later want to transfer that order to them once they're using Curling IO.

## Troubleshooting

- [One of our members registered for the wrong league](/docs/getting-started/faq#one-of-our-members-registered-for-the-wrong-league)
- [One of our members paid less than they should have](/docs/getting-started/faq#one-of-our-members-paid-less-than-they-should-have)
- [One of our members paid seasonal fees more than once](/docs/getting-started/faq#one-of-our-members-paid-seasonal-fees-more-than-once)
- [Refund doesn't show up on the curler's statement](/docs/getting-started/faq#refund-doesnt-show-up-on-the-curlers-statement)
