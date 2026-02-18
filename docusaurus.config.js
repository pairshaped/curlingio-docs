const defaultAlgoliaAppId = '56JJO2SJ1B';
const defaultAlgoliaIndexName = 'curling';
const defaultAlgoliaApiKey = 'd4c292bfdc67172d839f0f3a6da64bfb';

const resolvedAlgoliaAppId = process.env.ALGOLIA_APP_ID || defaultAlgoliaAppId;
const resolvedAlgoliaIndexName = process.env.ALGOLIA_INDEX_NAME || defaultAlgoliaIndexName;
const resolvedAlgoliaApiKey = process.env.ALGOLIA_SEARCH_API_KEY || defaultAlgoliaApiKey;

const algoliaConfig = resolvedAlgoliaApiKey
  ? {
      appId: resolvedAlgoliaAppId,
      apiKey: resolvedAlgoliaApiKey,
      indexName: resolvedAlgoliaIndexName,
      // The DocSearch index does not include Docusaurus version facets, so disable contextual filtering.
      contextualSearch: false,
      searchParameters: {
        facetFilters: [],
      },
    }
  : undefined;

module.exports = {
  title: 'Curling IO',
  tagline: 'Curling club management made easy',
  url: 'https://curling.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  trailingSlash: false,
  organizationName: 'pairshaped', // Usually your GitHub org/user name.
  projectName: 'curlingio-docs', // Usually your repo name.
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/docs/getting-started/curling-club-managers', // string
            from: '/docs/getting-started/overview',
          },
        ],
      },
    ],
    [
      '@signalwire/docusaurus-plugin-llms-txt',
      {
        siteTitle: 'Curling IO Documentation',
        siteDescription: 'Comprehensive documentation for Curling IO - curling registration and league management platform',
        depth: 2,
        content: {
          includeDocs: true,
          includeBlog: true,
          includePages: true,
          enableLlmsFullTxt: true,
        },
      },
    ],
  ],
  themeConfig: {
    colorMode: {
      disableSwitch: true,
    },
    algolia: algoliaConfig,
    image: 'img/curlingio-logo-small.png',
    navbar: {
      title: 'Curling IO',
      logo: {
        alt: 'Curling IO Logo',
        src: 'img/curlingio-logo-small.png',
      },
      items: [
        {
          to: 'docs/getting-started/curling-club-managers',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'right',
        },
        {
          to: 'blog',
          label: 'Blog',
          position: 'right',
        },
        {
          href: 'https://clubs.curling.io',
          label: 'Find your Club',
          position: 'right'
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'For Clubs',
              to: 'docs/getting-started/curling-club-managers',
            },
            {
              label: 'For Curlers',
              to: 'docs/for-curlers/how-do-i-login',
            },
            {
              label: 'Tutorial Videos',
              href: 'https://www.youtube.com/@curlingio',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/curlingio',
            },
            {
              label: 'Curling Canada',
              href: 'https://curling.ca',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'Terms',
              to: 'terms',
            },
            {
              label: 'Privacy',
              to: 'privacy',
            },
            {
              label: 'Curling Schedules',
              href: 'https://curlingschedules.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Curling IO`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          blogTitle: 'Curling IO Dev Blog',
          blogDescription: 'Developer insights on building and enhancing Curling IO - architecture, features, and lessons learned',
          postsPerPage: 10,
          blogSidebarTitle: 'Recent posts',
          blogSidebarCount: 'ALL',
          showReadingTime: true,
          feedOptions: {
            type: 'all',
            title: 'Curling IO Dev Blog',
            description: 'Developer insights on building and enhancing Curling IO',
            copyright: `Copyright © ${new Date().getFullYear()} Curling IO`,
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
        gtag: {
          trackingID: 'AW-1016652572',
          anonymizeIP: false,
        },
      },
    ],
  ]
};
