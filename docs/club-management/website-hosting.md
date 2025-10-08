---
id: website-hosting
title: Website Hosting
slug: /club-management/website-hosting
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Overview

Need a modern club website but tired of paying for WordPress, Wix, or Squarespace? Curling IO Hosting gives every club a polished web presence at no extra cost, fully integrated with the rest of the platform.

Open the **Website** section in your admin navigation to manage everything in one place—changes publish the moment you save:

- A customizable landing page activates the instant you enable it, giving visitors a polished overview without extra work.
- Pages and articles you add appear instantly, and the public site automatically surfaces Pages or News menus when content is available.
- A club-wide customizable colour palette (including call-to-action buttons).
- Member-only visibility controls, letting you lock sensitive announcements or resources to active curlers in a couple of clicks.
- Tight integration with registrations, leagues, bonspiels, programs, and products—no copy-pasting data between systems.
- Performance tuned with the rest of Curling IO, so your website is faster than other hosting options.

Because it is built into Curling IO, the hosting experience stays simple, secure, and easy for volunteers to maintain. Explore the live demo club at https://demo.curling.io/ to see the layout, navigation, and content options you can launch right away.

## Landing Page

The landing page is an optional hero-style layout that opens your site with key calls to action. Enable it from the **Website → Landing Page** settings to swap it in immediately, then fine-tune the content inline.

<img
  alt="Curling IO landing page layout"
  src={useBaseUrl('img/docs/club-management/website-hosting/landing_page.png')}
  width="960"
/>

Editable blocks cover the entire experience:

- **Hero**: Title, tagline, and rich media (YouTube video or uploaded image) to welcome visitors.
- **At a Glance**: Bullet points that summarize hours, amenities, or quick facts.
- **About Our Club**: Short narrative with an optional supporting image.
- **Sections**: Summaries for Leagues, Bonspiels, Programs, Products, and the Calendar—each links directly to its catalog. Those blurbs also appear below the matching section headers.
- **Quick Links**: Buttons that take visitors to common tasks such as membership, bookings, or volunteer sign-up.
- **Testimonials**: Social proof from members or guests.
- **News**: Pulls the three most recent articles to keep the page fresh.
- **Sponsors**: Displays partner logos in a clean carousel with a sponsorship call-to-action.

You can edit copy in place—click the Edit link for any section to update the content and see changes instantly.

<img
  alt="Inline landing page editing"
  src={useBaseUrl('img/docs/club-management/website-hosting/in_place_editing.png')}
  width="960"
/>

## Website Settings

Located in **Website → Settings**, this screen brings together the visual, navigation, and contact details that define your hosted site.

### Branding
- **Name** — Controls the header text and the default club name shown publicly.
- **Brand palette** — Pick a palette preset and fine-tune individual colours (Primary, Secondary, Success, Info, Warning, Danger, Light, Dark) by entering hex codes.
- **Logo** and **Nav logo** — Upload full-size and compact versions for the header and navigation bar.

### Navigation & layout
- **Calendar enabled?** — Toggle the public calendar tab. When enabled, visitors can browse draws, rentals (Premium), and closures.
- **Calendar default view** — Select the view you want to load first (Month, Week, or Day). Clubs with rentals often prefer the day view.
- **Landing page** — Choose where visitors land first (Landing Page, Leagues, Bonspiels, Programs, Products, Calendar, etc.).
- **Program label** and **Competition label** — Rename these tabs to match local terminology.
- **Banner** and **Banner visibility** — Upload a 1200 × 250 banner image and choose which screens display it.
- **Sidebar options** — Decide which touts appear on hosted pages (Current games, Random sponsor, Latest news).
- **Section summaries** — Provide English and French blurbs for Leagues, Bonspiels, Programs, Products, and the Calendar. These appear below public section headers and on Landing Page cards.

