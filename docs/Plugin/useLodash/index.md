# useLodash

## Introduction

使用 [`lodash-es`](https://lodash.com/) 的工具函数

## Basic Usage

```ts
import { useLodash } from '@flypeng/tool/browser';

const { isArray, cloneDeepWith } = useLodash();
```

## Type Declaration

```ts
/**
 * 使用lodash
 * @returns
 */
declare function useLodash(): typeof _;
```
