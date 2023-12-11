# useGetCurrentPath

## Introduction

获取执行该方法时所在的目录

## Basic Usage

```ts
import { useGetCurrentPath } from '@flypeng/tool/node';

const curPath = useGetCurrentPath();
```

## Type Declaration

```ts
/**
 * 获取执行该方法时所在的目录
 * @returns
 */
declare const useGetCurrentPath: () => string;
```
