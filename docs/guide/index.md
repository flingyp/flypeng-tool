<script setup lang="ts">
	import { version, HooksNum } from '../info' 
</script>

# Get Started

**<span style="color: var(--vp-c-brand); font-size: 16px;">@flypeng/tool</span>** 是一个集成业务中常用的工具函数库。集成封装常用业务函数库，可以极大程度上的提高开发者的效率。

搭建这么一个函数库的灵感来自于 [VueUse](https://vueuse.org/)，把每一个工具函数想象成为一个钩子函数去使用。目标就是集成所有常用的工具函数，并且可以轻松使用它。

当前版本：<span style="color: var(--vp-c-brand); font-weight: 600; font-size: 16px;">v{{version}}</span>

函数统计：<span style="color: var(--vp-c-brand); font-weight: 600; font-size: 16px;">{{HooksNum}} Functions</span>

## Installation

<img src="https://img.shields.io/npm/v/%40flypeng%2Ftool?style=plastic&logo=npm&label=%40flypeng%2Ftool&link=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2F%40flypeng%2Ftool" alt="@flypeng/tool" style="margin-top: 10px" />

::: code-group

```sh [npm]
npm install @flypeng/tool@latest
```

```sh [yarn]
yarn add @flypeng/tool@latest
```

```sh [pnpm]
pnpm add @flypeng/tool@latest
```

:::

## Usage Example

### `@flypeng/tool/browser`

集成所有非 `Node Functions` 环境下的工具函数

```ts
import { useRandomInteger, useIsMobile } from '@flypeng/tool/browser';

const randomInteger = useRandomInteger(10, 100); // Integer in [10, 100]
```

### `@flypeng/tool/node`

集成 Node 环境下的工具函数

```ts
import { useGetCurrentPath, useIsFile } from '@flypeng/tool/node';

const isFile = useIsFile(useGetCurrentPath()); // isFile is Boolean
```

## Usage CDN

:::tip

这里使用了 [unpkg](https://unpkg.com/) ，但也可以使用其他提供包服务的 CDN，例如 [jsdelivr](https://www.jsdelivr.com/) 或 [cdnjs](https://cdnjs.com/)，也可以下载此文件并自行提供服务。

:::

```js
// All non-Node module methods are injected into the fy global variable
<script src="https://unpkg.com/@flypeng/tool@${version}/browser/index.browser.js"></script>
<script type="text/javascript">
	console.log(fy)
</script>
```

## Typescript

使用 Typescript 开发时，由于 `@flypeng/tool` 构建设计问题，需要在 `tsconfig.json` 文件中重新指定对应模块包 `browser`、`node` 的类型声明文件路径

```json
{
  "compilerOptions": {
    "paths": {
      "@flypeng/tool/browser": ["node_modules/@flypeng/tool/dist/browser/index.d.ts"],
      "@flypeng/tool/node": ["node_modules/@flypeng/tool/dist/node/index.d.ts"]
    }
  }
}
```

## Technology Stack

- [tsup](https://github.com/egoist/tsup) 构建工具
- [vitest](https://github.com/vitest-dev/vitest) 测试工具
- [vitepress](https://github.com/vuejs/vitepress) 文档工具
- [vitepress-demo-preview](https://github.com/flingyp/vitepress-demo-preview) 组件预览工具
- [gulp](https://github.com/gulpjs/gulp) 流程构建工具
