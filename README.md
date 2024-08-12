# @flypeng/tool

<img alt="@flypeng/tool" src="https://img.shields.io/npm/v/%40flypeng%2Ftool?style=plastic&logo=npm&label=%40flypeng%2Ftool&link=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2F%40flypeng%2Ftool">

## ⛳ Introduction

[@flypeng/tool](https://flingyp.github.io/flypeng-tool/) 是一个集成业务中常用的工具函数库。集成封装常用业务函数库，可以极大程度上的提高开发者的效率。

搭建这么一个函数库的灵感来自于 [VueUse](https://vueuse.org/)，把每一个工具函数想象成为一个钩子函数去使用。目标就是集成所有常用的工具函数，并且可以轻松使用它。

## 📦 Installation

```bash
npm install @flypeng/tool@latest

yarn add @flypeng/tool@latest

pnpm add @flypeng/tool@latest
```

## 📚 Usage

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

## ⛏️ Typescript

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

## License

[MIT](./LICENSE) License © 2022 [FlingYP](https://github.com/flingyp)
