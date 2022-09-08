# useThrottle

## Introduction

节流的含义就是 在函数执行一次后，该函数在指定时间内期限内不在工作，直到过了这段时间才能重新生效

## Basic Usage

```ts
import { useThrottle } from '@flypeng/tool'
const throttleFunction = useThrottle(() => {}, 1000)
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
declare function useThrottle(callback: Function, delay: number): () => void
```
