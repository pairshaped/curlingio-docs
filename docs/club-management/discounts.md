---
id: discounts
title: Discounts
slug: /club-management/discounts
---
import useBaseUrl from '@docusaurus/useBaseUrl';

You can create discounts to reduce the cost of your leagues, competitions, and products when curler's match criteria that you specify.

For example, you can give curler's a 20% discount on their second league, then 50% off on their third league, or a Junior discount to curlers under the age of 18.

There is a ton of flexibility with discounts, but keep in mind that having an excessive number of discounts, can easily make it very hard to verify who should be receiving one.

## Walkthrough Video

The following video will take you, the curling club manager, through the basics of setting up your discounts.
If you're new to Curling I/O, it's worthwhile to watch this before wading through the rest of our documentation.

<div className="text--center videoWrapper">
  <iframe width="100%" src="https://www.youtube.com/embed/3h7oZzkYfkM" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
</div>

## Finding your Discounts

Within your admin area, click on the **Club** dropdown menu in the top bar and then click on **Discounts**.

![Navigation](/img/docs/club-management/discounts/navigation.png)

To create a discount click on the **New Discount** button.

![New](/img/docs/club-management/discounts/new.png)

To update an existing discount, click the **Edit** link next to it.

![Edit](/img/docs/club-management/shared/edit.png)


## The Basics


### Naming your Discount

This is the name that will be displayed to your members when they see potential discounts during registration and also when a discount is applied.

Discounts can and should be reused between seasons, so there's no need to include a year or season in the name unless you specifically do not want to reuse it next year.


### Percent or Fixed Amount

You can choose to make your discount a percentage of the amount of the items being discounted (league, product, or competition), or you can make it a fixed amount.
Usually percentage based discounts are easier to manage, for example if you were running a multiple league discount, but your league had different prices.

You can't specify both percent and fixed amount.

### Seasonal per Curler

You can restrict the discount so that it can't be applied more than once per curler per season.

For example, you may want a _"First Time Curler"_ that can only be received the first time the curler purchases a league this season, and not to be applied again if they purchase a second league.


### Active

If you need to disable a discount temporarily you can uncheck the **Active** box.
When a discount is disabled it cannot be added to leagues, competitions, or products, and will not be applied to your members for anything it is already associated to.


## Criteria

You can (and usually would) specify one or more criteria that the curler must meet in order for the discount to be applied.

This allows you to have different discounts apply to your leagues depending on the age and / or number of leagues being purchased for the curler, etc.
For example you can have a junior discount based on age, or a discount that is only applied if 2 or more leagues are being purchased within the same season for the same curler.

Criteria are cumulative, so if both min AND max ages are specified then both of these conditions must be met by the curler for the discount to be applied.

### Min and Max Age

These are fairly self-explanatory. If you wanted to apply a junior's discount to curlers 17 and under then you would enter 17 into the Max age field. Keep in mind that age criteria is inclusive in that it's including the age specified.
Age criteria is evaluated as of July 1st in the current season. If a curler is 18 before July 1st then they wouldn't receive a 17 and under discount.

### Number of Leagues

This allows you to discount the 2nd, 3rd, 4th, 5th + league that a curler purchases during the current season.

You can even have _stepping_ discounts, where for example the 2nd league is 20% off, the 3rd league is 50% off, and the 4th or higher leagues are 100% off (making them free).

Note, that if your leagues have different prices and the member completes a purchase of a cheaper league, that cheaper league will not count towards a discount on more expensive leagues.
For example, if you offer an Open League for $100 and a Men's League for $200, in order to receive a two league discount I would either need to purchase both of these leagues at the same time, or I would need to purchase the Men's (more expensive) league first.
The system will not make a retroactive discount to the cheaper league.

### Matching a Custom Field Value

This is an extremely flexible discount. It allows you to check if the value entered into one of the club's own custom fields matches what the curler entered or selected.

A common use for this would be a _"First Time Curler"_ discount. You would have a custom field defined, asking your curlers if this is their first time curling with a dropdown to choose "Yes", or "No".
Then you can apply a discount based on them selecting "Yes" for this custom field.

Another example would be a coupon code. You could have a free text custom field asking for a coupon code, and if it matches the value you specify here they get a discount.

### Fee

Allows you to give a discount to curlers who have already paid, or are about to pay a fee.
For example, to offer a discount to members on non-member leagues or products.

### Product

Allows you to give a discount to curlers who have already paid, or are about to pay for a product.
For example you can offer an Unlimited Leagues addon product in your leagues and discount their price by 100% if selected.

### Exclusive of Other Discount

Prevent a curler from receiving the discount if they are already receiving the discount selected here.
You don't want to exclude from both discounts however.
The higher discount is typically the one you would select here.

### Exclusive of All Other Discounts

If the curler is receiving any other discount for the item being discounted, they won't receive this one.
If all discounts they are receiving are exclusive, then the greatest discount among them will be applied.

This is useful if you have a large discount that you never want to stack regardless of whether the curler meets the criteria for any other.

## Troubleshooting Discounts

We highly recommend keeping your discounts as simple as possible, so you know at a glance who will be receiving a discount and under what conditions.

For those unavoidably complex setups, here are some pointers:

1. Make sure your discount is associated with the item that is to be discounted. If you're discounting leagues, then the discount must be associated with each of those leagues. If you are discounting a fee, then the discount must be associated with that fee. You cannot associate a discount to one item and expect it to apply to another it hasn't been associated with.
2. Make sure that if your discount eligibility is based on a custom field value, that the custom field is also associated everywhere your discount is associated. If you do not, then the question which the discount is based on will never be asked, and no one will receive the discount. For example, if I want to ask curlers if it's their first season and give them a 5% discount on their membership fee if they are, then I need to associate both the custom field to ask the question and the discount itself to the membership fee.
3. If you are using a custom field based discount, you usually do not want to use a checkbox. You would instead use a dropdown with "Yes, No" values so that you can make this custom field required, and to also avoid accidental selection by your curlers.
4. For multiple league discounts, every league that will participate in the discount needs to have it associated.
5. If a discount is seasonal per curler (should only be received once per season), then the item being discounted must require a curler profile. Otherwise there's no way for the system to know if a curler has already received it.
6. Multi league discounts are based on curler profile (not account) and will only work if the leagues to be discounted are requiring a curler profile.
7. Discounts are additive based on the full price of the item being discounted. Discounts do not compound (you never discount a previously discounted price). For example if I apply two 10% discounts to a league that costs $100, then my total potential discounts are $20.
8. In general you should avoid mixing both fixed price and percentage based discounts, or it can be very hard to reason about.

## Deleting Discounts

To remove a discount, click the **Delete** link next to it.

![Delete](/img/docs/club-management/shared/delete.png)
