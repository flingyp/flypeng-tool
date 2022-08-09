# useCheckPhoneNumber

## 基本介绍

校验电话号码格式是否正确

## 基本使用

```ts
import { useCheckPhoneNumber } from '@flypeng/tool'

const isChecked = useCheckPhoneNumber('13148367212')
```

## 类型声明

```ts
/**
 * 校验电话号码格式是否正确
 * @param value
 * @returns
 */
declare function useCheckPhoneNumber(value: string): boolean
```
