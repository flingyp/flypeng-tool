# Dev Function

## Introduction

当你准备新增函数时，根据新函数的特性来决定放置在哪个模块中，以便于能够快速找到该函数。

目前 **@flypeng/tool** 已经存在如下工具模块：

<script lang="ts" setup>
	import DevFunctionModulesShow from '../.vitepress/components/DevFunctionModulesShow.vue'
</script>

<DevFunctionModulesShow />

添加新函数时，请运行 `pnpm run new` 来自动生成相关文件同时参考已存在函数的形式来进行开发

## Attention Detail

1. 函数命名统一： `useAaBb`

2. 函数统一被默认导出

3. 函数命名时要确保名称唯一，不可重复

```ts
import { useAaBb } from '@flypeng/tool/browser';

import { useAaBb } from '@flypeng/tool/node';
```
