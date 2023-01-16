<script setup lang="ts">
	import { version, HooksNum } from '../info' 
</script>

# Get Started

**<span style="color: var(--component-preview-primary-color); font-size: 16px;">@flypeng/tool</span>** 是一个集成各种实用功能的开发工具箱

当前版本：<span style="color: var(--component-preview-primary-color); font-weight: 600; font-size: 16px;">v{{version}}</span>

函数统计：<span style="color: var(--component-preview-primary-color); font-weight: 600; font-size: 16px;">{{HooksNum}} Functions</span>

## Installation

```sh
pnpm install @flypeng/tool@latest
```

## Usage

```ts
import { useRandomInteger, useIsMobile } from '@flypeng/tool/browser'
import { useGetCurrentPath, useIsFile } from '@flypeng/tool/node'

const isMobile = useIsMobile() // isMobile is Boolean
const randomInteger = useRandomInteger(10, 100) // Integer in [10, 100]
const isFile = useIsFile(useGetCurrentPath()) // isFile is Boolean
```

## 通过 CDN 引入

```js
<script src="https://unpkg.com/@flypeng/tool@${version}/browser/index-browser.js"></script>
```

:::tip
这里使用了 [unpkg](https://unpkg.com/) ，但也可以使用其他提供包服务的 CDN，例如 [jsdelivr](https://www.jsdelivr.com/) 或 [cdnjs](https://cdnjs.com/)。

也可以下载此文件并自行提供服务。
:::

## Project introduction

项目的灵感来自于 VueUse。开发这样一个工具库来用于平时开发中，可以极大的提高开发者的效率

**@flypeng/tool**：

1. 使用 TypeScript 语言 配置 Rollup 打包工具进行实用函数的编写和打包

2. 使用 vitest 进行功能测试，每个实用函数应配备 `index.test.ts` 测试文件

3. 工具箱使用 vitepress 文档，各种实用函数 Introduction、在线 Demo 演示编写。确保在不好书写测试用例的情况下，进行 Demo 演示
