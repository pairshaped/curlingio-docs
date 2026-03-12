import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Easy to Use',
    imageUrl: 'img/easy_to_use.svg',
    description: (
      <>
        Curling IO was designed from the ground up to be easy to set up and start
        taking online registrations and payments quickly. No complicated
        systems to figure out, and curlers love it! <a href="https://www.youtube.com/playlist?list=PLewhXbqjD6VFr-WlpNC1CGEvF9UV33jLb" target="_blank">See for yourself.</a>
      </>
    ),
  },
  {
    title: 'Join Hundreds of Clubs',
    imageUrl: 'img/join_hundreds_of_clubs.svg',
    description: (
      <>
        Curling IO is trusted by Curling Canada, provincial associations, and hundreds of clubs. With over 1 million registrations, you're in good hands. <a href="https://clubs.curling.io/">Find your Club.</a>
      </>
    ),
  },
  {
    title: 'No Setup Fees!',
    imageUrl: 'img/simple_pricing.svg',
    description: (
      <>
        Our fees are simple and all inclusive.
        Online payments as low as <b>2.7% + $0.30 per transaction</b>, which includes credit card processing fees, or use Curling IO free with offline payments. <a href="/docs/getting-started/pricing">Pricing details.</a>
      </>
    ),
  },
  {
    title: 'Website Included',
    imageUrl: 'img/website_included.svg',
    description: (
      <>
        Every club gets a customizable website at no extra cost. Add your branding, publish schedules and results, and create member-only content, all integrated with your registrations. <a href="/docs/club-management/website-hosting">Learn more.</a>
      </>
    ),
  },
  {
    title: 'Advanced League Management',
    imageUrl: 'img/advanced_league_management.svg',
    description: (
      <>
      Manage your leagues and bonspiels with us. Assemble teams, round robins, brackets, draw schedules, score your games, and even publish your results online.
      No more spreadsheets! <a href="https://www.youtube.com/watch?v=4XoxbhRaVQM" target="_blank">Check it out.</a>
      </>
    ),
  },
  {
    title: 'Accounting Built-In',
    imageUrl: 'img/accounting_built_in.svg',
    description: (
      <>
        Automatic accrual accounting with double-entry bookkeeping. Track every dollar from registration to bank deposit, with seamless exports to QuickBooks, Xero, and Sage. <a href="/docs/accounting/accounting-transactions">Learn more.</a>
      </>
    ),
  },
  {
    title: 'Online Waivers',
    imageUrl: 'img/online_waivers.svg',
    description: (
      <>
        Collect liability releases and photo consents during registration. Includes Curling Canada waivers by default. No more chasing paper signatures. <a href="/docs/club-management/waivers">Learn more.</a>
      </>
    ),
  },
  {
    title: 'Rental Bookings',
    imageUrl: 'img/rental_bookings.svg',
    description: (
      <>
        Let members book ice time and rentals online with instant payment. Rent individual sheets and your lounge, prevent conflicts, and control availability, all visible on your public calendar. <a href="/docs/club-management/calendar">Learn more.</a>
      </>
    ),
  },
  {
    title: 'Secure and Stable',
    imageUrl: 'img/secure_and_stable.svg',
    description: (
      <>
        We handle tens of thousands of requests per minute without breaking a sweat, and we go above and beyond to ensure your data is secure by eliminating attack vectors <a href="/docs/for-curlers/how-do-i-login#passwordless-authentication">like insecure passwords</a>.
      </>
    ),
  },
];

