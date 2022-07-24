import { defineConfig } from 'vitepress'

// @ts-ignore
import sideBar from '../sideBar'

const defaultSideBar = [
  {
    text: 'Guide',
    items: [{ text: 'Get Started', link: '/guide/' }]
  }
]

const docsSideBar = [...defaultSideBar, ...sideBar]

export default defineConfig({
  title: '@flypeng/tool',
  description: 'Integrate a collection of common tools and methods',
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark'
    }
  },
  themeConfig: {
    nav: [{ text: 'Guide', items: [{ text: 'Get Started', link: '/guide/' }] }],
    sidebar: docsSideBar,
    socialLinks: [{ icon: 'github', link: 'https://github.com/flingyp/-flingyp-util' }]
  }
})
