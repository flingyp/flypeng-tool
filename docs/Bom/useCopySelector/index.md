# useCopySelector

## Introduction

拷贝选择器的文本内容

## Basic Usage

```ts
import { useCopySelector } from '@flypeng/tool/browser';
```

## Online Demo

<preview path="./index.vue" title="useCopy" description="拷贝选择器的文本内容"></preview>

## Type Declaration

```ts
/**
 * 拷贝选择器的文本内容
 * @param selector DOM selector
 * @returns
 */
declare function useCopySelector(selector: string): boolean;
```
