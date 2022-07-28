# useGetUrlParam

## 基本介绍

获取 URL 参数中指定参数值

<script lang="ts" setup>
	import DemoContainer from '../../.vitepress/components/DemoContainer.vue'
	import useGetUrlParam from './index.vue'
</script>

## 基本使用

```ts
import { useGetUrlParam } from '@flypeng/tool'

// 获取本地的参数
const param1 = useGetUrlParam('name')

// 获取指定字符串的参数
const param2 = useGetUrlParam('name', '?name=@flypeng/tool&description=工具库')
const param3 = useGetUrlParam('description', '?name=@flypeng/tool&description=工具库')
```

## 类型声明

```ts
/**
 * 获取URL参数中指定参数值
 * @param param
 * @param origin
 * @returns
 */
declare function useGetUrlParam(param: string, origin?: string): string | null
```

## 在线演示

<DemoContainer>
	<useGetUrlParam />
</DemoContainer>
