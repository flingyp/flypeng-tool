# useCheckIdCard

## Introduction

校验身份证号码格式是否正确

## Basic Usage

```ts
import { useCheckIdCard } from '@flypeng/tool/browser';

const isChecked = useCheckIdCard('110101199006075838');
```

## Type Declaration

```ts
/**
 * 检测身份证号码是否有效
 * @param value
 * @returns
 */
declare function useCheckIdCard(value: string): boolean;
```
