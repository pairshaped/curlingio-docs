---
id: leagues
title: Leagues & Competitions
slug: /club-management/leagues
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Walkthrough Video

The following video will take you, the curling club manager, through the basics of creating a league and opening up registrations.
Competitions are identical except that for a competition you will usually not require a curler profile, as they will be team based registrations.
If you're new to Curling IO, it's worthwhile to watch this before wading through the rest of our documentation.

<div className="text--center videoWrapper">
  <iframe width="100%" src="https://www.youtube.com/embed/LSuo6UbLBJ0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
</div>


## Finding your Leagues and Competitions

Within your admin area, click on **Leagues** or **Competitions** in the top bar.

![Navigation](/img/docs/club-management/leagues/navigation.png)

To create a league, click the **New League** or **New Competition** button.

![New](/img/docs/club-management/leagues/new.png)

To update an existing league or competition, click the **Edit** link next to it.

![Edit](/img/docs/club-management/shared/edit.png)


## Filling in the Form


### Naming your League or Competition

This is the name that will be displayed to your members when they come to register on Curling IO.

For leagues we recommend including the Day of the week, night or day, and type of league here. E.g. "Monday Night Men's".

Some clubs will also include the year, but this is generally unnecessary and entirely at your preference since leagues and competitions are filtered by season when member's visit the listing pages. E.g. "Monday Night Men's - 2020"


### Start & End Dates

The start and end dates indicate when your league or competition runs.
These aren't to be confused with when the league or competition registration opens and closes.


### Active

If you need to disable a league or competition temporarily you can uncheck the **Active** box.
When a league or competition is disabled it cannot be seen or purchased by your members.


### Summary & Description

When you enter a summary, it will show up on the list view of your leagues or competitions when members come to Curling IO.
For leagues, we recommend entering your draw times. E.g. 7:00 & 9:00 PM

The description shows up when your members click on the name of the league or competition and also when they assign a curler profile or fill in required information for it.
Keep in mind that member's may just add the league or competition to their cart without clicking on it's name.


### Skill Level

You can indicate a skill level for your events ranging from beginner to advanced or even professional.


### Required Reading

You can enter some text that your members are guaranteed to see before they can complete their registration for the league. Just leave this blank to avoid this registration step.

We recommend you use this sparingly as it adds another step (friction) to league registrations for your members.


### Sponsorship

You can optionally upload a sponsor image and provide a Sponsored By line. This will only appear in the detailed view of your league or competition when member's click on the name.


### Open & Close Dates

You must specify an open and a close date before your members can register for the league or competition.
This determines when it is available for registration / purchase.

Before the open date has occurred, members will be shown that date that registration will open.

Once the close date has passed, members will be shown that registration is closed.


### Pricing & Tax

When you set the pricing for your league or competition, we highly recommend breaking out the tax, both for transparency to your members, but also to make it easier for your bookkeeping.

There is a handy tax calculator which will show you what your total with tax will be in case you want to untangle taxes from your existing pricing.

![Tax Calculator](/img/docs/club-management/shared/tax-calculator.png)

