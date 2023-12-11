# useGetExtensionName

## Introduction

获取路径的后缀名

## Basic Usage

```ts
import { useGetExtensionName } from '@flypeng/tool/node';

const extensionName = useGetExtensionName('');
```

## Type Declaration

```ts
/**
 * 获取路径的后缀名
 * @param path
 * @returns
 */
declare const useGetExtensionName: (path: string) => string;
```
