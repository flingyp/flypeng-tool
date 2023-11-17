# useCheckIncludeNumber

## Introduction

检测字符串中是否包含数字

## Basic Usage

```ts
import { useCheckIncludeNumber } from '@flypeng/tool/browser';

const isCheckedOne = useCheckIncludeNumber('@flypeng/tool'); // false
const isCheckedTwo = useCheckIncludeNumber('2022年8月10号'); //  true
```

## Type Declaration

```ts
/**
 * 检测字符串中是否包含数字
 * @param value
 * @returns
 */
declare function useCheckIncludeNumber(value: string): boolean;
```
