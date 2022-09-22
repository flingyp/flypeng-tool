# useFormatDate

## Basic Usage

```ts
import { useFormatDate } from '@flypeng/tool'
```

## Type Declaration

```ts
/**
 * 格式类型
 */
declare type DateFormatOption =
  | 'yyyy-MM-dd hh:mm:ss'
  | 'yyyy-MM-dd'
  | 'yyyy/MM/dd'
  | 'hh:mm:ss'
  | 'yyyy'
  | 'MM'
  | 'dd'
  | 'hh'
  | 'mm'
  | 'ss'
/**
 * 格式化日期函数
 * @param format
 * @param date
 */
declare function useFormatDate(format: DateFormatOption, date?: string): void
```

## Online Demo

<preview path="./index.vue" title="useFormatDate" description="Format Date"></preview>
