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
