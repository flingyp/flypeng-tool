# useScrollToBottom

## Introduction

Scroll to bottom and execute callback

## Basic Usage

```ts
import { useScrollToBottom } from '@flypeng/tool/browser';

const touchBottomInstance = useScrollToBottom(window, () => {
  console.log('Container scroll to bottom and execute callback');
});

// Stop to linsten scroll of selector
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

<preview path="./index.vue" title="useScrollToBottom" description="Scroll to bottom and execute callback"></preview>
