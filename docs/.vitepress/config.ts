import { defineConfig, DefaultTheme } from 'vitepress';
import { componentPreview, containerPreview } from '@vitepress-demo-preview/plugin';

import sidebar from '../side-bar';
import navbar from '../nav-bar';

const defaultSidebar = [
  {
    text: 'Guide',
    items: [
      { text: 'Get Started', link: '/guide/' },
      { text: 'Create Function', link: '/guide/devFunction' },
      { text: 'Contribution', link: '/guide/contribution' },
    ],
  },
];

const docsSidebar = [...defaultSidebar, ...sidebar];

const guideNavbar = [{ text: 'Guide', items: [{ text: 'Get Started', link: '/guide/' }] }];

const changelogNavbar = [
  {
    text: `CHANGELOG`,
    link: '/guide/CHANGELOG',
  },
];

const navbarModules = navbar.map((module: DefaultTheme.NavItemWithLink) => {
  return {
    text: `${module.text} Functions`,
    link: module.link,
  };
});

const docsNavbar = [...guideNavbar, { text: 'Modules', items: navbarModules }, ...changelogNavbar];

export default defineConfig({
  base: '/',
  title: '@flypeng/tool',
  description: 'Integrate a collection of common tools and methods',
  lastUpdated: true,
  markdown: {
    config(md) {
      md.use(componentPreview);
      md.use(containerPreview);
    },
  },
  themeConfig: {
    nav: docsNavbar,
    sidebar: docsSidebar,
    socialLinks: [{ icon: 'github', link: 'https://github.com/flingyp/flypeng-tool' }],
    search: {
      provider: 'local',
    },
    outline: {
      label: '大纲',
      level: [2, 3],
    },
    editLink: {
      pattern: 'https://github.com/flingyp/flypeng-tool/blob/dev/docs/:path',
      text: 'Edit this p,age on GitHub',
    },
    lastUpdatedText: 'Last updated',
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present FlingYP',
    },
  },
});
