# usePageTabSwitch

## Introduction

当浏览器页面切换时执行的回调函数

## Basic Usage

```ts
import { usePageTabSwitch } from '@flypeng/tool/browser';

const clear = usePageTabSwitch(() => {
  // todo things
});

// The callback needs to be canceled at some time
clear();
```

## Type Declaration

```ts
/**
 * 当浏览器页面切换时执行的回调函数
 * @param callback
 */
declare function usePageTabSwitch(callback: () => void): () => void;
```

## Online Demo

<preview path="./index.vue" title="usePageTabSwitch" description="当浏览器页面切换时执行的回调函数"></preview>
