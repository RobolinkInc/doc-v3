// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Robolink Documentation',
  tagline: 'Robolink docs',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.robolink.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'RobolinkInc', // Usually your GitHub org/user name.
  projectName: 'doc-v3', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

   // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'
    //'ko','ja'
    ],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      }
      // ko: {
      //   htmlLang: 'ko-KR',
      //   label: '한글 Korean', 
      // }
      // ja: {
      //   htmlLang: 'ja-JP',
      //   label: '日本語 Japanese',
      // }
    },
  },

  customFields: {
    prism: {
      additionalLanguages: ['python'],
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/RobolinkInc/doc-v3/tree/main/docs/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-5CJZ80X5XG',
          anonymizeIP: true,
        },
        
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        { name: 'google-site-verification', content: 'JtmgM64m0UrRkixkUBQabzDd4wZcyI5hL8o6czvikJk' },
      ],
      prism: {
        additionalLanguages: ['python'],
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        style: 'dark',
        hideOnScroll: false,
        logo: {
          alt: 'Robolink Logo',
          src: 'img/R-docs-logo.png',
        },
        items: [
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            label: 'Go to Lessons',
            href: 'https://learn.robolink.com/',
            position: 'right',
          },
        ],
      },
      algolia: {
        appId: "NP2KO51EQJ",
        // Public API key: it is safe to commit it
        apiKey: "fd336bc97e375286213ed1fdd5a71128",
        indexName: "robolink",
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: false,
        // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
        insights: false,
        debug: false, 
        container: "div",
      },
      footer: {
        style: 'dark',
        copyright: 
        `<div class="footer-wrap">
          <div class="footerBox" id="footerBox">
            <img id="imgFooter" src="/img/R-footer-logo.svg" />
            <span>8920 Kenamar Dr, Suite 209, San Diego, CA 92121 | +1 (858) 876-5123</span>
          </div>
          <div class="box" id="box">
            <div>
              <a role="button" id="popupBtn" onclick="openModalFooter()"> Robolink Help&nbsp;</a> |
                    <div id="modalWrap_footer">
                        <div id="modalContent">
                            <div id="modalBody">
                                <div>
                                    <span id="popup_text">
                                        You are leaving Robolink’s 
                                        Documentation site. Please be 
                                        aware that any website 
                                        outside of our Document 
                                        page will be subject to 
                                        privacy policies different 
                                        from this website.
                                    </span>
                                </div>
                                <br>
                                <div class="popup_div">
                                    <a id="popup_stay" href="#" onclick="closeModalFooter()">Stay on this site</a>
                                </div>
                                <br>
                                <div class="popup_div">
                                    <button type="button" id="popup_go" onclick="location.href='https://robolink.helpdocs.io/'">Continue to external site</button>
                                </div>
                            </div>
                        </div>
                    </div>
              <a href="/docs/terms-of-use"> &nbsp;Terms of use&nbsp;</a> |
              <a href="/docs/privacy-policy"> &nbsp;Privacy</a>
            </div>
          </div>
        </div>`,
      },
    }),
    plugins: [
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
    scripts: [
      '/custom.js', 
      'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js',
    ],
};

module.exports = config;
