# useLeapYear

## Basic Usage

Judge value whether is leap year

```ts
import { useLeapYear } from '@flypeng/tool'
```

## Type Declaration

```ts
/**
 * 判断是否为闰年（能被4整除，但不能被100整除 或者 能被400整除）
 * @param value
 */
declare function useLeapYear(value: number): boolean
```

## Online Demo

<preview path="./index.vue" title="useLeapYear" description="Judge value whether is leap year"></preview>
