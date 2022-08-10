# useCheckIncludeChinese

## 基本介绍

检测字符串中是否包含中文

## 基本使用

```ts
import { useCheckIncludeChinese } from '@flypeng/tool'

const isCheckedOne = useCheckPhoneNumber('Hello-World') // false
const isCheckedTwo = useCheckPhoneNumber('早上好') //  true
```

## 类型声明

```ts
/**
 * 检测字符串中是否包含中文
 * @param value
 * @returns
 */
declare function useCheckIncludeChinese(value: string): boolean
```
