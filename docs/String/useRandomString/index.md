# useRandomString

## Introduction

生成随机字符串

## Basic Usage

```ts
import { useRandomString } from '@flypeng/tool/browser';

const randomStr1 = useRandomString();
const randomStr2 = useRandomString(20);
const randomStr3 = useRandomString(20, true);
```

## Online Demo

<preview path="./index.vue" title="useRandomString" description="生成指定长度的随机字符串 （默认长度 10）"></preview>

## Type Declaration

```ts
/**
 * 生成随机字符串
 * @param length
 * @param supportNumber 是否参杂数字（默认不参杂）
 * @returns
 */
declare function useRandomString(length?: number, supportNumber?: boolean): string;
```
