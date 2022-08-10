# useCheckQQNumber

## 基本介绍

校验 QQ 号码（5-11 位）格式是否正确

## 基本使用

```ts
import { useCheckQQNumber } from '@flypeng/tool'

const isCheckedOne = useCheckQQNumber('1915801633') // true
const isCheckedTwo = useCheckQQNumber('121580163387') // false
```

## 类型声明

```ts
/**
 * 校验 QQ 号码（5-11 位）格式是否正确
 * @param value
 * @returns
 */
declare function useCheckQQNumber(value: string): boolean
```
