# useGetCurrentPath

## Introduction

Get path where executing command

## Basic Usage

```ts
import { useGetCurrentPath } from '@flypeng/tool'

// get current directory
const curPath = useGetCurrentPath()
```

## Type Declaration

```ts
/**
 * 获取执行该方法时所在的目录
 * @returns
 */
declare const useGetCurrentPath: () => string
```
