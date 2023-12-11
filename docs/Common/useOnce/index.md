# useOnce

## Introduction

确保回调函数只执行一次

:::tip
例如，有一个函数向服务器发送加载数据的请求。使用`useOnce()`，可以确保请求不会被多次执行。

即使用户一直点击该按钮，这也将避免性能问题，并确认请求只执行一次。
:::

## Basic Usage

```ts
import { useOnce } from '@flypeng/tool/browser';

const sendRequestOnce = useOnce(() => {
  console.log('execute only once');
});
const button = document.querySelector('button');
button.addEventListener('click', sendRequestOnce);
```

## Type Declaration

```ts
/**
 * 保证函数只执行一次
 * @param callback
 * @returns
 */
declare function useOnce(callback: () => void): () => void;
```

## Online Demo

<preview path="./index.vue" title="useOnce" description="确保回调函数只执行一次"></preview>
