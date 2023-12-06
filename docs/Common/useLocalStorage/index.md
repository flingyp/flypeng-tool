# useLocalStorage

## Introduction

Simply encapsulate CURD method of localStorage.

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
