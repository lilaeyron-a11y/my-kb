// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Aeyron Docs Portfolio',
  tagline: 'Technical Writing · Documentation Architecture · Docs-as-Code',
  favicon: 'img/favicon.ico',
  url: 'https://lilaeyron-a11y.github.io',
  baseUrl: '/my-kb/',
  organizationName: 'lilaeyron-a11y',
  projectName: 'my-kb',
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
      title: 'Aeyron',
      logo: {
        alt: 'Aeyron',
        src: 'img/logo.svg',
        srcDark: 'img/logo-dark',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'portfolioSidebar',
          position: 'left',
          label: 'Portfolio',
        },
        {
          type: 'docSidebar',
          sidebarId: 'knowledgeSidebar',
          position: 'left',
          label: 'Knowledge Base',
        },
        {
          type: 'docSidebar',
          sidebarId: 'learningSidebar',
          position: 'left',
          label: 'Roadmap',
        },
        {
          type: 'docSidebar',
          sidebarId: 'docsLabSidebar',
          position: 'left',
          label: 'Docs Lab',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/lilaeyron-a11y/my-kb',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Portfolio',
          items: [
            { label: 'Overview', to: '/docs/portfolio/intro' },
            { label: 'Documentation Case Study', to: '/docs/portfolio/documentation-system-case-study' },
            { label: 'API Docs Sample', to: '/docs/portfolio/api-docs-sample' },
          ],
        },
        {
          title: 'Knowledge Base',
          items: [
            { label: 'Technical Writing', to: '/docs/knowledge/technical-writing' },
            { label: 'Diataxis', to: '/docs/knowledge/diataxis' },
            { label: 'Docs-as-Code', to: '/docs/knowledge/docs-as-code' },
          ],
        },
        {
          title: 'Career',
          items: [
            { label: 'Learning Roadmap', to: '/docs/learning-roadmap/overview' },
            { label: 'Skills Stack', to: '/docs/learning-roadmap/skills-stack' },
            { label: 'GitHub', href: 'https://github.com/lilaeyron-a11y/my-kb' },
          ],
        },
      ],
      copyright: `Copyright ${new Date().getFullYear()} Aeyron. Built with Docusaurus as a technical writing portfolio and knowledge base.`,
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
          editUrl: 'https://github.com/lilaeyron-a11y/my-kb/tree/main/',
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
