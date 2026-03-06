import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './curling-club-management-software.module.css';

const features = [
  {
    title: 'Online Registration and Payments',
    imageUrl: 'img/easy_to_use.svg',
    description: (
      <>
        Let curlers register and pay online in minutes. Supports credit cards,
        installment plans, and family bundles. No more chasing cheques or
        spreadsheets.{' '}
        <a href="/docs/club-management/products">Learn more.</a>
      </>
    ),
  },
  {
    title: 'League and Competition Management',
    imageUrl: 'img/advanced_league_management.svg',
    description: (
      <>
        Assemble teams, generate round robins and brackets, publish draw
        schedules, and score games with live results online. Built for draws,
        ends, and hammer.{' '}
        <a href="/docs/club-management/competitions">Learn more.</a>
      </>
    ),
  },
  {
    title: 'Club Website Included',
    imageUrl: 'img/website_included.svg',
    description: (
      <>
        Every club gets a customizable website at no extra cost. Add your
        branding, publish schedules and results, and create member-only content,
        all integrated with your registrations.{' '}
        <a href="/docs/club-management/website-hosting">Learn more.</a>
      </>
    ),
  },
  {
    title: 'Accounting Built-In',
    imageUrl: 'img/accounting_built_in.svg',
    description: (
      <>
        Automatic accrual accounting with double-entry bookkeeping. Track every
        dollar from registration to bank deposit, with seamless exports to
        QuickBooks, Xero, and Sage.{' '}
        <a href="/docs/accounting/accounting-transactions">Learn more.</a>
      </>
    ),
  },
  {
    title: 'Rental Bookings',
    imageUrl: 'img/rental_bookings.svg',
    description: (
      <>
        Let members book ice time and rentals online with instant payment. Rent
        individual sheets and your lounge, prevent conflicts, and control
        availability, all visible on your public calendar.{' '}
        <a href="/docs/club-management/calendar">Learn more.</a>
      </>
    ),
  },
  {
    title: 'Online Waivers',
    imageUrl: 'img/online_waivers.svg',
    description: (
      <>
        Collect liability releases and photo consents during registration.
        Includes Curling Canada waivers by default. No more chasing paper
        signatures.{' '}
        <a href="/docs/club-management/waivers">Learn more.</a>
      </>
    ),
  },
];

const testimonials = [
  {
    quote:
      'After using it for over a year, I can truthfully say that it works extremely well and I would definitely recommend it.',
    author: 'Alanna Routledge',
    title: 'Executive Director of Curling Québec',
  },
  {
    quote:
      "Stop trying to force other software onto your curling organization when it wasn't built for curling. I trust this company because they understand curling, and they also understand the fundamentals of the business side of curling.",
    author: 'Dan Baldwin',
    title: 'Executive Director of Nova Scotia Curling',
  },
  {
    quote:
      "Curling IO has completely modernized our club operations. We've seen a massive boost in efficiency and improved cashflow, our members love having instant access to schedules and results, and the development team is incredibly responsive.",
    author: 'Mike Buckley',
    title: "Manager, Thistle-St. Andrew's Curling Club",
  },
];

