# Get Started

**@flypeng/tool** 是一个集成各种实用功能的开发工具箱

## Installation

```sh
npm install @flypeng/tool

yarn add @flypeng/tool

pnpm install @flypeng/tool
```

## Usage Example

```ts
import { useRandomInteger, useIsMobile } from '@flypeng/tool'

const isMobile = useIsMobile() // isMobile is Boolean
const randomInteger = useRandomInteger(10, 100) // Integer in [10, 100]
```

## Project introduction

项目的灵感来自于 VueUse。开发这样一个工具库来用于平时开发中，可以极大的提高开发者的效率

**@flypeng/tool**：

1. 使用 TypeScript 语言 配置 Rollup 打包工具进行实用函数的编写和打包

2. 使用 vitest 进行功能测试，每个实用函数应配备 `index.test.ts` 测试文件

3. 工具箱使用 vitepress 文档，各种实用函数基本介绍、在线 Demo 演示编写。确保在不好书写测试用例的情况下，进行 Demo 演示
