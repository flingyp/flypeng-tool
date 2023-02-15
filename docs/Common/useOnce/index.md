# useOnce

## Introduction

To confirm callback function to execute only once.

:::tip
For example, there is a function that sends a request to the server to load data. Using the `useOnce()`, it can ensure that the request is not incoked more than once.

Even if user keeps clicking the button, this will avoid performance problems and confirm request to execute only once.
:::

## Basic Usage

```ts
import { useOnce } from '@flypeng/tool/browser'

const sendRequestOnce = useOnce(() => {
	console.log('execute only once')
});
const button = document.querySelector("button");
button.addEventListener("click", sendRequestOnce);
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
		
<preview path="./index.vue" title="useOnce" description="To confirm callback function to execute only once"></preview>
