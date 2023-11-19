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
  - title: 工具函数丰富
    details: 常用业务工具函数
    icon: 🦾
  - title: 类型支持
    details: 提供良好的类型提示
    icon: ⚡
  - title: Tree Shaking
    details: 支持 Tree Shaking 功能
    icon: 💖
  - title: 测试覆盖
    details: 使用 Vitest 进行单元测试
    icon: 🛠
  - title: 环境支持
    details: 区分 Browser 和 Node 函数管理
    icon: 🌍
  - title: 文档完善
    details: 工具函数介绍附带 Demo 功能预览
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
