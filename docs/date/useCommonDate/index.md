# useCommonDate

## Introduction

提供一系列关于日期的工具函数

## Basic Usage

```ts
import { useCommonDate } from '@flypeng/tool'

const isLeapYear = useCommonDate.useLeapYear(2020)
```

## Function List

- `useLeapYear`
- `useTodayWeek`
- `useMonthNumber`

## Type Declaration

```ts
/**
 * 判断是否为闰年（能被4整除，但不能被100整除 或者 能被400整除）
 * @param value
 */
declare function useLeapYear(value: number): boolean
/**
 * 获取今天是星期几
 * @returns
 */
declare function useTodayWeek(): string
/**
 * 获取某年某月的天数
 * @param year
 * @param month
 * @returns
 */
declare function useMonthNumber(year: number, month: number): number | undefined
declare const _default: {
  useLeapYear: typeof useLeapYear
  useTodayWeek: typeof useTodayWeek
  useMonthNumber: typeof useMonthNumber
}
```
