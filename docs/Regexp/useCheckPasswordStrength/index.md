# useCheckPasswordStrength

## Introduction

检查密码的强度级别

## Basic Usage

```ts
import { useCheckPasswordStrength } from '@flypeng/tool/browser';

const isCheckedValue = useCheckIncludeNumber('XXX'); // 0 | 1 | 2 | 3
```

## Type Declaration

```ts
type StrengthLevel = 0 | 1 | 2 | 3;
/**
 * 检查密码的强度级别
 * @param password
 * @param defineLength
 * @returns
 */
declare function useCheckPasswordStrength(password: string, defineLength?: number): StrengthLevel;
```

## Online Demo

<preview path="./index.vue" title="useCheckPasswordStrength" description="检查密码的强度级别"></preview>
