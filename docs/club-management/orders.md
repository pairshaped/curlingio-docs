---
id: orders
title: Orders
slug: /club-management/orders
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Walkthrough Video

The following video will take you through the basics of handling orders in Curling I/O.
If you're new to Curling I/O, it's worthwhile to watch this before wading through the rest of our documentation.

<div className="text--center videoWrapper">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/VEkkiOkTOGE" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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

If you're club has online payments set up and enabled, then you'll have the option of using a Credit / Debit card to process the payment.
This is useful if a curler calls in with a credit card or brings in a credit card and you don't already have a point of sale system.

## Refunds

To refund a payment simply click the **Add a refund** button next to the payment near the bottom of the order screen.
Refunds are specific to each payment, so if you submitted partial payments for an order, to fully refund the order you would have to submit a refund for each of the payments separately.

![List of Payments](/img/docs/club-management/orders/refund-a-payment.png)

When you click the **Add a refund** button you will be taken to the refund form.

### Refund Form

When refunding a payment you can choose which items to refund and specify the amount to refund.
If you choose items to refund, by default the system will refund the total amounts of the items selected.
For example if you are refunding a Curling Canada Fee because the curler had already paid it at another club this season, you just select the fee and we'll figure out the amount to be refunded.

![List of Payments](/img/docs/club-management/orders/refund-form.png)

You can also perform an _adhoc refund_ by specifying the amount to refund regardless of whether or not you select any items.
If you don't select any items, then your reports can't show which items the refund was placed against, only the order and payment itself.

If the payment you are refunding was made through our online payments (credit or debit card) then the system will automatically send the refund amount back to the member's card used in the purchase.
The system will also autofill the time it was withdrawn and how it was refunded.

You can optionally specify a reason for the refund, and for offline payments, when the funds were withdrawn from the club, how the refund was made.


## Adjustments

Coming soon!


## Deleting Offline Orders

Coming soon!


## Transferring Orders

Coming soon!

