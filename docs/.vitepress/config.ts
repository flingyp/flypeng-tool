import { defineConfig, DefaultTheme } from 'vitepress'
import { componentPreview, containerPreview } from '@vitepress-demo-preview/plugin'
import { version } from '../info'

// @ts-ignore
import sideBar from '../side-bar'
// @ts-ignore
import navBar from '../nav-bar'

const defaultSideBar = [
  {
    text: 'Guide',
    items: [
      { text: 'Get Started', link: '/guide/' },
      { text: 'Dev Function', link: '/guide/devFunction' },
      { text: 'Contributing', link: '/guide/contributing' }
    ]
  }
]

const docsSideBar = [...defaultSideBar, ...sideBar]

const guideNav = [{ text: 'Guide', items: [{ text: 'Get Started', link: '/guide/' }] }]

const versionNav = [
  {
    text: `${version}`,
    items: [{ text: 'CHANGELOG', link: '/guide/CHANGELOG' }]
  }
]

const navBarModules = navBar.map((module: DefaultTheme.NavItemWithLink) => {
  return {
    text: `${module.text} Functions`,
    link: module.link
  }
})

const docsNav = [...guideNav, { text: 'Modules', items: navBarModules }, ...versionNav]

export default defineConfig({
  base: '/flypeng-tool',
  title: '@flypeng/tool',
  description: 'Integrate a collection of common tools and methods',
	lastUpdated: true,
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    },
    config(md) {
      md.use(componentPreview)
      md.use(containerPreview)
    }
  },
  themeConfig: {
    nav: docsNav,
    sidebar: docsSideBar,
    socialLinks: [{ icon: 'github', link: 'https://github.com/flingyp/flypeng-tool' }],
    algolia: {
      appId: '6A1G108YH0',
      apiKey: '4aa61b9b99dd99e9bf22e1fa06a15969',
      indexName: '@flypeng tool',
      placeholder: 'Search docs',
      buttonText: 'Search'
    },
    editLink: {
      pattern: 'https://github.com/flingyp/flypeng-tool/blob/dev/docs/:path',
      text: 'Edit this p,age on GitHub'
    },
    lastUpdatedText: 'Last updated',
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present FlingYP'
    }
  }
})
