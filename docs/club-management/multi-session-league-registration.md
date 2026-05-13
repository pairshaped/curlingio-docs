---
id: multi-session-league-registration
title: Multi-Session League Registration
slug: /club-management/multi-session-league-registration
---

Some leagues have several ways to participate. Common examples include fall or winter sessions, Tuesday or Thursday draws, or a full-season option.

The best setup depends on how you will manage the curling after registration closes. Start with the league structure first, then decide how pricing and discounts should work.

> **Using a chatbot?** Give it the link to this page, or to `https://curling.io/llms.txt`, and ask it for help as if it were a Curling IO support person. Tell it what kind of league you are setting up, how members can participate, whether you need separate teams or standings, and whether there are discounts for playing more than one session. For example: "I'm trying to decide how our Fall and Winter leagues should be split up for registration. Here's what our curlers used to do: they could play Fall, Winter, or both. Each session has new standings, and we may offer a discount for playing both. What are the setup options, what are the tradeoffs, and what questions should I answer before choosing?"

## Start With Operations

Ask these questions before choosing a setup:

- Will each option have different teams?
- Will each option have different standings, results, or round robins?
- Will each option need its own draw schedule?
- Will each option need its own capacity or waitlist?
- Do curlers get a discount for registering in more than one session or draw?

If the answer is yes to the first few questions, those options are usually separate leagues.

For half-season leagues, the second half is often a reset with new teams, standings, and draws. In that case, a separate league for each half is usually the cleanest setup.

## Recommended Setup: Separate Leagues

Create one league for each operational unit.

For example, a Senior Men's league with Tuesday or Thursday play and first or second half registration could be set up as:

- Senior Men's Tuesday First Half
- Senior Men's Tuesday Second Half
- Senior Men's Thursday First Half
- Senior Men's Thursday Second Half

This keeps the registration setup aligned with how the leagues will be managed. Rosters, teams, standings, draw schedules, waitlists, registration reports, and revenue reports all stay clear.

Curlers can still register for more than one league in the same checkout. They can add the leagues they want to their cart, then pay once.

### Help Members Find Related Leagues

Tags and Recommendation Keywords help make separate leagues easier for members.

Use tags to group related leagues on the registration page.

Use **Recommendation Keywords** to suggest related leagues after a member fills out their registration fields. This feature was added to help with multi-session league registration.

For example:

- Add `senior-men, tuesday` to both Tuesday half-season leagues.
- Add `senior-men, thursday` to both Thursday half-season leagues.
- Add `senior-men` to all four leagues if you want them to recommend each other.

If someone registers for Tuesday First Half, Curling IO can recommend Tuesday Second Half before they checkout.

## Discounts For Playing More

If you want curlers to save when they register for more than one league, use multi-item discounts.

For example:

- 10% off when a curler registers for both halves.
- 10% off when a curler registers for both draws.
- A larger discount when a curler registers for several related leagues.

Multi-item discounts work best when each thing being purchased is its own league, program, product, or fee. The discount can count the items in the curler's cart and apply the discount before checkout.

For league discounts, require a curler profile. The system needs to know which curler is receiving the discount.

Multi-item discounts can also use normal discount criteria, including matching a custom field value. This is useful when only some selected options should count toward a discount.

## Option: One League With Paid Add-Ons

You can create one `$0` parent league and add paid add-ons for each option.

For example:

- Tuesday First Half
- Tuesday Second Half
- Thursday First Half
- Thursday Second Half

This can work well for purchase reporting because each add-on has its own price and report.

The tradeoff is league management. Add-ons are purchase items. They do not have their own teams, standings, draw schedules, or league waitlists. All of the curling operations must happen inside the parent league, often using pools or separate round robins.

Also be careful with the registration flow. Add-ons are checkboxes, so members may miss them or choose the wrong one. Review registrations after opening if you use this setup.

## Option: One League With Custom Fields And Discounts

You can create one league with custom fields such as:

- Season: First Half, Second Half, Both
- Day: Tuesday, Thursday, Both

Then use discounts to adjust the price based on the selected values.

This can give more pricing flexibility, especially when the club wants special savings for playing more. It is usually weaker for accounting and registration reports because the selected option is stored in fields and discounts rather than separate league or add-on line items.

This setup is also a poor fit when the choices have their own teams, standings, or draw schedules.

Discounts match one custom field and one exact value. If a single dropdown lists every possible combination, such as First Half Tuesday or Full Season Both, each priced combination may need its own discount. Two dropdowns, such as Season and Day, can be easier when the pricing rules are simple enough for discounts to stack.

## Important System Details

These details are useful when comparing setup options or asking a chatbot for help.

### A league has one base price

A league has one registration price. It does not have built-in price variants like "Fall only", "Winter only", and "Both".

To represent different prices, use one of these patterns:

- separate leagues with separate prices
- paid add-ons
- discounts based on custom fields or multiple item purchases

### Add-ons are purchase items, not leagues

Paid add-ons can be excellent for purchase reporting because each add-on creates its own line item.

But add-ons do not become leagues. They do not get separate teams, standings, draw schedules, or league waitlists. If you use add-ons for league choices, all play management still happens inside the parent league.

Optional add-ons are shown as checkboxes. Required add-ons are added automatically and cannot be unchecked.

### Custom field discounts match one value

A discount can match one custom field and one exact value.

For example:

- `Season = Fall`
- `Season = Winter`
- `Season = Both`

If you need pricing for every possible combination, a single dropdown with all combinations may require one discount per priced value.

Two dropdowns can reduce the number of discounts if the pricing rules are simple enough for discounts to stack. For example, one discount can match `Season = Fall`, while another discount matches `Day = Tuesday`.

### Discounts stack unless you prevent it

Discounts are additive. If a curler qualifies for two discounts, both can apply unless the discounts are configured to be exclusive.

This is useful when "playing more" should create layered savings, but it can also produce the wrong total if the pricing rules are not clear.

### Multi-item discounts count purchases for one curler

Multi-item discounts count qualifying items for the same curler in the same season. They can include items already purchased and items in the current cart.

This works well when a curler registers for multiple related leagues in the same checkout.

For percentage-based multi-item discounts, the system sorts qualifying items by price before deciding which item receives the discount. This helps avoid discounting the most expensive item first.

Multi-item discounts need curler profiles. If the league does not require a curler profile, the system cannot know which curler is buying multiple items.

### Recommendations happen before checkout

Recommendation Keywords can suggest related leagues, programs, or products after a member fills out an item in their cart.

They do not appear after purchase. They are meant to help members add related items before checkout, such as adding the Winter session after registering for Fall.

Recommendations only work when related items have matching keywords, are available for registration, and match the member's eligibility.

### Reporting depends on where the choice lives

Separate leagues give the clearest operational reports because each league has its own registrations, teams, standings, draws, waitlists, and revenue.

Paid add-ons give clear purchase reports, but not separate league operations.

Custom fields preserve the member's selection in exports, but accounting and registration reports are less direct because the choice is stored as form data and discounts rather than as its own item.

## Choosing Between The Options

Use separate leagues when each option is a real league operationally.

Use a `$0` league with paid add-ons when you want one registration wrapper and each option should still have its own purchase report.

Use custom fields and discounts when pricing rules matter more than separate league operations.

Before you decide, write down the prices and any discounts for playing more than one session or draw. Pricing rules can change the best setup.
