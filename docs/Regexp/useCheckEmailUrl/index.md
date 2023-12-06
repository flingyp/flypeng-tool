# useCheckEmailUrl

## Introduction

校测邮箱地址是否有效

## Basic Usage

```ts
import { useCheckEmailUrl } from '@flypeng/tool/browser';

const isCheck = useCheckEmailUrl('flypeng@gmail.com');
```

## Type Declaration

```ts
/**
 * 校测邮箱地址是否有效
 * @param value
 * @returns
 */
declare function useCheckEmailUrl(value: string): boolean;
```
