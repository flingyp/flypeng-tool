# useCheckIncludeNumber

## 基本介绍

检测字符串中是否包含中文

## 基本使用

```ts
import { useCheckIncludeNumber } from '@flypeng/tool'

const isCheckedOne = useCheckIncludeNumber('@flypeng/tool') // false
const isCheckedTwo = useCheckIncludeNumber('2022年8月10号') //  true
```

## 类型声明

```ts
/**
 * 检测字符串中是否包含数字
 * @param value
 * @returns
 */
declare function useCheckIncludeNumber(value: string): boolean
```
