# usePreventSeeSourceCode

## Introduction

禁止用户以任何方式查看网页源代码（Ctrl+S、Ctrl+U、Ctrl+Shift+I、Ctrl+Shift+C、点击 F12 和 点击鼠标右键）

## Basic Usage

```ts
import { usePreventSeeSourceCode } from '@flypeng/tool/browser';

const clear = usePreventSeeSourceCode(() => {
  // To todo notice message give user
});

// The callback needs to be canceled at some time
clear();
```

## Type Declaration

```ts
/**
 * 禁止用户以任何方式查看网页源代码（Ctrl+S、Ctrl+U、Ctrl+Shift+I、Ctrl+Shift+C、点击 F12 和 点击鼠标右键）
 * @param callback
 * @returns
 */
declare function usePreventSeeSourceCode(callback: () => void): () => void;
```

## Online Demo

<preview path="./index.vue" title="usePreventSeeSourceCode" description="禁止查看源代码和取消按下键并单击鼠标右键的默认方法"></preview>
