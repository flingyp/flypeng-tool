# useObjectIsEmpty

## Introduction

判断对象是否为空对象

## Basic Usage

```ts
import { useObjectIsEmpty } from '@flypeng/tool/browser';

const isEmpty = useObjectIsEmpty({});
```

## Type Declaration

```ts
/**
 * 判断对象是否为空对象
 * @param target
 * @returns
 */
declare function useObjectIsEmpty(target: Object): boolean;
```
