// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Fanvil Knowledge Base',
  tagline: 'Official Support Center for Fanvil A&V-IoT Devices',
  favicon: 'img/favicon.ico',

  url: 'https://lilaeyron-a11y.github.io',
  baseUrl: '/my-kb/',

  organizationName: 'lilaeyron-a11y',
  projectName: 'my-kb',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en'],
        highlightSearchTermsOnTargetPage: true,
        searchResultLimits: 8,
        searchBarShortcutHint: false,
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          showLastUpdateTime: true,
          showLastUpdateAuthor: false,
          breadcrumbs: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/fanvil-social-card.jpg',
      metadata: [
        { name: 'keywords', content: 'Fanvil, IP Phone, VoIP, SIP, knowledge base, support, manual, firmware' },
      ],
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: '',
        logo: {
          alt: 'Fanvil Logo',
          src: 'img/fanvil-logo.png',
          srcDark: 'img/fanvil-logo-white.png',
          href: '/',
          width: 120,
        },
        items: [
          {
            type: 'dropdown',
            label: 'IP Phones',
            position: 'left',
            items: [
              { label: '🖥️ X Series – Call Center & Enterprise', to: '/docs/ip-phones/x-series/overview' },
              { label: '💼 V Series – Business IP Phones', to: '/docs/ip-phones/v-series/overview' },
              { label: '🏨 H Series – Hotel IP Phones', to: '/docs/ip-phones/h-series/overview' },
              { label: '⚡ XU Series – High-End IP Phones', to: '/docs/ip-phones/xu-series/overview' },
              { label: '📱 A Series – Android Touch Screen', to: '/docs/ip-phones/a-series/overview' },
            ],
          },
          {
            type: 'dropdown',
            label: 'Security Products',
            position: 'left',
            items: [
              { label: '🚪 Door Phones', to: '/docs/security-products/door-phones' },
              { label: '🏠 Indoor Stations', to: '/docs/security-products/indoor-stations' },
              { label: '🔒 Access Control', to: '/docs/security-products/access-control' },
              { label: '📡 SIP Speakers & Paging', to: '/docs/security-products/sip-speakers' },
            ],
          },
          {
            type: 'dropdown',
            label: 'Integrations',
            position: 'left',
            items: [
              { label: '3CX Solution', to: '/docs/integrations/3cx' },
              { label: 'Microsoft Teams', to: '/docs/integrations/teams' },
              { label: 'Zoom Solution', to: '/docs/integrations/zoom' },
              { label: 'Auto Provisioning (FDPS)', to: '/docs/getting-started/auto-provisioning' },
            ],
          },
          {
            label: 'Getting Started',
            to: '/docs/getting-started/quick-start',
            position: 'left',
          },
          {
            label: 'FAQ',
            to: '/docs/faq/general',
            position: 'left',
          },
          {
            href: 'https://fanvil.com/service/doc/index.html',
            label: 'Downloads',
            position: 'right',
          },
          {
            href: 'https://fanvil.com',
            label: 'Fanvil.com',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Knowledge Base',
            items: [
              { label: 'Getting Started', to: '/docs/getting-started/quick-start' },
              { label: 'X Series IP Phones', to: '/docs/ip-phones/x-series/overview' },
              { label: 'Security Products', to: '/docs/security-products/door-phones' },
              { label: 'FAQ', to: '/docs/faq/general' },
              { label: 'Release Notes', to: '/docs/release-notes/latest' },
            ],
          },
          {
            title: 'Products',
            items: [
              { label: 'SIP Phones', href: 'https://fanvil.com/products/p1/index.html' },
              { label: 'Security Industry', href: 'https://fanvil.com/products/p5/index.html' },
              { label: '2-Wire Products', href: 'https://fanvil.com/products/2/index.html' },
              { label: 'Headsets', href: 'https://fanvil.com/products/headset/index.html' },
              { label: 'LINKVIL Wireless', href: 'https://fanvil.com/products/linkvil.aspx' },
            ],
          },
          {
            title: 'Support',
            items: [
              { label: 'Download Center', href: 'https://fanvil.com/service/doc/index.html' },
              { label: 'Help Center', href: 'https://fanvil.com/service/help/index.html' },
              { label: 'Security Center', href: 'https://fanvil.com/service/security/index.html' },
              { label: 'Submit a Ticket', href: 'https://fanvil.com/service/help/index.html' },
              { label: 'Contact Us', href: 'https://fanvil.com/contactus/index.html' },
            ],
          },
          {
            title: 'Company',
            items: [
              { label: 'About Fanvil', href: 'https://fanvil.com/aboutus/2046.html' },
              { label: 'Partner Portal', href: 'https://fanvil.com/partners/partnerportal.html' },
              { label: 'Become a Partner', href: 'https://fanvil.com/partners/reg.html' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/company/fanvil-technology-co-ltd/' },
              { label: 'YouTube', href: 'https://www.youtube.com/channel/UC798Y_jUEU73hkiTtKHanFw' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Fanvil Link Technology Co., Ltd. All rights reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'ini', 'yaml'],
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
    }),
};

export default config;