### Contact information
- **Address block** — Street, unit, mailing address, city, province/state, country, postal/ZIP code, and time zone (used for draw schedules and emails).
- **Primary contact** — Phone number and email shown on the contact page.
- **Site & policy links** — Website URL, Terms URL, Privacy URL.
- **Social & media handles** — Facebook, X (Twitter), Instagram, TikTok, YouTube.
- **Community invites** — Optional invitation links for WhatsApp, Slack, and Discord; shared with members on receipts and the contact page.
- **Club contacts** — Add individual contacts (name, email, phone) to spotlight specific volunteers or board members.

Once you save your updates in Website → Settings, continue with the specialized pages below to bring your hosted site to life.

## Pages

Each page has a title, display order, published/draft toggle, optional image, and body content.

You can *restrict* individual pages so that they can only be seen by members. You can also require a specific product or fee purchase before the page becomes visible.
By default, pages are unrestricted.

Similar to event and product descriptions, the body content of your page is entered using [Markdown](https://www.markdownguide.org/cheat-sheet/) or HTML.


## Articles / News

Each article includes a title, publish date, optional image, and body content.
The order in which articles appear is based on the published date (most recent first).

You can *restrict* individual articles so that they can only be seen by members. You can also require a specific product or fee purchase before an article is visible. By default, articles are unrestricted.

Similar to event and product descriptions, the body content of your article is entered using [Markdown](https://www.markdownguide.org/cheat-sheet/) or HTML.


## Banner

**[This is a Premium Only Feature](/docs/getting-started/premium)**

You can upload a banner image that will be shown along the top of your public site.
Aim for dimensions near 1200 x 250 pixels; other sizes are resized automatically when uploaded.

You can also choose whether it shows up only on the Pages and Articles sections or across the entire site.
We recommend against displaying it everywhere because it takes up a significant amount of screen space.


## Sidebar

**[This is a Premium Only Feature](/docs/getting-started/premium)**

The sidebar is where you can "tout" other content on the right side of the Pages and Articles screens.

You can select which touts should appear in the sidebar for pages and articles.

You can also enable or disable the sidebar for individual pages and articles.

Touts are 300-pixel-wide rectangles.

### Current Games Tout

This tout will show the status and scores of any active, soon-to-be-active, or recently completed games in any leagues or competitions at your club.

### Random Sponsor Tout

This tout will show a random [sponsor from your list of sponsors](/docs/club-management/sponsors) if you have any.

### Latest News Tout

This tout will show a brief summary or image of the most recent news article if you have any.

## SEO (Search Engine Optimization)

Any pages and articles you create will be published in your sitemap.xml (used by search engines like Google) and have appropriate meta tags and titles for better search indexing and discoverability on the web.

## DNS Redirect

If you already own a custom domain, configure your registrar to redirect it to your Curling IO subdomain (for example, `www.examplecurling.com` → `yourclub.curling.io`). Once the redirect is active, enter the same host name in the Website → DNS settings panel so we can provision the SSL certificate automatically. Keep the root/apex (`examplecurling.com`) forwarding to the `www` host if your registrar supports it.

## Getting Help Setting It Up

If you want a second set of eyes before you launch, our support team is happy to walk through the setup with you.

- Open `Club → Support` in Curling IO and submit a ticket using the *Website* category. The [Support guide](/docs/club-management/support) has the full ticket walkthrough if you need a refresher.
- Gather answers to these questions ahead of time—we need them to help you (mark "not applicable" only if you do not have an existing site):
  - Do you already have a website live, and what is the URL?
  - Is it built on a platform like WordPress, Wix, or another site builder?
  - Who currently hosts it (managed service, local provider, etc.)?
  - Do you retain admin access to the existing website?
  - Do you have a domain name registered and access to the registrar (GoDaddy, Namecheap, Google Domains, etc.)?

Once we have these details, we will suggest next steps, share any recommended configurations, and coordinate a quick call if a live walkthrough would help.
