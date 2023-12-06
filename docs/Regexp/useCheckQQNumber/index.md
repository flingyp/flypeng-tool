# useCheckQQNumber

## Introduction

校验 QQ 号码（5-11 位）格式是否正确

## Basic Usage

```ts
import { useCheckQQNumber } from '@flypeng/tool/browser';

const isCheckedOne = useCheckQQNumber('1915801633'); // true
const isCheckedTwo = useCheckQQNumber('121580163387'); // false
```

## Type Declaration

```ts
/**
 * 校验 QQ 号码（5-11 位）格式是否正确
 * @param value
 * @returns
 */
declare function useCheckQQNumber(value: string): boolean;
```
