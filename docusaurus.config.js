module.exports = {
  title: 'Curling I/O',
  tagline: 'Curling registration and league management made easy.',
  // url: 'https://curling.io',
  url: 'https://docs.curling.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'pairshaped', // Usually your GitHub org/user name.
  projectName: 'curlingio-docs', // Usually your repo name.
  themeConfig: {
    colorMode: {
      disableSwitch: true,
    },
    image: 'img/curlingio-logo-small.png',
    googleAnalytics: {
      trackingID: 'UA-180808279-1',
    },
    navbar: {
      title: 'Curling I/O',
      logo: {
        alt: 'Curling I/O Logo',
        src: 'img/curlingio-logo-small.png',
      },
      items: [
        {
          to: 'docs/getting-started/first-steps',
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
              to: 'docs/getting-started/first-steps',
            },
            {
              label: 'For Curlers',
              to: 'docs/for-curlers/how-do-i-login',
            },
            {
              label: 'Tutorial Videos',
              href: 'https://www.youtube.com/channel/UChVVi0PxRcavHZO-CCwrT5A',
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
      copyright: `Copyright © ${new Date().getFullYear()} Curling I/O`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/pairshaped/curlingio-docs/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          cacheTime: 600 * 1000, // 600 sec - cache purge period
          changefreq: 'weekly',
          priority: 0.5,
          trailingSlash: false,
        }
      },
    ],
  ]
};
