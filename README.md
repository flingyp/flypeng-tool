<div align="center">
<a href="https://github.com/flingyp/YToolUse">
  <img src="https://yyblog.top/flypeng-tool/favicon.png" alt="@flypeng/tool - Integrate A Collection of Common Tools and Methods" width="100">
</a>
<br>
<h2>@flypeng/tool</h2>
<h6>Integrate a collection of common tools and methods</h6>

<a href="https://www.npmjs.com/package/@flypeng/tool" target="__blank"><img src="https://img.shields.io/npm/v/@flypeng/tool" alt="NPM version"></a> <a href="https://www.npmjs.com/package/@flypeng/tool" target="__blank"><img src="https://img.shields.io/npm/l/@flypeng/tool?style=plastic" alt="NPM version"></a> <a href="https://yyblog.top/flypeng-tool"><img src="https://img.shields.io/badge/-Dosc%20%26%20Demo-green" /></a> <a href="https://www.npmjs.com/package/@flypeng/tool" target="__blank"><img src="https://img.shields.io/npm/dm/@flypeng/tool" alt="NPM version"></a>

</div>

## 🚀 Features

🌈 **Docs**：Concise documentation and demo presentation

⚡ **Type**：Typescript to provide good type prompt

✨ **Tree Shaking**：Only import the functions you need

☀️ **Flexible**：Universal and practical the functions

## 📦 Installation

`@Flypeng/tool` will be constantly updated. If you find that the tool functions in the document do not exist or have not been exported during use. The tool can be updated to the latest version in time.

```sh
npm install @flypeng/tool

yarn add @flypeng/tool

pnpm install @flypeng/tool
```

## 🎉 Usage

All tool function names are prefixed with **`use`**. The advantage of this method is that when importing all tool functions, you will first enter **`use`** to list all tool functions.Cooperate with function related comments to maximize editor prompts

```ts
import { useRandomInteger, useIsMobile, useGetUrlParam } from '@flypeng/tool'

const randomInteger = useRandomInteger()
const isMobile = useIsMobile()
const urlParam = useGetUrlParam('query')
```
