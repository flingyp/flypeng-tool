# useDataType

## 基本介绍

返回变量的数据类型

## 基本使用

```ts
import { useDataType } from '@flypeng/tool'

const dataType = useDataType(2) // number
```

## 类型声明

```ts
/**
 * 返回数据类型
 * @param value
 * @returns
 */
declare function useDataType(
  value: unknown
): 'string' | 'number' | 'bigint' | 'boolean' | 'symbol' | 'undefined' | 'object' | 'function' | null | undefined
```
