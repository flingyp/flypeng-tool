# useCheckIncludeChinese

## Introduction

检测字符串中是否包含中文

## Basic Usage

```ts
import { useCheckIncludeChinese } from '@flypeng/tool/browser';

const isCheckedOne = useCheckPhoneNumber('Hello-World'); // false
const isCheckedTwo = useCheckPhoneNumber('早上好'); //  true
```

## Type Declaration

```ts
/**
 * 检测字符串中是否包含中文
 * @param value
 * @returns
 */
declare function useCheckIncludeChinese(value: string): boolean;
```
