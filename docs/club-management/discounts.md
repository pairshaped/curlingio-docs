---
id: discounts
title: Discounts
slug: /club-management/discounts
---
import useBaseUrl from '@docusaurus/useBaseUrl';

You can create discounts to reduce the cost of your leagues, competitions, and products when curler's match criteria that you specify.

For example, you can give curlers a 20% discount on their second league, then 50% off on their third league, or a Junior discount to curlers under the age of 18.

There is a ton of flexibility with discounts, but keep in mind that having an excessive number of discounts, can easily make it very hard to verify who should be receiving one.

## Walkthrough Video

The following video will take you, the curling club manager, through the basics of setting up your discounts.
If you're new to Curling IO, it's worthwhile to watch this before wading through the rest of our documentation.

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

This allows you to have different discounts apply to your leagues depending on the age and / or number of items being purchased for the curler, etc.
For example you can have a junior discount based on age, or a discount that is only applied if 2 or more items (leagues, programs, fees, or products) are being purchased within the same season for the same curler.

Criteria are cumulative, so if both min AND max ages are specified then both of these conditions must be met by the curler for the discount to be applied.

### Min and Max Age

These are fairly self-explanatory. If you wanted to apply a junior's discount to curlers 17 and under then you would enter 17 into the Max age field. Keep in mind that age criteria is inclusive in that it's including the age specified.
Age criteria uses your club's [age calculation configuration](/docs/club-management/settings#age-cutoff). By default, ages are calculated as of the day before your season starts (e.g., June 30th if your season starts July 1st). So if a curler is 18 based on your club's age calculation date, they wouldn't receive a 17 and under discount.

### Number of Items

This allows you to discount the 2nd, 3rd, 4th, 5th + item that a curler purchases during the current season.

Items can be any combination of leagues, programs, fees, or products that you've assigned to the discount. This gives you great flexibility to create discounts like "Get 20% off the 2nd item" or "Get 50% off the 3rd league."

You can even have _stepping_ discounts, where for example the 2nd item is 20% off, the 3rd item is 50% off, and the 4th or higher items are 100% off (making them free).

**How the discount is applied:**

When a curler qualifies for the discount, only the Nth item receives the discount (based on your discount configuration):

- For **percentage discounts**, the discount applies to cheaper items first. Items are sorted by price (most expensive to least expensive), and the discount is given to the Nth item in that order. This maximizes savings for your curlers.
- For **fixed amount discounts**, the discount applies to items in the order they were purchased (oldest to newest).

**Example:** If you offer a "Get 20% off the 2nd item" discount and a curler purchases a $150 league and a $100 league in the same cart, the $100 league (the cheaper one, which is 2nd when sorted by price) would receive the 20% discount.

**Important:** If your items have different prices and a curler purchases a cheaper item first, then purchases a more expensive item later, they will miss out on the discount at the time of purchase. For example, if you offer a "Get 20% off the 2nd item" discount with a $100 league and a $200 league, the curler would need to either purchase both at the same time, or purchase the $200 league first to receive the discount on their second purchase. The system will not automatically apply a retroactive discount to the cheaper item.

**Retroactive discount alerts:**

To help identify these situations, the system will alert you on your dashboard when curlers purchase items separately and miss out on potential discounts. You can then review these cases and choose to issue refunds or make price adjustments manually as appropriate.

The following video will take you, the curling club manager, on a deep dive into setting up multi-item discounts.

<div className="text--center videoWrapper">
  <iframe width="100%" src="https://www.youtube.com/embed/ZR-Dt_GfB4I" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
</div>

### Team Position

You can discount curlers based on their selected position. This only works with leagues and competitions which are requiring a curler profile and also asking for their position (optional or required).

A common use for this would be to discount an _"Alternate"_ for a team. For example, if you are moving from team based pricing to individual sign up, you might divide the price by 4 and grant alternates a 100% discount.
So what may have cost $800 per team registration may now cost $200 per individual, but free for alternates.

The following video discusses different ways to migrate from team based to individual registrations using discounts like team position.

<div className="text--center videoWrapper">
  <iframe width="100%" src="https://www.youtube.com/embed/Xx6BgBUiKJA" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
</div>

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

### Discount Inclusions

Discount inclusions are useful when you want to limit a discount to only specific curlers.
Usually this is used to provide a grandfathered discount to lifetime or shareholder curlers when you're no longer selling these lifetime or shareholder products (otherwise product based criteria is better).

To access discount inclusions, click the name of the discount from the discounts listing screen and then click the "Discount inclusions" button near the bottom.
Now you can add and remove curlers from its inclusions list.

**Important:** Once you have one or more curlers assigned to a discounts inclusions then no other curlers will qualify for it.
You will need to remove all of the curlers from the inclusions list to make it available to other curlers.


## Troubleshooting Discounts

We highly recommend keeping your discounts as simple as possible, so you know at a glance who will be receiving a discount and under what conditions.

For those unavoidably complex setups, here are some pointers:

1. Make sure your discount is associated with the item that is to be discounted. If you're discounting leagues, then the discount must be associated with each of those leagues. If you are discounting a fee, then the discount must be associated with that fee. You cannot associate a discount to one item and expect it to apply to another it hasn't been associated with.
2. Make sure that if your discount eligibility is based on a custom field value, that the custom field is also associated everywhere your discount is associated. If you do not, then the question which the discount is based on will never be asked, and no one will receive the discount. For example, if I want to ask curlers if it's their first season and give them a 5% discount on their membership fee if they are, then I need to associate both the custom field to ask the question and the discount itself to the membership fee.
3. If you are using a custom field based discount, you usually do not want to use a checkbox. You would instead use a dropdown with "Yes, No" values so that you can make this custom field required, and to also avoid accidental selection by your curlers.
4. For multiple item discounts, every item (league, program, fee, or product) that will participate in the discount needs to have it associated.
5. If a discount is seasonal per curler (should only be received once per season), then the item being discounted must require a curler profile. Otherwise there's no way for the system to know if a curler has already received it.
6. Multi item discounts are based on curler profile (not account) and will only work if the items to be discounted are requiring a curler profile.
7. Discounts are additive based on the full price of the item being discounted. Discounts do not compound (you never discount a previously discounted price). For example if I apply two 10% discounts to a league that costs $100, then my total potential discounts are $20.
8. In general you should avoid mixing both fixed price and percentage based discounts, or it can be very hard to reason about.

## Deleting Discounts

To remove a discount, click the **Delete** link next to it.

![Delete](/img/docs/club-management/shared/delete.png)
