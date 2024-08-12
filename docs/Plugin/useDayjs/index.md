# useDayjs

## Introduction

使用 [`dayjs`](https://day.js.org/zh-CN/) 库来处理日期和时间

需要添加相关插件：[插件](https://day.js.org/docs/zh-CN/plugin/plugin)

## Basic Usage

```ts
import { useDayjs } from '@flypeng/tool/browser';

const dayjs = useDayjs();
const curDate = dayjs().format('YYYY-MM-DD');
const isValid = dayjs('2024-02-23').isValid();
```

## Type Declaration

```ts
/**
 * 使用dayjs
 * @returns
 */
declare function useDayjs(): typeof dayjs;
```
