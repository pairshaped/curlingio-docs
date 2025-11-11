---
id: products
title: Products and Addons
slug: /club-management/products
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Walkthrough Video

The following video will take you, the curling club manager, through the basics of creating a product or addon.
If you're new to Curling IO, it's worthwhile to watch this before wading through the rest of our documentation.

<div className="text--center videoWrapper">
  <iframe width="100%" src="https://www.youtube.com/embed/Y5VX4pQCot4" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
</div>


## Finding your Products

Within your admin area, click on **Products** in the top bar.

![Navigation](/img/docs/club-management/products/navigation.png)

To create a product, click the **New Product** button.

![New](/img/docs/club-management/products/new.png)

To update an existing product, click the **Edit** link next to it.

![Edit](/img/docs/club-management/shared/edit.png)

To copy an existing product, click the **Copy** link next to it.

![Copy](/img/docs/club-management/shared/copy.png)


## Filling in the Form


### Naming your Product

This is the name that will be displayed to your members when they come to purchase it on Curling IO.

Products don't have a start or end date, so you typical will reuse the same products between seasons.
If a product is only available for a specific season, then you should include the year or season in the name.


### Product Type

This is where you can determine if the product is meant to be sold standalone (can be purchase without purchasing anything else), an addon (can only be purchased as part of a league or competition), or both (standalone and addon).

Standalone products will show up on your product listing page.

Addon products can be added to leagues and competitions similar to fees. A typical use of an addon product would be a locker.


### Active

If you need to disable a product temporarily you can uncheck the **Active** box.
When a product is disabled it cannot be added to leagues, competitions, or products as an addon, and will not be charged to your members for anything it is already associated to.
It will also no longer appear on your product listings page.


### Quantity

You can limit the quantity / inventory for a product.
This quantity limit is for the lifetime of the product (not seasonal).
Once the quantity limit is reached, the product will still show up on your product listings page, but will show as **Sold Out**.

Leave this blank if you don't want to limit the quantity of sales for a product.


### Requiring a Curler Profile

When you require a curler profile you are forcing registrations to be **individual** only.

It's required for the system to apply seasonal membership and affiliate fees, and multiple league discounts.
The system needs to know who (curler profile) has paid their fees already for the season so that they aren't charged again in future registrations.


### Seasonal per curler

If you are requiring a curler profile for the product, then you can also specify, similar to a fee or a league, that this product can only be purchased one per curler per season.

This is handy to minimize errors from curlers who might accidentally try to purchase the same product more than once, and serves the double purpose of limiting purchases of a scarce product.

If your product is something from the pro shop that curler should be able to purchase as many times as they like, you would leave this unchecked.
It's unlikely you'd even require a curler profile for products like that.


### Lifetime per curler

This is for a product that should never be purchased more than once per curler. Usefull if you are selling a lifetime membership or similar product.

Checking this box also means that discounts based on it's purchase can run across multiple seasons.


### Pricing & Tax

When you set the pricing for your product, we highly recommend breaking out the tax, both for transparency to your members, but also to make it easier for your bookkeeping.

There is a handy tax calculator which will show you what your total with tax will be in case you want to untangle taxes from your existing pricing.

![Tax Calculator](/img/docs/club-management/shared/tax-calculator.png)


### Private

You can check this box to make a product available **only** to those that have been given a unique URL to click.
This is typically used to offer early access to a product for returning members.

If you check this box then once you save the product, a unique URL will be generated for it.
You can copy this unique URL and send it to the subset of curlers you want to be able to purchase it.
To find this URL simply click on the name of the product on the administrator product listing page.


### Notification email

**[This is a Premium Only Feature](/docs/getting-started/premium)**

If you'd like someone to be notified every time the product is purchased you can enter their email address here.
You can enter more than one email address separated by commas.

We don't perform any email validations on this field, so please make sure you don't have a typo or a defunct email address or they won't receive the notifications.

We also don't recommend using this feature for fellow managers since they will have access to the same information from within the admin area, and sending notification emails get spammy.


### Summary & Description

When you enter a summary, it will show up on the product listing page when members come to Curling IO.

The description shows up when your members click on the name of the product and also when they fill in required information for it.
Keep in mind that member's may just add the product to their cart without clicking on it's name.

### Required Reading

You can enter some text that your curlers are guaranteed to see before they can complete their purchase of the product. Just leave this blank to avoid this step.

We recommend you use this sparingly as it adds another step (friction) to product purchases for your users.


## Accounting Codes

If you've enabled accounting in your [Club Settings](/docs/club-management/settings#accounting), you'll see an **Accounting Codes** section when creating or editing a product.

Most clubs only use the default account code set in Club Settings. However, you can optionally add Class and Project codes here to differentiate between product categories (e.g., merchandise vs. rentals) or track fundraising campaigns.

**For complete details and examples, see the [Accounting Codes Guide](/docs/accounting/accounting-codes).**


## Assigning Fees

All fees that should be added to the cost of the product can be added here.
Keep in mind that just creating a fee doesn't not automatically associate it to your product.
You need to specify which fees are relevant for each product, as this will almost always vary between products.

![Addons and Fees](/img/docs/club-management/shared/addons-and-fees.png)

Examples of fees are your provincial and national affiliate fees, but also any membership or capital improvement fees you may have at the club.

Please note, that you cannot add fees to a product that has a type of *both* or *addon* since this could cause inception, and we may start questioning whether we exist in _the real!_

[You can find information about fees here.](/docs/club-management/fees)


## Adding Custom Fields

Custom fields allow you to ask your curlers questions specific to your club that we haven't thought of during registration.

Keep in mind that for individual registration where you require a curler profile, you shouldn't need to add custom fields for general curler data as this will already be associated with the registration.

Like fees, keep in mind that custom fields are not automatically added to all of your products.
You need to specify which custom fields are relevant for each product, as this will often vary.

![Custom Fields](/img/docs/club-management/shared/custom-fields.png)

[You can find information about custom fields here.](/docs/club-management/custom-fields)


## Assigning Discounts

You can apply discounts to your products that depend on the registrant meeting specific criteria.
Keep in mind that just creating a discount doesn't not automatically associate it to your products.
You need to specify which discounts are relevant for each product, as this will almost always vary between products.

[You can find information about discounts here.](/docs/club-management/discounts)


## Who Purchased a Product?

You can click the **Purchases** link next to one of your existing products. It will take you to our reports session filtered by the product.
This will show you all of the purchases for it.

![Purchased](/img/docs/club-management/shared/purchased.png)
