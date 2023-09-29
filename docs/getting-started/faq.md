---
id: faq
title: Frequently Asked Questions
slug: /getting-started/faq
---

### How much does it cost?

Curling I/O pricing is 2.9% + $0.30 per online transaction, and include all credit card processing fees.
There are no monthly, yearly, setup, or licensing fees, and offline payments are free.
See our [pricing section](/docs/getting-started/pricing) for more details.

### I'm having trouble signing in

Curling I/O doesn't use passwords.
You can login using a Google (Gmail) account or you can have a login link / code sent to your email address.
[See our login instructions for more details.](/docs/for-curlers/how-do-i-login)

### Can I import our club's existing curlers?

Yes, curling club managers can import curlers from a previous season that aren't already registered with Curling I/O by uploading a CSV file.
CSV files can be exported from any spreadsheet or database program, usually by selecting the "File" menu and selected "Export as" or "Download as" and then selected "CSV".
[Here's a sample Google Sheet of what you'll need to provide.](https://docs.google.com/spreadsheets/d/1-smgG2v8atZySX68hwoP-gaDJGvD0sGl3_GHZ7XTrtk/edit?usp=sharing) The red columns are required.

It's generally not worth the effort though, as curler's are quick to adopt and key in their profiles once you're using Curling I/O.

### Can our club use Curling I/O without online payments (for free)?

Yes. We have a handful of clubs that are using Curling I/O just for offline payments and it doesn't cost them a penny.
Our assumption is that eventually your club will adopt online payments out of convenience for both curling club managers and your curlers.
Starting with Curling I/O for offline payments is a great way for curling club managers to become familiar with the system.

Please keep in mind that we need to manage our support costs for clubs that are using our platform for free, and that you'll need to self-serve as much as possible.
Every support ticket has a cost for us, and our documentation should cover all of your support needs.

### We have complicated pricing and discounts, will Curling I/O support us?

Yes, some of our clubs have extremely complicated discounts and fees, and Curling I/O is very flexible.
However, if you've never codified your club's pricing before, expect to spend some time figuring it out.

Eventually, our hope is that you'll simplify your pricing over time to make life easier for both your curlers and club staff.

### Can our curlers register family members?

Yes, each account (login) can have multiple profiles.
Keep in mind that if you are leveraging our waivers, then the person registering family members must be a legal guardian for it to be valid.
Coaches should NOT be registering their team's curlers as they are not considered a legal guardian that can accept waivers on their behalf.

### One of our members has two or more duplicate curler profiles, how can I fix that?

In the curlers section you can flag profiles as duplicates, and we regularly merge these duplicate profiles.
You only need to flag one of them.

### One of our members paid less than they should have

This can happen when you have discounts that curler's can opt in to, like a "First Time Curler?" or "5 players on team" discount.
You'll find that occasionally one of your members opt in when they shouldn't have.
You have several options to fix this:

1. If payment has not be recorded for the order yet, you're best bet is to [send it back to their cart and have them fix their mistake.](/docs/club-management/orders#sending-an-order-back-to-the-accounts-cart)
2. If the order has already been paid, you could [simply refund the order and have them redo it.](/docs/club-management/orders#refunds) It's generally easiest to refund to [club credits](/docs/club-management/club-credits) so that their previous payment is automatically applied during the repurchase.
3. If the order has already been paid, you could create a product for the difference they owe, [flag it as private](/docs/club-management/products#private), and give them the private URL. We generally don't recommend this method as it creates a burden on your bookkeeping.

### One of our members paid seasonal fees more than once

If one of your members has paid seasonal fees more than once these are the likely causes:

1. They created a second (duplicate) curler profile. This can happen if they login with a different email address at a later date and that email they used is not also assigned to their original curler profile. Curling I/O can't tell that they've already paid their seasonal fees if they aren't using the same curler profile.
2. If it's one of your club fees (and not one of the affiliate fees), double check that you've configured it to be [seasonal per curler (can only be purchased once per season).](/docs/club-management/fees#seasonal-per-curler)


### What is an Account?

An account is just an email address and possibly a name to go along with it.
When someone first logs in (signs up) to Curling I/O, an account is created for them with the email address they logged in with.
Essentially you can think of an account as a **login**.

Every account may own one or more curler profiles.
Accounts will also be able to see and register with any curler profile that has a primary or secondary email matching the account's email.

This means that when a curler profile is added to the Curling I/O, it could be shared between mutliple logins.
Some people have and may login with multiple email addresses.

#### Example 1
1. Hurly has two email addresses; hurly-buttons@gmail.com and hurly-rocks@hotmail.com.
2. Hurly logs into Curling I/O with hurly-buttons@gmail.com.
3. Hurly creates a curler profile and enters hurly-rocks@hotmail.com as his secondary email address.
4. Months later Hurly logs back into Curling I/O using his hurly-rocks@hotmail.com email.
5. Curling I/O creates a new account for hurly-rocks@hotmail.com.
6. Hurly goes to register for another league, and still sees and uses the curler profile he created earlier with his other account.

#### Example 2
1. Jane logs into Curling I/O with jane-hack@gmail.com.
2. Jane creates a curler profile for herself and another curler profile for her 17 year old son Jimmy.
3. Her son Jimmy, while a youth curler, has his own email address jimme-hack@gmail.com, and Jane enters that email address into his curler profile.
4. Jane registers herself and her son in a league.
5. Her son Jimmy logs into Curler I/O a month later to register for another league.
6. During registration Jimmy sees and is able to use the curler profile that his mother created for him earlier.


### One of our members registered for the wrong league

Occasionally one of your members registered for the wrong league / product / competition.

A common support request is "How do I move them to the correct league".
You can't just swap the over because the league you want to move them to:

* may have a different price.
* may participate in different discounts.
* may have different associated fees.

While none of the above may be true for specific cases, the system doesn't have a way to know this (this is a feature we may add in the future, but it's pretty complicated).

Depending on the status of the order there two ways to handle this:

If the order has NOT been paid yet, you can simply either delete the order and have them resubmit or you can [send the order back to their cart](/docs/club-management/orders#sending-an-order-back-to-the-accounts-cart).
Keep in mind that sending the order back to their cart is not an option if you were registering them using the club multicart login feature.

However if the league has already been paid for the easiest way to handle this is:

1. Refund the incorrect league to Club Credits. Make sure you only check the box for the league when doing the refund. Also make sure you select Club Credits for the refund.
2. Use the "Login as" feature to login to the curler's account. (ignore this if the order was made with an administrator account, but that should never happen right?)
3. Add the new league to your cart and complete the registration. The club credits that were granted from refunding the old league will cover the cost of the new league.


### Can we sell raffle (50 / 50) tickets on Curling I/O?

You cannot use Curling I/O to process online payments for raffle tickets.
Raffles, like 50 / 50 tickets, are considered a "Restricted Business" that we are not licensed for.
If we find that you are using online payments to sell raffle tickets, your club's ability to process online payments will be disabled immediately.

Canadian based clubs can find the list of "Restricted Businesses" here:
[https://stripe.com/en-ca/restricted-businesses](https://stripe.com/en-ca/restricted-businesses)

U.S. based clubs can find the list of "Restricted Businesses" here:
[https://stripe.com/restricted-businesses](https://stripe.com/restricted-businesses)


### Refund doesn't show up on the curler's statement

Assuming the refund was issued correctly by club staff (to the correct order), there are a couple reasons it may not show up on the curler's credit card statement.

1. Refunds can take up to 7 days to process. Even then, there could be a further one or two day delay before the curler's bank reflects the refund. If the refund was made recently, please ask them to wait until at least 7 days have passed before contacting support.
2. Often if a partial refund is made quickly after the initial payment, it's common that the curler's bank will reflect the refund as a reduced payment by subtracting the refund amount from the original payment. For example, a payment of $200 is made followed by a partial refund of $100 within a few days, the eventual credit card statement may show a total payment of $100 instead of both a payment of $200 and a refund of $100, resulting in the same outcome. Please ask them to double check the amount of initial transaction / payment.


### Can we shift our season start date from July 1st?

Yes, but there are a few things to keep in mind:

- The season start date must be on the first day of the month. E.g. July 1st
- You will want to pick and maintain the same season start date. Switching this around more than once may create some overlap in your seasonal fees (where curlers paid twice or not at all).
- The season start date will also impact the age restrictions for your leagues, fees, and discounts. The season start and age cutoff dates are one and the same. If you have a league that requires a minimum age of 13, then it will require age 13 before the season starts (July 1st).
- You may end up collecting inaccurate affiliate fees. Sometimes your membership association fees will change between seasons, and you could be taking registrations (and collecting fees) before your MA has had a chance to update them. Curling I/O cannot assume responsibility for inaccurate fees, so you may want to check with your membership association before changing your season start date.

You can change your season start date in the [club settings section](/docs/club-management/settings#season-starts-in).
