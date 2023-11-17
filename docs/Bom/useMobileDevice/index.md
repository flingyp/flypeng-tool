# useMobileDevice

## Introduction

判断当前移动设备

## Basic Usage

```ts
import { useMobileDevice } from '@flypeng/tool/browser';

const mobileDevice = useMobileDevice();
```

## Type Declaration

```ts
/**
 * 如果不是移动设备则返回false，如果是移动设备则会判断是Apple还是Android
 * @returns Apple | Android | false
 */
declare function useMobileDevice(): false | 'Apple' | 'Android';
```
