# useLodash

## Introduction

使用 [`lodash`](https://lodash.com/) 的工具函数

## Basic Usage

```ts
import { useLodash } from '@flypeng/tool/browser';

const { isArray, cloneDeepWith } = useLodash();
```

## Type Declaration

```ts
/**
 * 使用 lodash
 * @returns
 */
declare function useLodash(): _.LoDashStatic;
```
