# useNodeHooks

## Introduction

It is integrated hook of node module

## Basic Usage

```ts
import { useNodeHooks } from '@flypeng/tool'

const nodeHooks = useNodeHooks()
// get current directory
const curPath = nodeHooks.useGetCurrentPath()
```

## Type Declaration

```ts
/**
 * Node模块相关钩子函数集合
 * @returns
 */
declare function useNodeHook(): {
  useGetCurrentPath: () => string
  useIsDirectory: (path: string) => boolean
  useIsFile: (path: string) => boolean
}
```
