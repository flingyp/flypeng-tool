# useDeepClone

## Introduction

深拷贝对象

## Basic Usage

```ts
import { useDeepClone } from '@flypeng/tool/browser';

const targetObj = { name: '@flypeng-tool', address: { x: 100 }, origin: targetObj };
const resultObj = useDeepClone(targetObj);
```

## Online Demo

<preview path="./index.vue" title="useDeepClone" description="深拷贝函数"></preview>

## Type Declaration

```ts
/**
 * 深拷贝对象
 * @param targetObj 目标对象
 * @param hashMap
 * @returns
 */
declare function useDeepClone(targetObj: any, hashMap?: WeakMap<object, any>): any;
```
