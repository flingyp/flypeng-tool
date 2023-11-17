# useCommonType

## Introduction

提供一系列关于类型的工具函数

## Basic Usage

```ts
import { useCommonType } from '@flypeng/tool/browser';

const dataType = useCommonType.isString('@flypeng-tool');
```

## Functions List

- `isString`
- `isNumber`
- `isUndefined`
- `isObject`
- `isArray`
- `isNull`
- `isFunction`
- `isDate`
- `isMap`
- `isSet`
- `isRegExp`
- `isBrowser`
- `isWechatBrowser`
- `isMobile`
- `typeToString`

## Type Declaration

```ts
declare const _default$1: {
  isUndefined: (value: unknown) => boolean;
  isString: (value: unknown) => boolean;
  isNumber: (value: unknown) => boolean;
  isObject: (value: unknown) => boolean;
  isArray: (value: unknown) => boolean;
  isNull: (value: unknown) => boolean;
  isFunction: (value: unknown) => boolean;
  isDate: (value: unknown) => boolean;
  isMap: (value: unknown) => boolean;
  isSet: (value: unknown) => boolean;
  isRegExp: (value: unknown) => boolean;
  isBrowser: () => boolean;
  isWechatBrowser: () => boolean;
  isMobile: () => boolean;
  typeToString: (value: unknown) => string;
};
```
