import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
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
        systems to figure out, and curlers love it! <a href="https://www.youtube.com/shorts/nAbLIPHYmME" target="_blank">See for yourself.</a>
      </>
    ),
  },
  {
    title: 'No Setup or Monthly Fees!',
    imageUrl: 'img/simple_pricing.svg',
    description: (
      <>
        Our fees are simple and all inclusive.
        Online payments as low as <b>2.7% + $0.30 per transaction</b> which includes credit card processing fees, or use Curling IO free with offline payments. <a href="/docs/getting-started/pricing">Pricing details.</a>
      </>
    ),
  },
  {
    title: 'Advanced League Management',
    imageUrl: 'img/league_management.svg',
    description: (
      <>
      Manage your leagues and bonspiels with us. Assemble teams, round robins, brackets, draw schedules, score your games, and even publish your results online.
      No more spreadsheets! <a href="https://www.youtube.com/watch?v=4XoxbhRaVQM" target="_blank">Check it out.</a>
      </>
    ),
  },
  {
    title: 'Global Curler Database',
    imageUrl: 'img/national_curler_database.svg',
    description: (
      <>
        Members that have used Curling IO at any club or membership association will already have an account, making registration
        as simple as the click of a button.
      </>
    ),
  },
  {
    title: 'Secure and Stable',
    imageUrl: 'img/secure_and_stable.svg',
    description: (
      <>
        We handle tens of thousands of requests per minute without breaking a sweat, and we go above and beyond to ensure your data is secure by eliminating attack vectors like insecure passwords.
      </>
    ),
  },
  {
    title: 'Used Across North America',
    imageUrl: 'img/used_across_canada.svg',
    description: (
      <>
        Curling IO is the system of choice for Curling Canada as well as the provincial membership associations.
        You're in good hands. <a href="https://clubs.curling.io/">Find your Club.</a>
      </>
    ),
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
                  <h2 className="sectionDarkTitle">Curling IO is used by more than <u>100k</u> curlers for over <u>$19m</u> in payments last season alone. Centralized, secure, safe.</h2>
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
                  <br />
                  <p>
                    <i>
                      "After using it for over a year, I can truthfully say that it works extremely well and I would definitely recommend it."
                      <br />
                      - Curling Québec
                    </i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
