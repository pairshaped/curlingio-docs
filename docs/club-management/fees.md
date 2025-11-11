---

id: fees  
title: Fees  
slug: /club-management/fees
---
import useBaseUrl from '@docusaurus/useBaseUrl';

You can set up membership and capital improvement fees for your club.

Most fees are seasonal, but they aren't required to be.
For example a Competitor Card Fee for provincial competitions is typically not a seasonal fee and can therefore be purchased multiple times per season.

Fees are not automatically associated with your leagues, competitions, and products.
They must be associated explicitly to each league, competition, and product where they will be applied.
You do this by editing the league, competition, or product and adding the relevant fees in the **Addons and Fees** section.

You will see any affiliate fees you are inheriting from your membership association here.
Like the Curling Canada fee and the relevant membership association fee.
You cannot edit or delete these inherited fees, but like all other fees, they are not automatically associated with your leagues, products, or competitions, and must be explicitly assigned.


## Finding your Fees

Within your admin area, click on the **Club** dropdown menu in the top bar and then click on **Fees**.

![Navigation](/img/docs/club-management/fees/navigation.png)

To create a fee click on the **New Fee** button.

![New](/img/docs/club-management/fees/new.png)

To update an existing fee, click the **Edit** link next to it.

![Edit](/img/docs/club-management/shared/edit.png)

## The Basics


### Naming your Fee

This is the name that will be displayed to your members when they come to register on Curling IO.

Fees can and should be reused between seasons, so there's no need to include a year or season in the name unless you specifically do not want to reuse it next year.


### Pricing & Tax

When you set the pricing for your fee, we highly recommend breaking out the tax, both for transparency to your members, but also to make it easier for your bookkeeping.

There is a handy tax calculator which will show you what your total with tax will be in case you want to untangle taxes from your existing pricing.

![Tax Calculator](/img/docs/club-management/shared/tax-calculator.png)


### Requiring a Curler Profile

When you require a curler profile you are forcing the fee to only be applied for **individual** registrations.
You'll want to check this box for membership type fees.
This is checked by default for new fees.

If the _requires a curler profile_ option is selected you can also specify whether or not the fee is seasonal per curler.
By checking the seasonal per curler box you are ensuring that the curler won't be asked to purchase this fee more than once in a given season.
This is checked by default for new fees.

### Seasonal per curler

You can restrict the fee so that it can't be paid more than once per curler per season. You must require a curler profile as well for this to work.

If, however, the fee should be paid each time they register (for a league / product / competition that includes the fee) then make sure this is unchecked.

This is checked by default since most fees are seasonal.

### Active

If you need to disable a fee temporarily you can uncheck the **Active** box.
When a fee is disabled it cannot be added to leagues, competitions, or products, and will not be charged to your members for anything it is already associated to.


## Criteria

Criteria determines how and when the fee will be applied.
For example an adults only fee would have a min age requirement prevent it from being added when a youth curler is registering.

Criteria are cumulative, meaning that if you have multiple criteria set, they must all evaluate to true in order for the fee to be applied.


### Min and Max Age

You can restrict a fee to specific ages.
The age restrictions are inclusive, meaning that entering a min age of "18" will include 18 year olds.
Age restrictions use your [current season start date](/docs/club-management/settings#season-start) as the cutoff (defaulting to July 1st). So if a curler is not 18 or older on the current season's start then they will not be asked to pay a fee with a min age of 18.


### Days after open

The days after open criteria is how you would implement a *Late Fee*.

For example, a value of 30 means that if someone registers for a league implementing this fee, they will be required to pay the fee if they register 30 or more days after registration opened.


## Accounting Codes

If you've enabled accounting in your [Club Settings](/docs/club-management/settings#accounting), you'll see an **Accounting Codes** section when creating or editing a fee.

Most clubs only use the default account code set in Club Settings. However, you can optionally add Class and Project codes here to differentiate between fee types (e.g., membership vs. capital improvement) or track by age group.

**For complete details and examples, see the [Accounting Codes Guide](/docs/accounting/accounting-codes).**


## Adding Custom Fields

Custom fields allow you to ask your curlers questions specific to your club that we haven't thought of during registration.

Keep in mind that for individual registration where you require a curler profile, you shouldn't need to add custom fields for general curler data as this will already be associated with the registration.

![Custom Fields](/img/docs/club-management/shared/custom-fields.png)


## Assigning Discounts

You can apply discounts to your fees that depend on the registrant meeting specific criteria.

![Assigning Discounts](/img/docs/club-management/leagues/discounts.png)

The criteria is extremely flexible, and more details and examples can be found in the [discounts section.](/docs/club-management/discounts)


## Who Purchased a Fee?

You can click the **Purchases** link next to one of your fees. It will take you to our reports session filtered by the fee.
This will show you all of the registrations for it.

![Purchased](/img/docs/club-management/shared/purchased.png)


## Deleting Fees

To remove a fee, click the **Delete** link next to it.

![Delete](/img/docs/club-management/shared/delete.png)