const orgs = [
  {
    title: 'Curl PEI',
    link: 'pe.curling.io',
    imageUrl: 'img/orgs/curl-pei.png',
  },
  {
    title: 'Northern Ontario Curling Association',
    link: 'noca.curling.io',
    imageUrl: 'img/orgs/northern-ontario-curling-association.png',
  },
  {
    title: 'Curling Ontario',
    link: 'on.curling.io',
    imageUrl: 'img/orgs/curling-ontario.png',
  },
  {
    title: 'Curling Quebec',
    link: 'qc.curling.io',
    imageUrl: 'img/orgs/curling-quebec.png',
  },
  {
    title: 'Nova Scotia Curling Association',
    link: 'ns.curling.io',
    imageUrl: 'img/orgs/nova-scotia-curling-association.png',
  },
  {
    title: 'Curling Canada',
    link: 'canada.curling.io',
    imageUrl: 'img/orgs/curling-canada.png',
  },
  {
    title: 'CURLSASK',
    link: 'sk.curling.io',
    imageUrl: 'img/orgs/curlsask.png',
  },
  {
    title: 'Curling Alberta',
    link: 'ab.curling.io',
    imageUrl: 'img/orgs/curling-alberta.png',
  },
  {
    title: 'Curl Manitoba',
    link: 'mb.curling.io',
    imageUrl: 'img/orgs/curl-manitoba.png',
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Org({ title, link, imageUrl }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <a
      href={'https://' + link}
      target="_blank"
      title={title}
      className="featuredOrg"
    >
      <img src={imgUrl} alt={title} width="96" />
    </a>
  );
}

function CurlingClubManagementSoftware() {
  return (
    <Layout
      title="Curling Club Management Software"
      description="All-in-one curling club management software. Online registration and payments, league management, club website, accounting, rental bookings, and waivers. Trusted by Curling Canada, every provincial association, and hundreds of clubs."
    >
      <Head>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'Curling IO',
            url: 'https://curling.io',
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Web',
            description:
              'All-in-one curling club management software. Online registration and payments, league management, club website, accounting, rental bookings, and waivers. Trusted by Curling Canada and hundreds of clubs.',
            featureList: [
              'Online registration and payments',
              'League and bonspiel management',
              'Club website hosting',
              'Accrual accounting with QuickBooks/Xero/Sage export',
              'Rental and ice bookings',
              'Online waivers',
              'Live scoring',
              'Round robin and playoff bracket generation',
            ],
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'CAD',
              description:
                'Free with offline payments. Online payments as low as 2.7% + $0.30 per transaction with no setup or monthly fees.',
            },
          })}
        </script>
      </Head>

      {/* Hero */}
      <header className={clsx('hero heroBanner_1SbS', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Curling Club Management Software</h1>
          <p className="hero__subtitle">
            One platform for registration, leagues, your website, accounting,
            bookings, and waivers. Built specifically for curling clubs.
          </p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--primary button--lg',
                styles.getStarted
              )}
              to={useBaseUrl('docs/getting-started/curling-club-managers')}
            >
              Get Started →
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Problem Statement */}
        <div className="sectionDark">
          <div className="container padding-vert--lg">
            <div className="row">
              <div className="col col--10 col--offset-1">
                <div className="margin-vert--md text--center">
                  <h2 className="sectionDarkTitle">
                    Most clubs piece together spreadsheets, a separate website,
                    a payment tool, and maybe an accounting package. None of
                    them talk to each other, and none of them know what a
                    bonspiel is.
                  </h2>
                  <p className="sectionDarkTitle" style={{ fontSize: '1.1rem', fontWeight: 'normal' }}>
                    Curling IO replaces all of that with a single platform built
                    for curling. Draws, ends, hammer, sheets, positions. It
                    speaks your language because it was built by curlers, for
                    curlers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Pricing */}
        <section className={styles.pricing}>
          <div className="container">
            <h2>Simple, Transparent Pricing</h2>
            <p>No setup fees. No monthly fees. No contracts.</p>
            <div className={styles.pricingGrid}>
              <div className={styles.pricingCard}>
                <h3>Offline Payments</h3>
                <div className={styles.pricingAmount}>Free</div>
                <p>
                  Use Curling IO at no cost if you collect payments outside the
                  platform (cash, cheques, e-transfers).
                </p>
              </div>
              <div className={styles.pricingCard}>
                <h3>Online Payments</h3>
                <div className={styles.pricingAmount}>2.7% + $0.30</div>
                <p>
                  Per transaction. Includes credit card processing fees. Nothing
                  else to pay.
                </p>
              </div>
            </div>
            <p className="margin-top--lg">
              <Link to={useBaseUrl('docs/getting-started/pricing')}>
                See full pricing details →
              </Link>
            </p>
          </div>
        </section>

        {/* Trust Signals */}
        <div className="sectionUsedBy">
          <div className="container padding-vert--lg">
            <div className="row">
              <div className="col col--10 col--offset-1">
                <div className="margin-vert--lg text--center">
                  <h2>
                    Trusted by Curling Canada, Every Provincial Association, and
                    Hundreds of Clubs
                  </h2>
                  <p className="hero__subtitle">
                    Over 1 million registrations processed. From small town clubs
                    to national championships, Curling IO is the platform
                    Canadian curling runs on.
                  </p>
                  <div className="featured_clubs">
                    {orgs.map((props, idx) => (
                      <Org key={idx} {...props} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="testimonials">
              {testimonials.map((t, idx) => (
                <div key={idx} className="testimonial">
                  <blockquote>"{t.quote}"</blockquote>
                  <div className="testimonial-author">
                    {t.author}, {t.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Footer */}
        <div className={styles.ctaFooter}>
          <div className="container padding-vert--lg">
            <h2>Ready to Get Started?</h2>
            <p>
              Set up takes about a day. We will walk you through it.
            </p>
            <Link
              className="button button--primary button--lg"
              to={useBaseUrl('docs/getting-started/curling-club-managers')}
            >
              Read the Getting Started Guide →
            </Link>
            <br />
            <a
              className={styles.ctaLink}
              href="https://curling.io/en/book-onboarding"
              target="_blank"
            >
              Or book a free onboarding session →
            </a>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default CurlingClubManagementSoftware;
