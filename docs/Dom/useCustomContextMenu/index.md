# useCustomContextMenu

## Introduction

自定义右击以阻止默认方法并执行回调

## Basic Usage

```ts
import { useCustomContextMenu } from '@flypeng/tool/browser';

const clearCustomContextMenu = useCustomContextMenu(document, () => {
  console.log('click context menu');
});

// The callback needs to be canceled at some time
clearCustomContextMenu();
```

## Type Declaration

```ts
/**
 * 阻止鼠标右键点击默认事件并且执行回调函数
 * @param node
 * @param callback
 */
declare function useCustomContextMenu(node: HTMLElement, callback: () => void): void;
```

## Online Demo

<preview path="./index.vue" title="useCustomContextMenu" description="阻止鼠标右键点击默认事件并且执行回调函数"></preview>
