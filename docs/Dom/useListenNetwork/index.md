# useListenNetwork

## Introduction

Listen current page network and execute different callback

## Basic Usage

```ts
import { useListenNetwork } from '@flypeng/tool/browser'
```

## Type Declaration

```ts
/**
 * 监听当前网页是否在线执行回调
 * @param online
 * @param offline
 * @returns
 */
declare function useListenNetwork(online: (...args: any[]) => void, offline: (...args: any[]) => void): undefined
```

## Online Demo

<preview path="./index.vue" title="useListenNetwork" description="listen current page network and execute different callback"></preview>
