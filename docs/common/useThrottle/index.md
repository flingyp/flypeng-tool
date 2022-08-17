# useThrottle

## 基本介绍

**节流函数**是前端性能优化的知识，在实际开发中遇到的情况相当高

节流的含义就是 在函数执行一次后，该函数在指定时间内期限内不在工作，直到过了这段时间才能重新生效

<script lang="ts" setup>
	import useDebounce from './index.vue'
</script>

## 基本使用

```ts
import { useThrottle } from '@flypeng/tool'
const throttleFunction = useThrottle(() => {}, 1000)
```

## 在线演示

:::tip
屏幕滚动事件示例

<DemoContainer>
	<useDebounce />
</DemoContainer>

:::

```vue
<script lang="ts" setup>
  import { useThrottle } from '@flypeng/tool'
  import { ref, onMounted } from 'vue'
  const getScrollTop = () => window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop
  const scrollTop = ref<number | null>(getScrollTop())
  onMounted(() => {
    // 滚动条滚动结束后延迟500毫秒执行
    const scrollFunction = useThrottle(() => {
      scrollTop.value = getScrollTop()
      console.log('节流函数执行了')
    }, 1000)
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
 * 节流函数
 * @param callback
 * @param delay
 */
declare function useThrottle(callback: Function, delay: number): () => void
```
