// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Nexora IoT Docs',
  tagline: 'Knowledge Base · Developer Docs · API Reference',
  favicon: 'img/favicon.ico',
  url: 'https://docs.nexora-iot.com',
  baseUrl: '/',
  organizationName: 'nexora-iot',
  projectName: 'nexora-docs',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-CN'],
  },

  themeConfig: /** @type {import('@docusaurus/preset-classic').ThemeConfig} */ ({
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: '',
      logo: {
        alt: 'Aeyron Technology',
        src: 'img/logo.svg',
        srcDark: 'img/logo-dark.svg',
        width: 200,
        height: 200,
      },
      items: [
        {
    type: 'docSidebar',
    sidebarId: 'gettingStartedSidebar',
    position: 'left',
    label: 'Getting Started',
  },
  {
    type: 'docSidebar',
    sidebarId: 'productsSidebar',
    position: 'left',
    label: 'Products',
  },
  {
    type: 'docSidebar',
    sidebarId: 'learnSidebar',
    position: 'left',
    label: 'Learn',
  },
  {
    type: 'docSidebar',
    sidebarId: 'supportSidebar',
    position: 'left',
    label: 'Support',
  },
  {
    type: 'docSidebar',
    sidebarId: 'apiSidebar',
    position: 'left',
    label: 'API',
  },
  {
    type: 'localeDropdown',
    position: 'right',
  },
  {
    href: 'https://github.com/aeyron-tech',
    label: 'GitHub',
    position: 'right',
  },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            { label: 'Getting Started', to: '/docs/getting-started/intro' },
            { label: 'API Reference', to: '/docs/api/overview' },
            { label: 'Release Notes', to: '/docs/release-notes/latest' },
          ],
        },
        {
          title: 'Products',
          items: [
            { label: 'Smart Gateway', to: '/docs/products/smart-gateway/overview' },
            { label: 'Door Phone', to: '/docs/products/door-phone/overview' },
            { label: 'Indoor Station', to: '/docs/products/indoor-station/overview' },
          ],
        },
        {
          title: 'Company',
          items: [
            { label: 'About Nexora', href: 'https://nexora-iot.com/about' },
            { label: 'Support', href: 'https://nexora-iot.com/support' },
            { label: 'Contact', href: 'mailto:support@nexora-iot.com' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Nexora IoT Technology Co., Ltd. Documentation maintained by Aeyron.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'yaml', 'python', 'http'],
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
  }),

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/nexora-iot/nexora-docs/tree/main/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          breadcrumbs: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['en', 'zh'],
        indexBlog: false,
        docsRouteBasePath: '/docs',
        searchResultLimits: 8,
        searchBarShortcutHint: true,
      },
    ],
  ],
};

export default config;