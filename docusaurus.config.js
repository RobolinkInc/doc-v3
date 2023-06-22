// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Robolink Documentation',
  tagline: 'easy to understand',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/doc-v3/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

   // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ko'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-999X9XX9XX',
          anonymizeIP: true,
        },
        
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'My Site',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            position: 'right',
            label: 'CoDrone EDU',
            to: '/docs/CoDroneEDU/',
          }, 
          {
            position: 'right',
            label: 'Zumi',
            to: '/docs/Zumi/',
          },  
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Help',
            items: [
              {
                label: 'Robolink Help',
                href: 'https://robolink.helpdocs.io/',
              },
            ],
          },
          {
            title: 'Learning',
            items: [
              {
                label: 'Robolink Basecamp',
                href: 'https://learn.robolink.com/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/RobolinkInc/doc-v3',
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    plugins: [
      './node_modules/docusaurus-lunr-search',
      [
        '@docusaurus/plugin-pwa',
        {
          pwaHead: [
            {
              tagName: 'link',
              rel: 'icon',
              href: '/img/docusaurus.png',
            },
            {
              tagName: 'link',
              rel: 'manifest',
              href: '/manifest.json',
            },
            {
              tagName: 'meta',
              name: 'theme-color',
              content: 'rgb(37, 194, 160)',
            },
            {
              tagName: 'meta',
              name: 'apple-mobile-web-app-capable',
              content: 'yes',
            },
            {
              tagName: 'meta',
              name: 'apple-mobile-web-app-status-bar-style',
              content: '#000',
            },
            {
              tagName: 'link',
              rel: 'apple-touch-icon',
              href: '/img/docusaurus.png',
            },
            {
              tagName: 'link',
              rel: 'mask-icon',
              href: '/img/docusaurus.svg',
              color: 'rgb(37, 194, 160)',
            },
            {
              tagName: 'meta',
              name: 'msapplication-TileImage',
              content: '/img/docusaurus.png',
            },
            {
              tagName: 'meta',
              name: 'msapplication-TileColor',
              content: '#000',
            },
          ],
        },
      ],
    ],
};

module.exports = config;
