# useListenNetwork

## Introduction

监听当前网页是否在线执行回调

## Basic Usage

```ts
import { useListenNetwork } from '@flypeng/tool/browser';
```

## Type Declaration

```ts
/**
 * 监听当前网页是否在线执行回调
 * @param online
 * @param offline
 * @returns
 */
declare function useListenNetwork(online: (...args: any[]) => void, offline: (...args: any[]) => void): undefined;
```

## Online Demo

<preview path="./index.vue" title="useListenNetwork" description="监听当前网页是否在线执行回调"></preview>
