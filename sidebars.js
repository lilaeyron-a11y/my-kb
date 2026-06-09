/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  portfolioSidebar: [
    {
      type: 'category',
      label: 'Portfolio',
      collapsed: false,
      items: [
        'portfolio/intro',
        'portfolio/documentation-system-case-study',
        'portfolio/api-docs-sample',
        'portfolio/ux-writing-sample',
      ],
    },
  ],

  knowledgeSidebar: [
    {
      type: 'category',
      label: 'Knowledge Base',
      collapsed: false,
      items: [
        'knowledge/technical-writing',
        'knowledge/diataxis',
        'knowledge/dita',
        'knowledge/api-documentation',
        'knowledge/docs-as-code',
        'knowledge/ai-documentation',
      ],
    },
  ],

  learningSidebar: [
    {
      type: 'category',
      label: 'Learning Roadmap',
      collapsed: false,
      items: [
        'learning-roadmap/overview',
        'learning-roadmap/skills-stack',
        'learning-roadmap/career-notes',
      ],
    },
  ],

  docsLabSidebar: [
    {
      type: 'category',
      label: 'Corporate Documentation Lab',
      collapsed: false,
      items: [
        'docs-lab/overview',
        {
          type: 'category',
          label: 'Getting Started',
          collapsed: true,
          items: [
            'getting-started/intro',
            'getting-started/prerequisites',
            'getting-started/quickstart',
            'getting-started/faq',
          ],
        },
        {
          type: 'category',
          label: 'Products',
          collapsed: true,
          items: [
            'products/headphones/overview',
            'products/mouse/overview',
            'products/keyboard/overview',
            'products/smart-gateway/overview',
            'products/door-phone/overview',
          ],
        },
        {
          type: 'category',
          label: 'Learn by Diataxis',
          collapsed: true,
          items: [
            'learn/tutorials/pairing-headphones',
            'learn/how-to/update-firmware',
            'learn/explanation/wireless-technology',
            'learn/reference/specifications-glossary',
          ],
        },
        {
          type: 'category',
          label: 'Support',
          collapsed: true,
          items: [
            'support/faq',
            'support/troubleshooting/headphones',
            'support/contact',
          ],
        },
        {
          type: 'category',
          label: 'API Reference',
          collapsed: true,
          items: [
            'api/overview',
            'api/authentication',
            'api/devices',
            'api/firmware',
            'api/errors',
          ],
        },
      ],
    },
  ],
};

export default sidebars;