For league registrations you will also want to break out the affiliate fees and let Curling IO handle them for you.
If you include the affiliate fees as required in the [Addons section](#assigning-fees--addons) then Curling IO will ensure that every curler who registers for the league will also pay the affiliate fees.
We also make sure they only pay them once per season, by omitting seasonal fees in future league registrations for the same season.
It's also much easier to report on for bookkeeping and when it comes to figuring out your club's remittance.


### Requiring a Curler Profile

When you require a curler profile you are forcing registrations to be **individual** only.

We highly recommend requiring a curler profile for your league registrations.
It's required for the system to apply seasonal membership and affiliate fees, and multiple league discounts.
The system needs to know who (curler profile) has paid their fees already for the season so that they aren't charged again in future registrations.

As an example, if Sue registers for the Monday Night Ladies league and pays her membership and affiliate fees, then later registers for a Wednesday Night Mixed league, the system is smart enough not to double charge her membership and affiliate fees.
Also if Sue's club was running a multi-league discount like 20% off the second league, then the system needs to know how many leagues she has already purchased in order to apply this discount to her second league registration.

For competition / bonspiel registrations you usually do not want to require a curler profile, since these are usually team registrations and membership or affiliate fees are irrelevant.


### Seasonal per curler

If you are requiring a curler profile, then checking the seasonal per curler checkbox will prevent this league from being purchase for the same curler more than once in the same season.
We highly recommend you use this for seasonal leagues as this can reduce mistaken purchases where a user really meant to usea different curler profile or didn't realize they had the league in their cart more than once.


### Private

You can check this box to make a league or competition available **only** to those that have been given a unique URL to click.
This is typically used to offer early access to a league or competition for returning members.

If you check this box then once you save the league or competition, a unique URL will be generated for it.
You can copy this unique URL and send it to the subset of members you want to be able to purchase it.
To find this URL simply click on the name of the league or competition on the administrator product listing page.


### Notification email

**[This is a Premium Only Feature](/docs/getting-started/premium)**

If you'd like someone to be notified every time the league or competition is purchased you can enter their email address here.
You can enter more than one email address separated by commas.

We don't perform any email validations on this field, so please make sure you don't have a typo or a defunct email address or they won't receive the notifications.

We also don't recommend using this feature for fellow managers since they will have access to the same information from within the admin area, and sending notification emails get spammy.


### Spots Available

You can restrict the number of registrations for your event.
If it's an individual registration (requires a curler profile) then this should be how many curlers can register for it.
If it's a team registration (does not require a curler profile) then this should be the number of teams that can register for it.


### Waitlist enabled

Check this box if you want members to be able to add their name to a waitlist when there are no longer spots available.
This only works if you've restricted the spots available.

More details and examples can be found in the [waitlists section.](/docs/club-management/waitlists)


### Publish Registrations

If you would like to publicly show who has registered for a league or competition you can check this box.
Only the curler's name, team or skip name, position, and lineup will be shown.
No other information collected through custom fields or from the curler's profile will be shown.

The reason to publish registrations is so that other members can see who has already registered, like a friend or family member, when they are deciding to register themself.
Similar to a bulletin board at the club.


### Min and Max Age

If you are requiring a curler profile (individual instead of team registration) then you can restrict the age of members who can register.
The age restrictions are inclusive, meaning that entering a min age of "18" will include 18 year olds.
Age restrictions use your [current season start date](/docs/club-management/settings#season-starts-in) as the cutoff (defaulting to July 1st). So if a curler is not 18 or older on the current season's start then they will be prevented from registering for a league with a min age of 18.


### Post registration message

This is a message that your members will see after they purchase the league or competition.
The message is displayed both on the thank you screen and in the email they receive after purchase.
Use this to provide follow up instructions to your members, like a reminder (possibly with a link) to ask their teammates to register.


### Team or Skip Name

If you want to leverage Curling IO team recommendations then you must ask for either a team or a skip name during registration.
Our team recommendations just make it easier and automate team creation if that's a feature you want to use.
You can make the team and skip name optional, required, or even restrict team names to the list of existing teams (useful if you are pre-creating teams).

If you aren't planning to use Curling IO to set up teams, round robins, and draw schedules, then asking for a team or skip name is just a club preference for reporting purposes.


### Curler's Position

If you ask for the curlers position and are using our team recommendations for a league or competitions, then the position your curlers choose will be reflected in the recommended teams.


### Lineups & Number of Alternates

Usually you wouldn't want to ask for lineup information for individual league registrations otherwise every member of the team will be entering it in duplicate and triplicate when each of the register.

However, this can be useful for competitions that are typically done as team registrations if you need to know who will be participating.


### Publish Schedule and Results

If you are using Curling IO's team assembly, round robin generation, draw schedules, and scoring then you'll likey want to check this box.
This will publish your schedule, standings, and teams on the public side of your site.

If you are not planning to use these features within Curling IO, we recommend you leave this unchecked to avoid confusion.


### Allow Spares

Curling IO has a sparing feature where members can choose which leagues and competitions they are available to spare for.
The use of this feature does not require members to have purchased anything, but simply to have added a curler profile and accepted your waivers.
Curler can also indicate which positions they can spare for, and any notes they may have about sparing and availability.

[Refer to our curler sparing documentation for more info.](/docs/for-curlers/sparing)


### Participant Scoring

**[This is a Premium Only Feature](/docs/getting-started/premium)**

Check this box if you want your participants to be able to score games on their own. In order for this to work though you will need to create teams and assign curlers to them, or we won't know who your participants are. End scores are not supported by participant scoring yet.
Curlers access participant scoring for their games from their [Account -> My teams section](/docs/for-curlers/teams).


### End Scores Enabled

**[This is a Premium Only Feature](/docs/getting-started/premium)**

If you want to be able to score each of the ends for each team for the league or competition, you can check this box to enable end scores.
[Refer to our scoring documentation to see how this works.](/docs/event-management/scores)


### Team coach name, and affiliation

These are options available to membership associations.

You can ask registrants to enter their coach name and affiliation (club they are representing).
This information will be copied over to the team if you use our team recommendation engine.


### Team contact name, phone, and email

You can ask registrants to enter a contact name, phone number, and email address for their team.
If you are already requiring curler profiles then you probably don't need this since you will have the profile as your contact.
This is used mostly in competitions when you are taking team registrations instead of individuals with curler profiles.
This information will be copied over to the team if you use our team recommendation engine.


### Publish Team Contact Information

If you are using Curling IO's team assembly, and are entering contact information for your teams, then you can choose whether or not to show this information.
This only works if you are also publishing the schedules and results.


## Assigning Fees & Addons

All fees and addons that should be added to the cost of the league or competition can be added here.
Keep in mind that just creating a fee doesn't not automatically associate it to your leagues and competitions.
You need to specify which fees and addons are relevant for each league or competition, as this will almost always vary between events.
E.g. junior and learn to curl leagues may not have any fees.

![Addons and Fees](/img/docs/club-management/shared/addons-and-fees.png)

Examples of fees are your provincial and national affiliate fees, but also any membership or capital improvement fees you may have at the club.

Examples of addons are lockers, grippers, helmets. Any product that you want to include as a required or optional addon to the league or competition.

[You can find information about fees here.](/docs/club-management/fees)


## Adding Custom Fields

Custom fields allow you to ask your members questions specific to your club that we haven't thought of during registration.

Keep in mind that for individual registration where you require a curler profile, you shouldn't need to add custom fields for general curler data as this will already be associated with the registration.

For a competition / bonspiel registration you might want to add some custom fields to capture contact information should you need it.

Like fees, keep in mind that custom fields are not automatically added to all of your leagues and competitions.
You need to specify which custom fields are relevant for each league or competition, as this will often vary between events.

![Custom Fields](/img/docs/club-management/shared/custom-fields.png)

[You can find information about custom fields here.](/docs/club-management/custom-fields)


## Assigning Discounts

You can apply discounts to your leagues and competitions that depend on the registrant meeting specific criteria.
Keep in mind that just creating a discount doesn't not automatically associate it to your leagues and competitions.
You need to specify which discounts are relevant for each league and competition, as this will often vary.

![Assigning Discounts](/img/docs/club-management/leagues/discounts.png)

### Examples of Discounts

#### Example 1: Second League Purchased

Give the registering curler a 20% discount if this is the second league they are purchasing this season.

#### Example 2: Under 18

Give the registering curler a 50% discount if they are under 18 years old as of July 1st in the year that the season began.

#### Example 3: Early Bird Discount

Give the registering curler a $10 fixed discount if they register at least 90 days before registration closes for the league.

#### Example 4: First Time Member

Give the registering curler a 5% discount if this is the first time they've registered with your club.
This is an example of a custom field based discount and you'd be responsible for making sure members don't select the option when they shouldn't.

More details and examples can be found in the [discounts section.](/docs/club-management/discounts)

## Copying a League for the new Season

In Curling IO you **NEVER reuse leagues or competitions across multiple seasons**.
We keep the previous season's leagues and competitions for their historical data. This is useful for reporting / accounting, but also for curler's to see results and standings from a previous season if you are using our [event management features](/docs/event-management/registrations).

Instead what you'll want to do is simply **Copy** your leagues and competitions from the previous season.
The **Copy** option is found next to each of your leagues and competitions in their respective list views.

![Copy](/img/docs/club-management/shared/copy.png)

When you copy a league or competition, you are presented with a pre-filled form.
The start, end, registration open, and registration close dates will be prefilled with one year added to each of them.
You will want to tweak these dates to make the weekday's line up for the new season.
You will also want to remove the "(Copy)" from the name (we do this to make it obvious you are copying).

Usually that's all you'll need to do to set up your leagues and competitions for the new season.


## Who Purchased a League or Competition?

You can click the **Purchases** link next to one of your existing leagues or competitions. It will take you to our reports session filtered by the league or competition.
This will show you all of the purchases for it.

![Purchased](/img/docs/club-management/shared/purchased.png)
