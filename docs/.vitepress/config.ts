import { defineConfig } from 'vitepress'
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

const defaultNav = [{ text: 'Guide', items: [{ text: 'Get Started', link: '/guide/' }] }]

const defaultVersionNav = [
  {
    text: `${version}`,
    items: [{ text: 'CHANGELOG.md', link: 'https://github.com/flingyp/flypeng-tool/blob/dev/CHANGELOG.md' }]
  }
]

const docsNav = [...defaultNav, ...navBar, ...defaultVersionNav]

export default defineConfig({
  base: '/flypeng-tool',
  title: '@flypeng/tool',
  description: 'Integrate a collection of common tools and methods',
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
    socialLinks: [{ icon: 'github', link: 'https://github.com/flingyp/-flingyp-util' }]
  }
})
