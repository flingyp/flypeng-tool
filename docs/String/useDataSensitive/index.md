# useDataSensitive

## Introduction

敏感数据进行脱敏处理

## Basic Usage

```ts
import { useDataSensitive } from '@flypeng/tool/browser';

// 默认
useDataSensitive({ sensitiveSource: '123456789' });

// 自定义
useDataSensitive({
  sensitiveSource: '123456789',
  startIndex: 2,
  endIndex: 5,
  replaceSource: '#',
});
```

## Online Demo

<preview path="./index.vue" title="useDataSensitive" description="敏感数据进行脱敏处理"></preview>

## Type Declaration

```ts
interface DataSensitiveOptions {
  sensitiveSource: string; // 脱敏源
  startIndex?: number; // 开始下标
  endIndex?: number; // 结束下标（包括）
  replaceSource?: string; // 脱敏符号
}
/**
 * 敏感数据进行脱敏处理
 * @param options
 * @returns
 */
declare function useDataSensitive(options: DataSensitiveOptions): string | undefined;
```
