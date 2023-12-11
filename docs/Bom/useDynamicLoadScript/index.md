# useDynamicLoadScript

## Introduction

动态加载脚本文件

## Basic Usage

```ts
import { useDynamicLoadScript } from '@flypeng/tool/browser';

await useDynamicLoadScript(validUrl);
```

## Type Declaration

```ts
/**
 * 动态加载脚本文件
 * @param url
 * @param callback
 */
declare function useDynamicLoadScript(url: string, callback?: (...args: unknown[]) => void): Promise<void>;
```

## Online Demo

<preview path="./index.vue" title="useDynamicLoadScript" description="动态加载脚本文件"></preview>
