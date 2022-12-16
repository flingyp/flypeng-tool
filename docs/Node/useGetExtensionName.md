# useGetExtensionName

## Introduction

Get extend name of path

## Basic Usage

```ts
import { useGetExtensionName } from '@flypeng/tool'

const extensionName = useGetExtensionName('')
```

## Type Declaration

```ts
/**
 * 获取路径的后缀名
 * @param path
 * @returns
 */
declare const useGetExtensionName: (path: string) => Promise<string>
```
