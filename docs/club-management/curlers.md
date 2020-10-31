---
id: curlers
title: Curlers
slug: /club-management/curlers
---
import useBaseUrl from '@docusaurus/useBaseUrl';

In Curling I/O, curler profiles belong to your members themselves.
Members can they reuse their curler profiles for registration across multiple seasons at your club, and also at other clubs, provincial, and even national competitions they may participate in.

## Finding Curler Profiles

You can access the list of all the curler profiles who have registered at your club, regardless of season, by clicking on **Curlers** in the top navigation.

![Curlers Navigation](/img/docs/club-management/curlers/navigation.png)

To manually add a curler profile, click the **New profile** button.
Usually curlers will create their own profiles, but occasionally you may want to create one for them.

![New](/img/docs/club-management/curlers/new.png)

To update an existing curler profile, click the **Edit** link next to it.
Usually curlers will update their own profiles, but occasionally you may want to handle it for them.

![Edit](/img/docs/club-management/shared/edit.png)


## Duplicate Curler Profiles

Occasionally you will end up with duplicate profiles. This can and will happen for various reasons.
Usually it's because someone registered again at a later date but logged in with a different email address than last time that also wasn't entered on the profile.
If you spot one of these duplicates, you can **mark** one of them as a duplicate and eventually it'll get merged and / or removed.

![Mark as Duplicate](/img/docs/club-management/curlers/mark-as-dupe.png)


## Loggin in as a Curler

You are able to login (temporarily pretend) as a curler in order to help them complete their registration if they're struggling to do it themselves.

Just click the "Login as" link below the curler account's email / name.

Note: This only works with curlers for accounts that have already logged into the system.
If instead you need to perform the registration for a curler that has never created an account, you can simply add your email address to the curler's profile,
and then you will see and be able to register with that profile from your own account.


## What did a Curler Purchase?

Next to each curler there is a **Purchased** link.
This will take you to the order item reports filtered by the curler profile.
It's a convenient way to see what purchases a curler is associated with.

![Purchased](/img/docs/club-management/shared/purchased.png)


## Importing Curler Profiles

If this is your club's first season using Curling I/O then you can import curlers from a previous season that do not yet have a profile in the system by uploading a CSV file.

We don't recommend this in general since it's not difficult for your curlers to register themselves, and
your curlers will only see the profiles you imported for them if they login using one of the email addresses in the profile.
That being said, it can be convenient to initialize your curlers and potentially make it easier for them to register by pre filling their information.

CSV files can be exported from any spreadsheet or database program, usually by selecting the "File" menu and selected "Export as" or "Download as" and then selecting "CSV".

[Click this link to see an example of a curler spreadsheet.](https://docs.google.com/spreadsheets/d/1-smgG2v8atZySX68hwoP-gaDJGvD0sGl3_GHZ7XTrtk/edit?usp=sharing)
Only the columns in red are required. The other columns are optional and may be ignored or removed from your import.
You must make sure your column names are identical to this example spreadsheet's column names.

### The required fields are:
- First Name
- Last Name
- Date Of Birth
- Email
- Phone
- Street Address
- City
- Province
- Country
- Postal Code (or Zip Code)
- Emergency Contact Name
- Emergency Contact Phone

Once you have a CSV to import, upload it by clicking the "Choose File" button and selecting it.
Then click the "Import" button to run the import.
We'll try to detect and ignore any duplicate curlers.

We keep a log you can review for every import in case there are errors due to missing fields or duplicate profiles.
