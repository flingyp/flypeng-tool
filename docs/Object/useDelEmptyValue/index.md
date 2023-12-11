# useDelEmptyValue

## Introduction

删除对象中属性为 Null 的值

## Basic Usage

```ts
import { useDelEmptyValue } from '@flypeng/tool';

const handleObj = { name: '@flypeng/tool', date: '2023/01/03', test: null };
const getObj = useDelEmptyValue(handleObj); // { name: '@flypeng/tool', date: '2023/01/03' }
```

## Type Declaration

```ts
/**
 * 删除对象中属性为Null的值
 */
declare function useDelEmptyValue<T extends Object>(targetObj: T): T | undefined;
```
