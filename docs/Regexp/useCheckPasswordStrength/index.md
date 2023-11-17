# useCheckPasswordStrength

## Introduction

Check strength level of password

## Basic Usage

```ts
import { useCheckPasswordStrength } from '@flypeng/tool/browser';

const isCheckedValue = useCheckIncludeNumber('XXX'); // 0 | 1 | 2 | 3
```

## Type Declaration

```ts
type StrengthLevel = 0 | 1 | 2 | 3;
/**
 * Check strength level of password
 * @param password
 * @param defineLength
 * @returns
 */
declare function useCheckPasswordStrength(password: string, defineLength?: number): StrengthLevel;
```

## Online Demo

<preview path="./index.vue" title="useCheckPasswordStrength" description="Check strength level of password"></preview>
