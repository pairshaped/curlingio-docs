---
id: best-practices
title: Best Practices
slug: /getting-started/best-practices
---

This document is for curling club managers that are new to Curling I/O or club's who's pricing, fees, or discounts have undergone significant changes for the next season.

If you are brand new to Curling I/O then your best bet is to start with our [tutorial videos here](https://www.youtube.com/playlist?list=PLewhXbqjD6VFr-WlpNC1CGEvF9UV33jLb).
Making the up front time investment to understand your curler registration system will save you a ton of time and headaches down the road once you've started taking registrations.

We'll start by outlining some general best practices with the reasoning behind them, and then go through specific examples we've seen clubs struggle with.


## Individual League Registrations

We highly recommend that your members register for your leagues as individuals rather than as a team.
By default league registrations are individual.
The "Requires curler profile" checkbox is what determines this.
You can uncheck this box to accept team registrations, but this is almost always a mistake.
If you do uncheck this box, then it is important you don't have any seasonal fees or addons that require a curler profile associated with the league.
This includes affiliate fees, which we cannot track for you unless you are taking individual registrations.

Individual registration has multiple benefits:

1. You can accurately capture membership and affiliation fees per member per season. Curling I/O will remember which fees a curler has already paid each season and they won't be charged more than once. Alternatively, with team registrations, if these fees are embedded within team prices, you will *double dip* when one of your members is in multiple leagues.
2. Addons like lockers can be associated with individual curlers when they register for their leagues.
3. You can still gather team and position information simply by asking for the team or skip name and their position. Curling I/O will later make team recommendations based on these fields if you are using our league management features.
4. Through the use of discounts and custom fields you can still offer individual discounts based on team size. For example, you can ask if it's a 5 person team and offer a 20% off discount for each individual who selects it.


### Team Size Discounts

If your pricing has been historically team based, you'll want to offer a percentage discount to members who play on a 5 or 6 player team.
The easiest way to do this is to simply ask them using a custom field.

1. Create a new custom field for "Number of players on team".
2. Select "Dropdown" as the type of field.
3. Enter "Four, Five, Six" for the options.
4. Create a 5 player 20% discount, using the custom field criteria. Select the custom field you created in the drop down and enter "Five" as the value.
5. Create a 6 player 33.33% discount, using the custom field criteria. Select the custom field you created in the drop down and enter "Six" as the value.
6. For each of the relevant leagues add the "Number of players on team" to the custom fields and make it required. This will force every member to select Four, Five, or Six when they register.
7. For each of the relevant leagues add both the 5 player and the 6 player discount.

Now when your members register for a league they will be asked how many players are on their team.
If they select "Five" then they will receive a 20% discount.
If all 5 members of the team do this, they will together pay the total team price for the league.


## Avoid Complex Discount Combinations

We know that sometimes this can't be helped, but we recommend staying away from complicated discount schemes.
If you can't quickly grasp your discount logic without using a spreadsheet, then your curlers probably can't either.

Discounts can be a great way to get new members and encourage more involvement through multiple leagues, but only if your members realize how they may qualify.


## Make Sure Fees are Required

When assigning your seasonal fees to your leagues or products, make sure you mark them as required.
Curling I/O keeps track of which curlers have paid which seasonal fees and won't charge them again within the same season.

If you do not mark them as required, then you will miss collecting a lot of fees because the member didn't check the box to pay these fees.


## Assign Fees, Addons, and Discounts to Leagues

Just creating the fee, addon, or discount doesn't actually affect anything until you assign it to the appropriate leagues, products, or competitions.

If your "Monday Night Open" should have a Junior Discount of 50% for members 17 and under, then you need to make sure you associate this discount with it.


## Assign Custom Fields and Discounts

If you have a discount who's criteria relies on the answer to a custom field, then you need to associate both the custom field and the discount to the item being discounted.

For example if you want to offer a "New Curler" discount for your "Monday Night Open" league:

1. Create a "New Curler?" custom field dropdown to ask if they are a new curler with "Yes, No" options.
2. Create a "New Curler" discount with the criteria that they answer "Yes" to my "New Curler?" custom field.
3. Assign both the "New Curler?" custom field and the "New Curler" discount to the "Monday Night Open" league.

Now when your members register for this league and answer "Yes" that they are a new curler, they will receive the new curler discount.

We also recommend using a dropdown instead of a checkbox for custom fields that are used by a discount's criteria.
The reason for this is that you can make a dropdown required to force your members to see it.
If you make a checkbox required it means that everyone must check it off (and everyone then gets the discount).
If you make a checkbox optional and there are no other required fields for the league or product, then your member's may never even see it because they aren't forced to during registration.
With a dropdown you can make it required without automatically giving everyone the discount, but are making sure they will all see it.


## Don't spam yourself with registration emails

Your leagues, competitions, and products have a "Notification email" field. This should only be used to send emails to people who aren't also administrators, like an outside dedicated league manager or someone running a commercial league.
If you are an administrator you already have access to all of your recent orders from the [Orders Screen](/docs/club-management/orders).
If you're sending thousands of emails to your club's email address and someone with access happens to get annoyed and marks any of them as spam, the system will immediately stop sending you any emails, including other potentially important emails.


## Use a separate non-administrator email for registration nights

Ideally all of your members are registering themselves using their own email address, but for for those who are not able to create / login to their own email address (even with your help), we recommend creating a separate registration specific account (email) to hold these curler profiles and orders.
For example, signing up for a free gmail account like "club-name-registrations@gmail.com", and using that to login a laptop or tablet as a sort of kiosk at the club for in-person registrations.

This not only keeps these curler profiles organized within one dedicated registration-only account, it's also more secure for a public computer since this account won't need or have admin access.

If you want to be able to handle multiple registrations at the same time on this registration account (multiple kiosks), please let us know and we can flag it as a "multicart" account to avoid having these multiple instances of the login from clobbering each other's cart.


## Test Your Registrations

Make sure that you test each possible registration scenario before you open up registration to your members.
This can save you a ton of headaches in the long run trying to fix mistakes and refund payments.

Curling I/O has a lot of flexibility, especially when it comes to discounts.
This is necessary to support all the different registration methods that different clubs have.
Complex setups can result in unexpected outcomes though, so the more complicated your setup, the more testing you should do.

You can test your registrations at any time and even submit the orders. You can then delete these test orders when you're done.

## Ask us to Review your Setup

If this is your first time your club is using Curling I/O, and you've just finished setting everything up, feel free to ask us to review your setup.

We love being able to provide this high level of support free of charge, so we ask that you read the documentation and review our tutorial videos first.

DO NOT LEAVE THIS UNTIL THE DAY BEFORE REGISTRATION!

Make sure you're set up well in advance of opening registrations and send us a support request to take a look at least 2 weeks before you open registration.

