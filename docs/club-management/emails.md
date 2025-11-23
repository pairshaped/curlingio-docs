---
id: emails
title: Emails
slug: /club-management/emails
---
import useBaseUrl from '@docusaurus/useBaseUrl';

The Emails feature allows you to manage both broadcast emails and transactional email templates for your club. You can send announcements to your members and customize the automated emails that are sent when members make purchases, payments, and receive refunds.

## Finding Emails

Within your admin area, click on the **Club** dropdown menu in the top bar and then click on **Emails**.

![Navigation](/img/docs/club-management/emails/navigation.png)

This will take you to the Email Broadcasts page. You'll see two tabs at the top:
- **Email Broadcasts** - Send announcements and newsletters to your members
- **Transactional** - Customize automated email templates for purchases, payments, and refunds

## Email Broadcasts

Email broadcasts allow you to send announcements, newsletters, and other communications to groups of your members. This feature uses a credit system to ensure fair usage across all clubs.

### Understanding Email Credits

Email credits are used to send broadcast emails. Each email sent to one recipient uses one credit. For example, sending an email to 50 members uses 50 credits.

#### How You Earn Credits

You automatically receive email credits in three ways:

**1. Premium Subscription Renewals**

When you purchase or renew a Premium subscription, you receive **5,000 email credits** immediately. These credits are added to your balance and can be used for broadcast emails throughout your subscription period.

**2. Monthly Automatic Grants**

If your club processes online payments through Curling IO (leagues, competitions, products, fees), you automatically earn email credits each month based on your payment processing volume:

- You earn **10 credits for every dollar** in application fees you generate
- Credits are granted on the 1st of each month for the previous month's activity
- There's a minimum threshold of $5 in monthly fees to receive the grant

For example, if you processed $100 in application fees in January, you'll receive 1,000 email credits on February 1st.

**3. Direct Purchases**

You can purchase additional email credits at any time if you need more than your automatic grants provide. See the "Purchasing Additional Credits" section below.

#### Credit Balance and Cap

Your email credit balance has a **maximum cap of 6,000 credits**. This means:

- Your balance cannot exceed 6,000 credits
- If a grant or purchase would take you over the cap, you'll only receive credits up to the 6,000 limit
- Once you use credits and go below the cap, you can earn or purchase more credits again

You can view your current credit balance and usage history on the **Email Broadcasts** page.

![Email Broadcasts](/img/docs/club-management/emails/broadcast-list.png)

### Sending a Broadcast Email

The easiest way to send a broadcast email is to start from one of your reports, which allows you to filter your members and then send them an email.

#### Step 1: Select Your Recipients

1. Navigate to any order items report (Leagues, Competitions, Programs, Products, Fees, etc.) under the **Reports** section
2. Use the report's filters to narrow down your recipients (e.g., only members from a specific league or season)
3. Click the **Send Broadcast Email to These Recipients** button at the top of the filtered results

This will extract all unique email addresses from your filtered results and take you to the email composer.

#### Step 2: Compose Your Email

![Email Composer](/img/docs/club-management/emails/broadcast-compose.png)

On the email composer page, you'll see:

- **Your current credit balance** and how many credits this email will use
- **Recipient list** showing all email addresses that will receive the email
- **From Name** - How your club name will appear to recipients (defaults to your club name)
- **Subject** - The email subject line
- **Body** - The email message content

Fill in your subject and body, review the recipient list to ensure it's correct, and verify you have enough credits to send.

#### Step 3: Send

Click the **Send Email** button to queue your broadcast. The credits will be deducted from your balance immediately, and the emails will be sent in the background.

You can view the status of your sent broadcasts by going to **Club** → **Emails** → **Email Broadcasts** tab. The page shows both your current credit balance and a chronological list of all activity including:

- Sent broadcasts (showing subject, date, and credits used)
- Credit grants from purchases, premium renewals, and monthly allocations
- Your current credit balance at the top of the page

### Purchasing Additional Credits

If you need more credits than your automatic grants provide, you can purchase them at any time.

1. Go to **Club** → **Emails** → **Email Broadcasts** tab
2. Click the **Purchase Credits** button
3. Select a credit package from the available options

Credits never expire and will remain in your account until used. Remember that your balance cannot exceed 6,000 credits, so plan your purchases accordingly.

## Transactional Email Templates

Transactional emails are the automated emails that Curling IO sends on your behalf when your members interact with your club. These include:

- **Order submitted (cash/cheque)** - Email sent when a member submits an order but hasn't paid yet
- **Order paid (online)** - Receipt email sent when a member completes an online payment
- **Payment recorded (at club)** - Email sent when you record a payment made at the club
- **Refund issued (at club)** - Email sent when you record a refund

### Customizing Transactional Email Templates

To customize these email templates:

1. Go to **Club** → **Emails** → **Transactional** tab
2. You'll see a list of all available email templates
3. Click **Customize** next to the email you want to edit

![Transactional Templates](/img/docs/club-management/emails/transactional-list.png)

On the customization page, you can modify:

- **Subject line** - Customize the email subject
- **Email body** - Edit the message content using the template variables provided
- **Preview** - See how the email will look to your members

### Template Variables

Transactional emails support template variables that are automatically replaced with actual data when the email is sent. Common variables include:

- Member name
- Order details
- Payment amount
- Club information

The available variables are shown on each template customization page.

### Resetting Templates

If you want to return a template to its original default content, click the **Reset to Default** button on the template customization page. This will discard your changes and restore the original template.

## Email Sending Best Practices

- **Check your filters** - Before sending a broadcast, double-check that your report filters are selecting the right recipients
- **Review your balance** - Make sure you have enough credits before composing large broadcasts
- **Test first** - Consider sending a test broadcast to yourself or a small group before sending to all members
- **Mind the cap** - Your credit balance caps at 6,000, so use credits regularly rather than letting them accumulate

## Frequently Asked Questions

**Q: What happens if I don't have enough credits to send a broadcast?**

A: The Send button will be disabled and you'll see a message indicating you need more credits. You can either wait for your next monthly grant or purchase additional credits.

**Q: Can I schedule broadcasts to send later?**

A: Not at this time. Broadcasts are sent immediately when you click the Send button.

**Q: Who can send broadcast emails?**

A: Any club manager with access to your admin area can compose and send broadcast emails.

**Q: What email address do broadcasts come from?**

A: Broadcast emails are sent from `broadcast@curling.io` with your club name in the "From" field. Replies go to your club's main email address that you have configured in your club settings.

**Q: Can recipients unsubscribe from broadcast emails?**

A: Yes, all broadcast emails include an unsubscribe link at the bottom. If a recipient clicks the unsubscribe link or marks a broadcast email as spam, they will not receive any future broadcast emails from your club. Note that this only affects broadcast emails - they will still receive transactional emails (receipts, payment confirmations, etc.).
