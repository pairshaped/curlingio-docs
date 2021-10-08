---
id: club-credits
title: Club Credits
slug: /club-management/club-credits
---
import useBaseUrl from '@docusaurus/useBaseUrl';

Club credits allow your users to pay for your leagues, competitions, products, and fees using credit they've accrued.

You can grant credit directly to a specific email address, or by selecting club credit when granting a refund for a payment in an order.

Credits are applied automatically against the total amount of the user's next purchase.

All changes to a user's credit balance are logged and can be exported in the reports section.

__IMPORTANT: Credits are applied to the *account*. This is the email address they login with. Credits are not applied to curler profiles.
In order to redeem credit the member must login with the email address you assigned the credit to.
When issueing refunds via credit, the credit is assigned to the email address that owns the order you refunded.
*[See the "What is an Account?" section in our FAQ.](http://localhost:8000/docs/getting-started/faq#what-is-an-account)*__

## Directly Granting Credits to a User

As a club manager you can grant credits to any user as long as you know the email address they use to login with.

Within your admin area, click on the **Club** dropdown menu in the top bar and then click on **Club credits**.

![Navigation](/img/docs/club-management/club-credits/navigation.png)

To grant credits to a specific user, enter their email address (that they will use to login), the amount to grant, and then click the **Add credit** button.

![New](/img/docs/club-management/club-credits/new.png)

You can even reduce the amount of credit a user has by granting a negative amount of credit.


## Refunding With Club Credits

When issuing a refund for any payment (online or offline) as a club manager you can select **Club credit** in the **Refunded with** dropdown.


![New](/img/docs/club-management/club-credits/refund-with.png)

This will refund the amount specified and credit the user with that amount which they can then use in a future purchase.

If you later delete this refund, the user's club credits that were granted for the refund will be debited from their club credit balance.
If however they don't have enough club credits to cover the amount being debited, you'll first need to correct that, by deleting a credit payment or manually granting them more credits,
before the refund can be deleted.


## Paying With Club Credits

When issuing a payment for an order as a club manager you can select **Club credit** in the **Paid with** dropdown.


![New](/img/docs/club-management/club-credits/paid-with.png)

If the user has enough club credits to cover the amount of the payment, that amount will be debited from their credit balance and the payment will succeed.

If you later delete this payment, the user's club credits that were debited for the payment will be added back to their credit balance.

## Credit Payments in the Cart

If a user has a positive credit balance, when they go to complete their next order / purchase, their credits will automatically be applied up to the total of the order or to their credit balance total, whichever is lower.

![New](/img/docs/club-management/club-credits/cart-credit.png)

When they submit the order, a club credit payment will be created and their credit balance will be debited.

If they don't have enough credits to cover the cart's total, the club credit payment is still created for the partial amount and the remainder can be paid through other means (online or offline).
If they pay the remainder via an online card payment, then there will be two payments created against the order, one for the club credits, and one for the remaining card payment.

## Deleting Club Credits

You can only delete club credits if there are no outstanding payments or refunds attached to it.
If you can't resolve that by deleting the refund / payments attached to the club credit, you can simply decrease the user's club credits to $0.00 by granting a negative credit to them.


## Downloading Club Credits

You can download a CSV (Comma Separated Value) file of your club credits by clicking the Download button.
This report can be imported into Excel or other spreadsheets or databases and will show the balance for each user that has ever had credits.

You can also access a more detailed Club Credit Log report in the **Reports** section which shows the history of all club credit adjustments ever made.

