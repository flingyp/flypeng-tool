# useDataType

## Introduction

返回变量的数据类型

## Basic Usage

```ts
import { useDataType } from '@flypeng/tool'

const dataType = useDataType(2) // number
```

## Type Declaration

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
