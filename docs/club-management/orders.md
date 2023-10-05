---
id: orders
title: Orders
slug: /club-management/orders
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Walkthrough Video

The following video will take you, the curling club manager, through the basics of handling orders in Curling I/O.
If you're new to Curling I/O, it's worthwhile to watch this before wading through the rest of our documentation.

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

To refund a payment simply click the **Add a refund** button next to the payment near the bottom of the order screen.
Refunds are specific to each payment, so if you submitted partial payments for an order, to fully refund the order you would have to submit a refund for each of the payments separately.

![List of Payments](/img/docs/club-management/orders/refund-a-payment.png)

When you click the **Add a refund** button you will be taken to the refund form.

### Refund Form

When refunding a payment you can choose which items to refund and specify the amount to refund.
If you choose items to refund, by default the system will total up the amounts of the items selected.
For example if you are refunding a Curling Canada Fee because the curler had already paid it at another club this season, you just select the fee and we'll figure out the amount to be refunded.

![List of Payments](/img/docs/club-management/orders/refund-form.png)

You can also perform an _adhoc refund_ by specifying the amount to refund regardless of whether or not you select any items.
If you don't select any items, then your reports can't show which items the refund was placed against, only the order and payment itself.

If the payment you are refunding was made through our online payments (credit or debit card) then the system will automatically send the refund amount back to the member's card used in the purchase.
The system will also autofill the time it was withdrawn and how it was refunded.

You can optionally specify a reason for the refund, and for offline payments, when the funds were withdrawn from the club, how the refund was made.

Note: Refunding an item that requires a curler profile, like a league, will also remove that curler's registration from the item (league).


## Adjusting Submitted Orders

For submitted (unpaid) orders only, you can add **adjustments** to change the total.
An adjustment records as a new line item for the order where you can enter an amount (negative amounts reduce the total) and a description.

Adjustments are typically used to correct a mistake during registration without asking the curler to redo their order.
Adjustments can increase bookkeeping effort when balancing your books, so we recommend redoing orders instead, even if you need to login as the curler and order on their behalf.

## Sending an Order back to the Account's Cart

For submitted (unpaid) orders only, you can send the order back to the registering account's cart.

You may want to do this when a mistake was made during registration and you'd like the curler to correct the mistake themself, or correct it for them using the **Login as** feature.


## Deleting Submitted Orders

You can delete submitted (unpaid) orders. This is useful when testing out your discounts and pricing, which we highly recommend doing before sending your curlers to register.

You cannot delete paid orders as this would most definitely unbalance your bookkeeping reports.
If an order has offline payments however, you can delete those payments first, and then delete the order itself, as it will be moved back into a submitted state.


## Transferring Orders

You can transfer orders to another account at any time.
An account is basically a login represented by an email address.
You can only transfer orders to accounts that have been created within Curling I/O and thus verified their email address.
You cannot transfer an order to a curler who has never logged in.

The reason for transferring an order is to have it show up within the accounts order history.
For example, if a curler registered at the club under a dedicated club registration login, you may later want to transfer that order to them once they're using Curling I/O.

## Troubleshooting

- [One of our members registered for the wrong league](/docs/getting-started/faq#one-of-our-members-registered-for-the-wrong-league)
- [One of our members paid less than they should have](/docs/getting-started/faq#one-of-our-members-paid-less-than-they-should-have)
- [One of our members paid seasonal fees more than once](/docs/getting-started/faq#one-of-our-members-paid-seasonal-fees-more-than-once)
- [Refund doesn't show up on the curler's statement](/docs/getting-started/faq#refund-doesnt-show-up-on-the-curlers-statement)
