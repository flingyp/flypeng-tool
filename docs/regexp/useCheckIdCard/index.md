# useCheckIdCard

## 基本介绍

校验身份证号码格式是否正确

## 基本使用

```ts
import { useCheckIdCard } from '@flypeng/tool'

const isChecked = useCheckIdCard('110101199006075838')
```

## 类型声明

```ts
/**
 * 检测身份证号码是否有效
 * @param value
 * @returns
 */
declare function useCheckIdCard(value: string): boolean
```
