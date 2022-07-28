# Dev Function

## Introduce

当你准备向 **@flypeng/tool** 新增新 Function 时，根据新 Function 的特性来决定放置在哪个模块。

目前 **@flypeng/tool** 已经存在如下模板：

<script lang="ts" setup>
	import DevFunctionModulesShow from '../.vitepress/components/DevFunctionModulesShow.vue'
</script>

<DevFunctionModulesShow />

项目的根目录下存在 **template** 目录，里面有 **Docs Template**、**Function Template**

添加新 Function 都必须在当前模块的入口文件中导入出去

## Attention

1. 函数命名统一： `useAaBb`

2. 函数统一被默认导出

3. 函数命名时要确保名称唯一，不可重复

此处做法的好处就是：开发者在使用工具库时，在输入 `use` 时 会列出所有的函数名称，会提供极好的类型提示

```ts
import { useAaBb } from '@flypeng/tool'
```
