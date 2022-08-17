<script lang="ts" setup>
  import { useDebounce } from '@flypeng/tool'
  import { ref, onMounted } from 'vue'
  const getScrollTop = () => window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop
  const scrollTop = ref<number | null>(getScrollTop())
  onMounted(() => {
    const scrollFunction = useDebounce(() => {
      scrollTop.value = getScrollTop()
    }, 500)
    window.addEventListener('scroll', scrollFunction)
  })
</script>

<template>
  <div>当前屏幕滚动高度：{{ scrollTop }}</div>
</template>
