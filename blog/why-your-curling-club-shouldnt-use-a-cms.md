# Why Your Curling Club Shouldn't Use a CMS

April 14, 2026 ·

<!-- -->

9 min read

![Dave Rapin](https://avatars.githubusercontent.com/u/1202?v=4)

Dave Rapin

Founder @ Curling IO

We know that many of our clubs use WordPress or Joomla for their curling websites. These are popular platforms, and for good reason: they're flexible and there's no shortage of tutorials and plugins. But that popularity comes with a serious downside. General-purpose CMS platforms are massive targets for hackers, and the threat has been escalating rapidly. Here's what you need to be aware of.

## The security problem is real[​](#the-security-problem-is-real "Direct link to The security problem is real")

WordPress powers roughly 43% of all websites on the internet. That kind of market share makes it the single biggest target for malicious actors. According to [Sucuri's annual threat research report](https://sucuri.net/reports/2023-hacked-website-report/), WordPress accounts for over 95% of all hacked CMS platforms they remediate. Joomla and Drupal make up most of the rest.

[Patchstack's State of WordPress Security report](https://patchstack.com/whitepaper/state-of-wordpress-security-in-2024/) found 5,948 new WordPress vulnerabilities disclosed in a single year. The vast majority, over 97%, were in plugins and themes rather than WordPress core.

## Supply chain attacks[​](#supply-chain-attacks "Direct link to Supply chain attacks")

It's not just about unpatched bugs. In June 2024, WordPress.org disclosed that [several plugins in the official repository had been compromised](https://www.wordfence.com/blog/2024/06/supply-chain-attack-on-wordpress-org-plugins-leads-to-5-maliciously-compromised-wordpress-plugins/). Attackers gained access to developer accounts and pushed malicious updates to trusted plugins with tens of thousands of active installs. The malicious code created unauthorized admin accounts and exfiltrated data.

Even more concerning is a growing pattern where malicious actors **purchase legitimate, established plugins** from their original developers and then inject malicious code in subsequent updates. Users who have auto-updates enabled, as is generally recommended, receive the compromised version automatically without any indication that the plugin has changed hands.

The [Balada Injector campaign](https://blog.sucuri.net/2023/04/balada-injector-synopsis-of-a-massive-ongoing-wordpress-malware-campaign.html), documented by Sucuri, has been exploiting known plugin vulnerabilities since 2017. By their estimates, it has compromised over one million WordPress sites, injecting malicious JavaScript that redirects visitors to scam sites.

In August 2024, a [critical vulnerability in the LiteSpeed Cache plugin](https://patchstack.com/articles/critical-privilege-escalation-in-litespeed-cache-plugin-affecting-5-million-sites/) (used by over 5 million sites) allowed attackers to create admin accounts on any site running the vulnerable version. It was actively exploited in the wild.

## Joomla and Drupal aren't immune[​](#joomla-and-drupal-arent-immune "Direct link to Joomla and Drupal aren't immune")

Joomla has had its share of critical vulnerabilities. In February 2024, a [high severity XSS vulnerability in Joomla's core filter component](https://www.sonarsource.com/blog/joomla-multiple-xss-vulnerabilities/) (CVE-2024-21726) could lead to remote code execution. Proof-of-concept exploit code was published shortly after disclosure. An [earlier vulnerability](https://developer.joomla.org/security-centre/894-20230201-core-improper-access-check-in-webservice-endpoints.html) (CVE-2023-23752) that leaked database credentials was still being mass-exploited well into 2024 because so many sites remained unpatched.

Drupal has a better security track record thanks to a more curated extension ecosystem and dedicated security team, but its complexity means fewer organizations keep it fully patched. The infamous Drupalgeddon vulnerabilities from 2014 and 2018 continued to be used against unpatched sites years later.

## AI is making it worse[​](#ai-is-making-it-worse "Direct link to AI is making it worse")

The rapid advancement of AI agents over the past year has made this problem significantly worse. Automated bot traffic now accounts for [roughly half of all internet traffic](https://www.imperva.com/resources/resource-library/reports/2024-bad-bot-report/), with malicious bots making up about a third. Attackers are using AI to discover vulnerabilities, generate exploits, and launch attacks at a scale and speed that wasn't possible before.

A [University of Illinois study](https://arxiv.org/abs/2404.08144) demonstrated that an AI agent could successfully exploit 87% of known vulnerabilities when given their CVE descriptions. [Microsoft and OpenAI confirmed](https://www.microsoft.com/en-us/security/blog/2024/02/14/staying-ahead-of-threat-actors-in-the-age-of-ai/) that state-affiliated threat actors are already using LLMs for reconnaissance and scripting attacks. The window between a vulnerability being disclosed and being actively exploited has compressed from days to hours, partly because AI tools help attackers weaponize published CVE information almost instantly.

For a CMS ecosystem like WordPress with thousands of new plugin vulnerabilities disclosed each year, this means every unpatched plugin is now discovered and targeted faster than ever.

## Why this matters for curling clubs[​](#why-this-matters-for-curling-clubs "Direct link to Why this matters for curling clubs")

Most curling clubs have a small group of volunteers managing their online presence. They don't have a dedicated IT team. They don't have a security budget. When a WordPress plugin introduces a vulnerability, they may not even know about it until their site is defaced, redirecting members to phishing pages, or quietly harvesting payment information.

The maintenance burden is significant even without a security incident:

* **Constant updates.** WordPress core, themes, and plugins all need regular updates. Falling behind is how sites get hacked.
* **Plugin sprawl.** Need a contact form? Plugin. Need event registration? Plugin. Need a photo gallery? Plugin. Each one is a potential attack vector.
* **Hosting management.** You're responsible for the full stack: operating system, web server, PHP version, database, CMS core, and every plugin.
* **Backups and recovery.** If something goes wrong, you need a recent backup and someone who knows how to restore it.

A general-purpose CMS is designed to build any kind of website. That flexibility comes with complexity that most clubs don't need for what is often a fairly simple informational site.

## If you insist on using a CMS[​](#if-you-insist-on-using-a-cms "Direct link to If you insist on using a CMS")

Some clubs may have reasons to stick with WordPress or another CMS. If that's the case, treat security as a non-negotiable priority.

If someone else manages your site for you, whether that's a volunteer, a local web developer, or an agency, you should be asking them about each of the following points. If their response is dismissive or vague, that's a red flag. Your club's reputation and your members' data are on the line.

### Keep everything updated[​](#keep-everything-updated "Direct link to Keep everything updated")

Enable automatic core updates and update plugins within 24-48 hours of security releases. Subscribe to security advisories from [Wordfence](https://www.wordfence.com/blog/) or [Patchstack](https://patchstack.com/whitepaper/state-of-wordpress-security-in-2024/) (for WordPress), the [Joomla Security Strike Team](https://developer.joomla.org/security-centre.html), or the [Drupal Security Team](https://www.drupal.org/security). An unpatched site is a compromised site waiting to happen.

### Minimize your attack surface[​](#minimize-your-attack-surface "Direct link to Minimize your attack surface")

Use the fewest plugins possible. Every plugin you install is code you're trusting with your site and your members' data. Before installing anything, check when it was last updated, how many installs it has, and whether it has known vulnerabilities. Remove (don't just deactivate) anything you're not using.

### Use a web application firewall[​](#use-a-web-application-firewall "Direct link to Use a web application firewall")

Deploy a cloud-based WAF like [Cloudflare](https://www.cloudflare.com/) in front of your site. A WAF can block known exploit patterns even before you've applied an update, providing protection against zero-day attacks.

### Harden authentication[​](#harden-authentication "Direct link to Harden authentication")

Enforce strong passwords and enable two-factor authentication for all admin accounts. Limit login attempts to prevent brute force attacks. Change the default admin username. These are basic steps that block a surprising number of attacks.

### Use managed hosting[​](#use-managed-hosting "Direct link to Use managed hosting")

If possible, use a managed hosting provider that specializes in your CMS (WP Engine or Kinsta for WordPress, Pantheon for Drupal). These providers handle server-level security, automatic backups, and often include malware scanning. It costs more than bargain shared hosting, but the security and peace of mind are worth it for a volunteer-run organization.

### Monitor your site[​](#monitor-your-site "Direct link to Monitor your site")

Set up alerts for unauthorized file changes and unexpected admin account creation. Run regular security scans. Have a plan for what to do if your site is compromised, including who to contact and where your backups are stored.

## Consider a simpler alternative[​](#consider-a-simpler-alternative "Direct link to Consider a simpler alternative")

If your curling club website is primarily informational, showing hours, ice schedules, contact info, and news, you may not need a CMS at all. There are two good options:

### A static site[​](#a-static-site "Direct link to A static site")

Tools like [Hugo](https://gohugo.io/), Eleventy, or even plain HTML hosted on [Netlify](https://www.netlify.com/) or [GitHub Pages](https://pages.github.com/) have virtually no attack surface. There's no database to breach and no server-side code to exploit. The performance is also fantastic since there's no server-side processing or database queries slowing things down.

AI agents like [Claude](https://claude.ai/), [ChatGPT](https://chatgpt.com/), and [Gemini](https://gemini.google.com/) have made this incredibly easy these days. If you're already paying for one of these AI tools, you can ask it to create a static site for your curling club. It will walk you through the entire process, show you mockups, help you pick a hosting provider, and even deploy it for you. It also makes updating your site with new content easy. Your agent can even handle the integration of our Curling IO [widgets](/docs/club-management/registration-widget.md) and [APIs](/docs/advanced/api.md) for you.

Make sure you also ask the agent to document what it's built, how it's hosted, and how deployments are done, so the next volunteer can pick up where you left off. Ask it to commit the source code to somewhere like GitHub as well. This might sound like a lot, but the agents will step you through all of it. [Claude Code](https://claude.ai/code) is especially useful for this if you don't mind paying $20 / month (and it's great for other things too).

If you need something bespoke for your club's website that Curling IO doesn't offer, we highly recommend this approach.

### Curling IO's built-in website hosting[​](#curling-ios-built-in-website-hosting "Direct link to Curling IO's built-in website hosting")

Every club on Curling IO can enable a [hosted website](/docs/club-management/website-hosting.md) at no extra cost. It's minimalist by design, so it's best suited for clubs that don't need a bunch of bells and whistles.

It includes a customizable landing page, pages, news articles, sponsor sections, and member-only content, all tightly integrated with your registrations, leagues, and bonspiels. There's no plugin ecosystem to exploit, no PHP stack to maintain, and no CMS updates to fall behind on. You can even redirect your existing domain to it.

Either approach eliminates the entire class of vulnerabilities described in this post. Your volunteers' time is better spent running the club than patching software.

**Tags:**

* [club-management](/blog/tags/club-management.md)
* [security](/blog/tags/security.md)
* [website](/blog/tags/website.md)
