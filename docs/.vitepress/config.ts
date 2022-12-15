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

const guideNav = [{ text: 'Guide', items: [{ text: 'Get Started', link: '/guide/' }] }]

const versionNav = [
  {
    text: `${version}`,
    items: [{ text: 'CHANGELOG', link: '/guide/CHANGELOG' }]
  }
]

const docsNav = [...guideNav, ...navBar, ...versionNav]

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
