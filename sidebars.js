/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {

  gettingStartedSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/intro',
        'getting-started/prerequisites',
        'getting-started/quickstart',
        'getting-started/faq',
      ],
    },
  ],

  productsSidebar: [
    {
      type: 'category',
      label: 'Products',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Headphones',
          collapsed: false,
          items: [
            'products/headphones/overview',
            'products/headphones/models',
            {
              type: 'category', label: 'AH-1',
              items: ['products/headphones/AH-1/datasheet','products/headphones/AH-1/quick-install-guide','products/headphones/AH-1/user-manual'],
            },
            {
              type: 'category', label: 'AH-2',
              items: ['products/headphones/AH-2/datasheet','products/headphones/AH-2/quick-install-guide','products/headphones/AH-2/user-manual'],
            },
            {
              type: 'category', label: 'AH-3',
              items: ['products/headphones/AH-3/datasheet','products/headphones/AH-3/quick-install-guide','products/headphones/AH-3/user-manual'],
            },
            {
              type: 'category', label: 'AH-4',
              items: ['products/headphones/AH-4/datasheet','products/headphones/AH-4/quick-install-guide','products/headphones/AH-4/user-manual'],
            },
            {
              type: 'category', label: 'AH-5',
              items: ['products/headphones/AH-5/datasheet','products/headphones/AH-5/quick-install-guide','products/headphones/AH-5/user-manual'],
            },
          ],
        },
        {
          type: 'category',
          label: 'Mouse',
          collapsed: true,
          items: [
            'products/mouse/overview',
            'products/mouse/models',
            {
              type: 'category', label: 'AM-1',
              items: ['products/mouse/AM-1/datasheet','products/mouse/AM-1/quick-install-guide','products/mouse/AM-1/user-manual'],
            },
            {
              type: 'category', label: 'AM-2',
              items: ['products/mouse/AM-2/datasheet','products/mouse/AM-2/quick-install-guide','products/mouse/AM-2/user-manual'],
            },
            {
              type: 'category', label: 'AM-3',
              items: ['products/mouse/AM-3/datasheet','products/mouse/AM-3/quick-install-guide','products/mouse/AM-3/user-manual'],
            },
            {
              type: 'category', label: 'AM-4',
              items: ['products/mouse/AM-4/datasheet','products/mouse/AM-4/quick-install-guide','products/mouse/AM-4/user-manual'],
            },
            {
              type: 'category', label: 'AM-5',
              items: ['products/mouse/AM-5/datasheet','products/mouse/AM-5/quick-install-guide','products/mouse/AM-5/user-manual'],
            },
          ],
        },
        {
          type: 'category',
          label: 'Keyboard',
          collapsed: true,
          items: [
            'products/keyboard/overview',
            'products/keyboard/models',
            {
              type: 'category', label: 'AK-1',
              items: ['products/keyboard/AK-1/datasheet','products/keyboard/AK-1/quick-install-guide','products/keyboard/AK-1/user-manual'],
            },
            {
              type: 'category', label: 'AK-2',
              items: ['products/keyboard/AK-2/datasheet','products/keyboard/AK-2/quick-install-guide','products/keyboard/AK-2/user-manual'],
            },
            {
              type: 'category', label: 'AK-3',
              items: ['products/keyboard/AK-3/datasheet','products/keyboard/AK-3/quick-install-guide','products/keyboard/AK-3/user-manual'],
            },
            {
              type: 'category', label: 'AK-4',
              items: ['products/keyboard/AK-4/datasheet','products/keyboard/AK-4/quick-install-guide','products/keyboard/AK-4/user-manual'],
            },
            {
              type: 'category', label: 'AK-5',
              items: ['products/keyboard/AK-5/datasheet','products/keyboard/AK-5/quick-install-guide','products/keyboard/AK-5/user-manual'],
            },
          ],
        },
      ],
    },
  ],

  learnSidebar: [
    {
      type: 'category',
      label: 'Learn',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Tutorials',
          collapsed: false,
          items: [
            'learn/tutorials/pairing-headphones',
            'learn/tutorials/setting-up-mouse',
            'learn/tutorials/configuring-keyboard',
          ],
        },
        {
          type: 'category',
          label: 'How-to Guides',
          collapsed: false,
          items: [
            'learn/how-to/update-firmware',
            'learn/how-to/customize-dpi',
            'learn/how-to/remap-keys',
            'learn/how-to/eq-settings',
          ],
        },
        {
          type: 'category',
          label: 'Explanation',
          collapsed: false,
          items: [
            'learn/explanation/wireless-technology',
            'learn/explanation/battery-management',
            'learn/explanation/switch-types',
          ],
        },
        {
          type: 'category',
          label: 'Reference',
          collapsed: false,
          items: [
            'learn/reference/specifications-glossary',
            'learn/reference/led-indicators',
            'learn/reference/compatibility',
          ],
        },
      ],
    },
  ],

  supportSidebar: [
    {
      type: 'category',
      label: 'Support',
      collapsed: false,
      items: [
        'support/faq',
        {
          type: 'category',
          label: 'Troubleshooting',
          collapsed: false,
          items: [
            'support/troubleshooting/headphones',
            'support/troubleshooting/mouse',
            'support/troubleshooting/keyboard',
          ],
        },
        'support/warranty',
        'support/contact',
      ],
    },
  ],

  apiSidebar: [
    {
      type: 'category',
      label: 'API Reference',
      collapsed: false,
      items: [
        'api/overview',
        'api/authentication',
        'api/devices',
        'api/firmware',
        'api/errors',
      ],
    },
  ],

};

export default sidebars;