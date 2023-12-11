# useThrottle

## Introduction

节流函数

## Basic Usage

```ts
import { useThrottle } from '@flypeng/tool/browser';
const throttleFunction = useThrottle(() => {}, 1000);
```

## Online Demo

<preview path="./index.vue" title="useThrottle" description="节流函数：屏幕滚动事件示例"></preview>

## Type Declaration

```ts
/**
 * 节流函数
 * @param callback
 * @param delay
 */
declare function useThrottle(callback: Function, delay: number): () => void;
```
