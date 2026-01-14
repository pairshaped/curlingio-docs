---
id: programs
title: Programs
slug: /club-management/programs
---
import useBaseUrl from '@docusaurus/useBaseUrl';

Programs sit between products and events: they’re purchased like products, but run on specific dates like leagues and competitions.
They’re usually seasonal and do not include draw schedules, teams, or game scoring.

Some examples of programs are:

- Learn 2 Curl sessions
- Curling camps
- Training Seminars
- Volunteer events and lists

## Finding your Programs

Within your admin area, click on **Programs** in the top bar.

![Navigation](/img/docs/club-management/programs/navigation.png)

To create a program, click the New Program button.

![New](/img/docs/club-management/programs/new.png)

To update an existing program, click the **Edit** link next to it.

![Edit](/img/docs/club-management/shared/edit.png)


## Filling in the Form

### Name

This is the name shown to members. Because programs have start and end dates, the same program name may be reused in future seasons, but many clubs include the season or year in the name for clarity.

### Start & End Dates

When your program runs. These aren’t to be confused with when registration opens and closes.

### Open & Close Dates

Specify open and close dates to control when members can register or purchase.
Before the open date, members will see when registration opens. After the close date, members will see that registration is closed.
 
### Active

If you need to disable a program temporarily you can uncheck the **Active** box. When a program is disabled it cannot be seen or purchased by your members.

### Pricing & Tax

Set a price and select applicable taxes. A tax calculator shows the calculated tax and total to help with pricing.

![Tax Calculator](/img/docs/club-management/shared/tax-calculator.png)

If your program uses per‑curler fees (e.g., membership or affiliate fees), include them as required fees in the [Assigning Fees & Addons](#assigning-fees--addons) section so they’re applied consistently and only once per season per curler.

### Requiring a Curler Profile

Forces registrations to be individual (not team), tying the purchase to a curler. Recommended when you need per‑curler limits, to apply per‑curler fees, or to drive discounts that depend on the registrant.

### Seasonal per curler

If a curler profile is required, this limits each curler to one registration for the program per season.

### Private

Make a program available only via a unique URL. After saving, open the program’s Details view to copy the private URL. Share this link for early access or targeted availability.

### Notification email

**[This is a Premium Only Feature](/docs/getting-started/premium)**

This sends an email whenever the program is purchased.

### Spots Available and Waitlists

Set a capacity using Spots Available. When sold out:

- If Waitlist is enabled, members can join the waitlist and you can approve them when space opens up.
- If Waitlist is not enabled, the program shows as Sold Out.

More details and examples can be found in the [waitlists section.](/docs/club-management/waitlists)

### Min and Max Age

If you are requiring a profile (individual registration) then you can restrict the age of members who can register.
The age restrictions are inclusive, meaning that entering a min age of "18" will include 18‑year‑olds.
Age restrictions use your club's [age calculation configuration](/docs/club-management/settings#age-cutoff). By default, ages are calculated as of the day before your season starts (e.g., June 30th if your season starts July 1st). For example, if a curler is not 18 or older based on your club's age calculation date, they will be prevented from registering for a program with a min age of 18.

### Summary & Description

- Summary appears on the program listing page.
- Description shows on the program details page.
Keep in mind that members may add the program directly to their cart without opening the details page.

### Required Reading

Show important information during checkout that must be acknowledged before purchase. Use sparingly to keep checkout smooth.

### Post registration message

Optional message shown after purchase on the thank‑you screen and in the receipt email. Use this for reminders or next steps.

### Sponsorship

Associate a sponsor to show their logo and name on the program page. You can also upload a program image that will be shown publicly.


## Accounting Codes

If you've enabled accounting in your [Club Settings](/docs/club-management/settings#accounting), you'll see an **Accounting Codes** section when creating or editing a program.

Most clubs only use the default account code set in Club Settings. However, you can optionally add Class and Project codes here to differentiate between program types (e.g., Learn to Curl vs. training camps) or track grant-funded programs.

**For complete details and examples, see the [Accounting Codes Guide](/docs/accounting/accounting-codes).**


## Assigning Fees & Addons

All fees and addons that should be added to the cost of the program can be added here.
Keep in mind that just creating a fee does not automatically associate it to your programs.
You need to specify which fees and addons are relevant for each program, as this will almost always vary between offerings. E.g. junior and learn‑to‑curl programs may not have any fees.

![Addons and Fees](/img/docs/club-management/shared/addons-and-fees.png)

Examples of fees are your provincial and national affiliate fees, and any membership or capital improvement fees at the club.

Examples of addons are lockers, grippers, helmets—any product you want to offer as a required or optional addon to the program.

[You can find information about fees here.](/docs/club-management/fees)

## Custom Fields

Ask additional questions during registration using Custom Fields. Mark fields as required when necessary. Ordering is supported.

![Custom Fields](/img/docs/club-management/shared/custom-fields.png)

## Discounts

Associate discounts that apply when criteria are met (e.g., early‑bird, member, age‑based). Create discounts first, then attach them to the relevant programs.

## Who Registered?

From the Programs list, click Purchased to open the Order Items report filtered to the selected program. This shows all purchases/registrations.
