---
id: augmenting-curler-profiles
title: Augmenting Curler Profiles
slug: /advanced/augmenting-curler-profiles
---
import useBaseUrl from '@docusaurus/useBaseUrl';

Sometimes you may want to ask your curler's for some additional information, but only once per season (or lifetime).

** NOTE: This method of capturing additional information should be used sparingly or it will clutter up your reports.

We're going to walk through a contrived example.
Let's say we want to ask each curler what inspired them to take up curling.
We also only ever want to ask our curler's this question once, the very first time they register at the club.

First we'll need to create a custom field to capture the information.

1. Create a new custom field to ask our question.
2. Name it "Inspiration" and give it a descriptive hint.
3. Check the box next to the "Products report" so that we'll be able to see this field in that report.

![Inspiration Custom Field](/img/docs/advanced/augmenting-curler-profiles/custom-field.png)

Next we'll want to create an addon product (or fee) to hold this custom field.

1. Create a new product called "Additional Info".
2. Make sure the Product type is "Add-on".
3. Check the boxes for "Requires a curler profile" and "Lifetime per curler" (if it's a question you want to ask once per season, check that box instead).
4. Leave the price at $0.00.
5. Add our "Inspiration" custom field and make it required.

![Inspiration Addon Product](/img/docs/advanced/augmenting-curler-profiles/product.png)

Next, we want to add our addon as a required custom field to each of our leagues (or products that require a curler profile).

1. Edit each league.
2. Add the "Additional Info" addon to each league, making it required.

![Inspiration Added to League](/img/docs/advanced/augmenting-curler-profiles/league.png)

Now the first time a curler registers at your club they will be asked what inspired them to curler. They will only ever be asked once.

![Inspiration Cart](/img/docs/advanced/augmenting-curler-profiles/cart.png)

Later, when you download your products reports, it will have a column for "Inspiration" along with the other curler information.

At any time you can click the "Purchased" link next to your "Additional Info" product to download this information.
