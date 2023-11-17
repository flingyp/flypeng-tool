# useCommonDate

## Introduction

提供一系列关于日期的工具函数

## Basic Usage

```ts
import { useCommonDate } from '@flypeng/tool/browser';

const isLeapYear = useCommonDate.useLeapYear(2020);
```

## Function List

- `useLeapYear`
- `useTodayWeek`
- `useMonthNumber`
- `useAddDateDay`
- `useDifDaysValue`
- `useGetFirstDay`
- `useGetLastDay`
- `useIsValidDate`
- `useIsSameMonth`

## Type Declaration

```ts
/**
 * 判断是否为闰年（能被4整除，但不能被100整除 或者 能被400整除）
 * @param value
 */
declare function useLeapYear(value: number): boolean;
/**
 * 获取今天是星期几
 * @returns
 */
declare function useTodayWeek(): string;
/**
 * 获取某年某月的天数
 * @param year
 * @param month
 * @returns
 */
declare function useMonthNumber(year: number, month: number): number | undefined;
/**
 * 指定日期添加天数
 * @param number
 */
declare type AddDateDayFormatOption<T> = T extends 'yyyy-MM-dd hh:mm:ss' | 'yyyy-MM-dd' | 'yyyy/MM/dd' ? T : never;
declare function useAddDateDay(
  value: number,
  date?: string | Date,
  dateFormat?: AddDateDayFormatOption<DateFormatOption>,
): string;
/**
 * 计算两个日期相差的天数
 * @param dateOne
 * @param dateTwo
 * @returns
 */
declare function useDifDaysValue(dateOne: string | Date, dateTwo?: string | Date): number;
/**
 * 获取当月的第一天的日期
 */
declare function useGetFirstDay(): string;
/**
 * 获取当月的最后一天的日期
 */
declare function useGetLastDay(): string;
/**
 * 判断日期是否是一个正确有效的日期
 * @param value yyyy-MM-dd
 * @returns
 */
declare function useIsValidDate(value: string): boolean;
/**
 * 判断当前日期是否是当前月份
 * @param dateOne
 * @param dateTwo
 * @returns
 */
declare function useIsSameMonth(dateOne: Date, dateTwo?: Date): boolean;
```
