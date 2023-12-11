# useGetUrlParam

## Introduction

获取URL参数中指定参数值

## Basic Usage

```ts
import { useGetUrlParam } from '@flypeng/tool/browser';

// 获取本地的参数
const param1 = useGetUrlParam('name');

// 获取指定字符串的参数
const param2 = useGetUrlParam('name', '?name=@flypeng/tool&description=工具库');
const param3 = useGetUrlParam('description', '?name=@flypeng/tool&description=工具库');
```

## Online Demo

<preview path="./index.vue" title="useGetUrlParam" description="获取 URL 参数中指定参数值"></preview>

## Type Declaration

```ts
/**
 * 获取URL参数中指定参数值
 * @param param
 * @param origin
 * @returns
 */
declare function useGetUrlParam(param: string, origin?: string): string | null;
```
