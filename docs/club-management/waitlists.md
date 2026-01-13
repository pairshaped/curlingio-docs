---
id: waitlists
title: Waitlists
slug: /club-management/waitlists
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Overview

**[This is a Premium Only Feature](/docs/getting-started/premium)**

With Curling IO you can take in waitlist registrations once a league, competition, or product has been sold out.


## Enabling Waitlists

When you are creating / editing a league, competition, or product you will have the option of enabling a "Waitlist" for it.

![Waitlist Enabled](/img/docs/club-management/waitlists/waitlist-enabled.png)

Waitlists work in conjunction with inventory, which is the number of spots available for a league / competition, or quantity for a product.
Once the inventory has been exhausted your members will be able to register for the waitlist (if enabled).
You can even set the number of spots / quantity to 0 to limit registrations to waitlisting only.


## Waitlist Registration

Member's will see a "Waitlist" option for any leagues, competitions, or products that have this feature enabled and are sold out.

![Add me to the waitlist](/img/docs/club-management/waitlists/add-me-to-the-waitlist.png)

In order to register for a waitlist, the member must first be logged in.
They must provide a name, and optionally may provide a phone number and notes for club staff.
They are not required to have or assign a curler profile for waitlist registrations.

Once the member has submitted the waitlist registration they will be taken to a screen listing all of their outstanding waitlist registrations.
They will also receive an email confirming that they were added to the waitlist.

Member's can only submit multiple waitlist registrations per specific league, competition, or product as long as a different name is used.
For example, they can register themself and their children for the same league's waitlist.


## Waitlist Approval

Club staff can view a list of waitlist registration for a specific league, competition, or product. There will be a new "Waitlist" tab when enabled.

![Waitlist Navigation](/img/docs/club-management/waitlists/waitlist-navigation.png)

On this screen, staff can approve or cancel individual waitlist registrations.
This will trigger an email to the member alerting them to the approval or cancellation with follow up instructions.

![Waitlist Approval](/img/docs/club-management/waitlists/waitlist-approval.png)

Once a member has been approved, they can register for the waitlisted league, competition, or product, ignoring that the inventory (spots / quantity) has been exhausted.
Upon registration the waitlist registration is considered "claimed".

![Approved Waitlists](/img/docs/club-management/waitlists/approved-waitlists.png)

### Important: Waitlist Approvals Grant Exactly One Extra Slot

**One approval = one registration.** When you approve a waitlist entry, the member receives permission to register for exactly one spot, even if the event is sold out. This prevents overselling and ensures fair allocation.

#### How It Works

- A member with an approved waitlist entry can add exactly **one** of that item to their cart
- If they attempt to add multiple quantities, the system automatically removes excess items at checkout
- They'll see an error message: "Some items in your cart exceeded available inventory and were adjusted"
- This protection maintains accurate capacity limits

#### Example

Your league has 20 spots and is currently full (20/20):

1. You approve a member from the waitlist
2. That member can now register, becoming the 21st participant
3. If they try to add 2 registrations to their cart, the system automatically reduces it to 1
4. The capacity stays at 21/20 (one approved waitlist member)

#### Why This Matters

- **Fair allocation**: Each approval grants one opportunity, ensuring equity among waitlisted members
- **Accurate capacity**: Prevents a single approval from being used for unlimited registrations
- **Prevents abuse**: Members cannot exploit their approval to register multiple times

** IMPORTANT: Waitlists are tied to an account, so members MUST login with the same account (email address) to access their waitlist.

If you approve a waitlisted member and they report that they are unable to register, please verify that they logged in with the same email address.

## Waitlist Cancellation

Club staff, and the registering member, can cancel (remove) a waitlist registration at any time before it is claimed.

The member is sent an email notifying them of cancellation.
