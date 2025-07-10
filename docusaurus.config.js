module.exports = {
  title: 'Curling IO',
  tagline: 'Curling registration and league management made easy.',
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
  ],
  themeConfig: {
    colorMode: {
      disableSwitch: true,
    },
    image: 'img/curlingio-logo-small.png',
    algolia: {
      appId: 'BH4D9OD16A',
      apiKey: 'b0ed2c7d4e5d796e576b812c1b2ad234',
      indexName: 'curling',
    },
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
              label: 'Feedback',
              href: 'https://curling.canny.io/',
            },
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
              label: 'Terms',
              to: 'terms',
            },
            {
              label: 'Privacy',
              to: 'privacy',
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
