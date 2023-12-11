# useGetFileName

## Introduction

如果路径Path的是一个文件则会返回文件名和后罪名，否则返回目录名

## Basic Usage

```ts
import { useGetFileName, useGetCurrentPath } from '@flypeng/tool/node';

const nameInfo = await useGetFileName(useGetCurrentPath());
```

## Type Declaration

```ts
/**
 * 如果路径Path的是一个文件则会返回文件名和后罪名，否则返回目录名
 * @param path
 */
declare const useGetFileName: (path: string) => FileName;
```
