# useGetBrowserInfo

## Introduction

获取浏览器版本信息（浏览器类型和版本号）

## Basic Usage

```ts
import { useGetBrowserInfo } from '@flypeng/tool/browser';

const { type, version } = useGetBrowserInfo();
```

## Type Declaration

```ts
/**
 * 获取浏览器版本信息（浏览器类型和版本号）
 * @returns
 */
declare function useGetBrowserInfo(): {
  type: string;
  version: number;
};
```
