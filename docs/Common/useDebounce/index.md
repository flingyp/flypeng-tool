# useDebounce

## Introduction

防抖函数

## Basic Usage

```ts
import { useDebounce } from '@flypeng/tool/browser';
const deBounceFunction = useDebounce(() => {}, 1000);
```

## Online Demo

<preview path="./index.vue" title="useDebounce" description="防抖函数：Input频繁搜索的案例"></preview>

## Type Declaration

```ts
/**
 * 防抖函数
 * @param callback
 * @param delay （单位：毫秒）
 */
declare function useDebounce(callback: Function, delay: number): () => void;
```
