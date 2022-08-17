# useDebounce

## 基本介绍

**防抖函数**是前端性能优化的知识，在实际开发中遇到的情况相当高

<script lang="ts" setup>
	import useDebounce from './index.vue'
</script>

## 基本使用

```ts
import { useDebounce } from '@flypeng/tool'
const deBounceFunction = useDebounce(() => {}, 1000)
```

## 在线演示

:::tip 案例
Input 频繁搜索的案例

<DemoContainer>
	<useDebounce />
</DemoContainer>
:::

```vue
<script lang="ts" setup>
  import { useDebounce } from '@flypeng/tool'
  import { ref, onMounted } from 'vue'
  const content = ref<string>('')
  const inputChange = e => {
    useDebounce(() => {
      const inputDom = e.target as HTMLInputElement
      content.value = inputDom.value
    }, 2000)()
  }

  onMounted(() => {})
</script>

<template>
  <div>
    <div style="margin-bottom: 4px">输入的内容：{{ content }}</div>
    <input type="text" @input="inputChange" placeholder="请输入内容" />
  </div>
</template>

<style scoped>
  input {
    background: var(--vp-c-bg);
    border: 1px solid var(--vp-c-bg);
    color: var(--vp-c-text-1);
    padding-left: 4px;
    font-size: 14px;
    border-radius: 4px;
  }

  input:focus {
    border: 1px solid var(--vp-c-brand);
    transition: all 0.3s linear;
  }
</style>
```

## 类型声明

```ts
/**
 * 防抖函数
 * @param callback
 * @param delay （单位：毫秒）
 */
declare function useDebounce(callback: Function, delay: number): () => void
```
