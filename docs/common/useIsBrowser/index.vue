<script lang="ts" setup>
  import { useIsBrowser } from '@flypeng/tool'
</script>

<template>
  <div>当前是否为浏览器环境：{{ useIsBrowser() }}</div>
</template>
