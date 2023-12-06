# useCheckPhoneNumber

## Introduction

校验电话号码格式是否正确

## Basic Usage

```ts
import { useCheckPhoneNumber } from '@flypeng/tool/browser';

const isChecked = useCheckPhoneNumber('13148367212');
```

## Type Declaration

```ts
/**
 * 校验电话号码格式是否正确
 * @param value
 * @returns
 */
declare function useCheckPhoneNumber(value: string): boolean;
```