const testimonials = [
  {
    quote: 'No two curling clubs operate in the same way. There are an endless multitude of different structures for leagues, programs, discounts, and so on. Curling I/O has evolved and grown for over a decade to become extremely versatile and flexible to meet the needs of our unique sport and business models. No tool comes close to Curling I/O at this time for sport registration.',
    author: 'Patrick Prade',
    title: 'Executive Director, Vancouver Curling Club Association',
  },
  {
    quote: "Stop trying to force other software onto your curling organization when it wasn't built for curling. I trust this company because they understand curling, and they also understand the fundamentals of the business side of curling.",
    author: 'Dan Baldwin',
    title: 'Executive Director of Nova Scotia Curling',
  },
  {
    quote: 'After using it for over a year, I can truthfully say that it works extremely well and I would definitely recommend it.',
    author: 'Alanna Routledge',
    title: 'Executive Director of Curling Québec',
  },
  {
    quote: "Curling IO has completely modernized our club operations. We've seen a massive boost in efficiency and improved cashflow, our members love having instant access to schedules and results, and the development team is incredibly responsive.",
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
]

function Feature({imageUrl, title, description}) {
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

function Org({title, link, imageUrl}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <a href={"https://" + link} target="_blank" title={title} className="featuredOrg">
      <img src={imgUrl} alt={title} width="96" />
    </a>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      description="Online curling registration and league management made easy.">
      <Head>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Curling IO",
            "url": "https://curling.io",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "Curling club management and registration platform. Online registration and payments, club website, rental bookings, league schedules, playoff brackets, and live scoring — designed specifically for curling clubs.",
            "featureList": [
              "Online registration and payments",
              "Club website hosting",
              "League and bonspiel management",
              "Round robin and playoff bracket generation",
              "Rental and ice bookings",
              "Live scoring",
              "Accrual accounting with QuickBooks/Xero/Sage export",
              "Online waivers",
              "National curler database"
            ],
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "CAD",
              "description": "Free with offline payments. Online payments as low as 2.7% + $0.30 per transaction with no setup or monthly fees."
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Curling IO",
            "url": "https://curling.io",
            "logo": "https://curling.io/img/curlingio-logo-small.png",
            "description": "The #1 curling club management and registration platform, trusted by Curling Canada, provincial associations, and hundreds of clubs across North America.",
            "sameAs": [
              "https://twitter.com/curlingio",
              "https://www.facebook.com/curlingio",
              "https://www.youtube.com/@curlingio"
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Review",
            "itemReviewed": {
              "@type": "SoftwareApplication",
              "name": "Curling IO",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web"
            },
            "author": {
              "@type": "Person",
              "name": "Alanna Routledge",
              "jobTitle": "Executive Director",
              "worksFor": {
                "@type": "Organization",
                "name": "Curling Québec"
              }
            },
            "reviewBody": "After using it for over a year, I can truthfully say that it works extremely well and I would definitely recommend it.",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5"
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Review",
            "itemReviewed": {
              "@type": "SoftwareApplication",
              "name": "Curling IO",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web"
            },
            "author": {
              "@type": "Person",
              "name": "Dan Baldwin",
              "jobTitle": "Executive Director",
              "worksFor": {
                "@type": "Organization",
                "name": "Nova Scotia Curling"
              }
            },
            "reviewBody": "Stop trying to force other software onto your curling organization when it wasn't built for curling. I trust this company because they understand curling, and they also understand the fundamentals of the business side of curling.",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5"
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Review",
            "itemReviewed": {
              "@type": "SoftwareApplication",
              "name": "Curling IO",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web"
            },
            "author": {
              "@type": "Person",
              "name": "Mike Buckley",
              "jobTitle": "Manager",
              "worksFor": {
                "@type": "Organization",
                "name": "Thistle-St. Andrew's Curling Club"
              }
            },
            "reviewBody": "Curling IO has completely modernized our club operations. We've seen a massive boost in efficiency and improved cashflow, our members love having instant access to schedules and results, and the development team is incredibly responsive.",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5"
            }
          })}
        </script>
      </Head>
      <header className={clsx('hero heroBanner_1SbS', styles.heroBanner)}>
        <div className="container">
          <img className="heroBannerLogo_1WJs margin-vert--md" src="img/curlingio-logo-small.png" />
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--primary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/getting-started/curling-club-managers')}>
              Learn More  →
            </Link>
          </div>
        </div>
      </header>
      <main>
        <div className="sectionDark margin-vert--md">
          <div className="container padding-vert--md">
            <div className="row">
              <div className="col col--10 col--offset-1">
                <div className="margin-vert--md text--center">
                  <h2 className="sectionDarkTitle">Online registration and payments, club website, rental bookings, league schedules, playoff brackets, and live scoring - designed specifically for curling clubs.</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
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
        <div className="sectionUsedBy">
          <div className="container padding-vert--lg">
            <div className="row">
              <div className="col col--10 col--offset-1">
                <div className="margin-vert--lg text--center">
                  <p className="hero__subtitle">Curling IO is proud to be the platform of choice for the following organizations and hundreds more.</p>
                  <div class="featured_clubs">
                    {orgs.map((props, idx) => (
                      <Org key={idx} {...props} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonials">
              {testimonials.map((t, idx) => (
                <div key={idx} className="testimonial">
                  <blockquote>"{t.quote}"</blockquote>
                  <div className="testimonial-author">{t.author}, {t.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
