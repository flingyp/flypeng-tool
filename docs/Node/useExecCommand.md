# useExecCommand

## Introduction

执行命令

## Basic Usage

```ts
import { useExecCommand } from '@flypeng/tool/node';

await useExecCommand('');
```

## Type Declaration

```ts
/**
 * 执行命令
 * @param command
 * @param options
 */
declare const useExecCommand: (command: string, options?: ExecCommandOptions) => void;
```
