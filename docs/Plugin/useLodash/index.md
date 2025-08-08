# useLodash

## Introduction

使用 [`lodash`](https://lodash.com/) 的工具函数

## Basic Usage

```ts
import { useLodash, useLodashEs } from '@flypeng/tool/browser';

const { isArray, cloneDeepWith } = useLodash();
// const { isArray, cloneDeepWith } = useLodashEs();
```

## Type Declaration

```ts
/**
 * 使用 lodash
 * @returns
 */
declare function useLodash(): _.LoDashStatic;
/**
 * 使用 lodash-es
 * @returns
 */
declare function useLodashEs(): typeof _es;
```
