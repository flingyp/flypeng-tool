---
layout: home
sidebar: false

hero:
  name: '@flypeng/tool'
  text: Collection of Utils
  tagline: Integrate a collection of common tools and methods
  image:
    src: /favicon.png
    alt: '@flypeng/tool'
  actions:
    - theme: brand
      text: Get Started
      link: /guide/
    - theme: alt
      text: View on GitHub
      link: https://github.com/flingyp/-flingyp-util

features:
  - title: 工具方法丰富
    details: 各种各样常用方法集成，供你选择
    icon: 🦾
  - title: 无缝兼容
    details: 可在原生JS、Vue、React等多种环境工作
    icon: 🚀
  - title: 类型支持
    details: 使用TypeScript编写，提供类型提示
    icon: ⚡
  - title: 测试覆盖
    details: 使用vitest来进行工具方法测试，测试覆盖率拉满
    icon: 🛠
  - title: 不依赖其他工具
    details: 无需任何捆绑程序
    icon: ☁️
  - title: VitePress 文档
    details: 工具方法文档介绍，附带Demo演示
    icon: 🎪
---


<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/57666140?v=4',
    name: 'flingyp',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/flingyp' },
    ]
  },
	{
		avatar: 'https://avatars.githubusercontent.com/u/87807886?v=4',
    name: 'briver0825',
    title: 'Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/briver0825' },
    ]
	}
]
</script>

<div style="margin-top: 120px">
	<VPTeamMembers size="small" :members="members" />
</div>
