# useLocalStorage

## Introduction

本地存储的方法的集合

## Basic Usage

```ts
import { useLocalStorage } from '@flypeng/tool/browser';

const { get, set, remove, clear } = useLocalStorage();
```

## Type Declaration

```ts
declare function useLocalStorage(): {
  get: (key: string) => string | null;
  set: (key: string, value: any) => string | null;
  clear: () => void;
  remove: (key: string) => void;
};
```
