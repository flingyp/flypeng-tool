# useGetBrowserInfo

## Introduction

Get browser version information (browser type and version number)

## Basic Usage

```ts
import { useGetBrowserInfo } from '@flypeng/browser';

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
