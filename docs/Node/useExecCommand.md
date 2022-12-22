# useExecCommand

## Introduction

Execute command

## Basic Usage

```ts
import { useExecCommand } from '@flypeng/tool'

await useExecCommand('')
```

## Type Declaration

```ts
/**
 * 执行命令
 * @param command
 * @param options
 */
declare const useExecCommand: (command: string, options?: ExecCommandOptions) => Promise<void>
```
