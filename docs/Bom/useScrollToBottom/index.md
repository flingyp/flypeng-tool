# useScrollToBottom

## Introduction

滚动到底部并执行回调函数

## Basic Usage

```ts
import { useScrollToBottom } from '@flypeng/tool/browser';

const touchBottomInstance = useScrollToBottom(window, () => {
  console.log('Container 滚动到底部并执行回调函数');
});

// Stop to listen scroll of selector
touchBottomInstance.stop();
```

## Type Declaration

```ts
declare class TouchBottomClass {
  private isEnable;
  private isEnd;
  private scrollCallback;
  private callback;
  private selector;
  constructor(callback: Function, selector: Element);
  private start;
  private end;
  stop(): void;
}
/**
 * 滚动到底部并执行回调函数
 * @param selector
 * @param callback
 * @returns
 */
declare function useScrollToBottom(selector: Element, callback: Function): TouchBottomClass;
```

## Online Demo

<preview path="./index.vue" title="useScrollToBottom" description="滚动到底部并执行回调函数"></preview>
