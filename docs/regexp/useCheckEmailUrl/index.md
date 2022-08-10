# useCheckEmailUrl

## 基本介绍

校测邮箱地址是否有效

## 基本使用

```ts
import { useCheckEmailUrl } from '@flypeng/tool'

const isCheck = useCheckEmailUrl('flypeng@gmail.com')
```

## 类型声明

```ts
/**
 * 校测邮箱地址是否有效
 * @param value
 * @returns
 */
declare function useCheckEmailUrl(value: string): boolean
```
