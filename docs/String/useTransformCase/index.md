# useTransformCase

## Introduction

将字符串转换大小写

## Basic Usage

```ts
import { useTransformCase } from '@flypeng/tool/browser';

const transformStr = useTransformCase('Hello World', 1);
```

## Type Declaration

```ts
declare type TransformCaseType = 0 | 1 | 2;
/**
 * 将字符串转换大小写
 * @param str
 * @param type
 * @returns
 */
declare function useTransformCase(str: string, type: TransformCaseType): string;
```
