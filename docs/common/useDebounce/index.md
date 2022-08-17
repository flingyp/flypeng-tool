# useDebounce

## 基本介绍

**防抖函数**是前端性能优化的知识，在实际开发中遇到的情况相当高，可以理解为水库的阀门只定期开阀

<script lang="ts" setup>
	import useDebounce from './index.vue'
</script>

## 基本使用

```ts
import { useDebounce } from '@flypeng/tool'
const deBounceFunction = useDebounce(() => {}, 1000)
```

## 在线演示

<DemoContainer>
	<useDebounce />
</DemoContainer>

<br />

```vue
<script lang="ts" setup>
  import { useDebounce } from '@flypeng/tool'
  import { ref, onMounted } from 'vue'
  const getScrollTop = () => window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop
  const scrollTop = ref<number | null>(getScrollTop())
  onMounted(() => {
    // 滚动条滚动结束后延迟500毫秒执行
    const scrollFunction = useDebounce(() => {
      scrollTop.value = getScrollTop()
    }, 500)
    window.addEventListener('scroll', scrollFunction)
  })
</script>

<template>
  <div>当前屏幕滚动高度：{{ scrollTop }}</div>
</template>
```

## 类型声明

```ts
/**
 * 防抖函数
 * @param callback
 * @param delay （单位：毫秒）
 */
declare function useDebounce(callback: () => void, delay: number): () => void
```
