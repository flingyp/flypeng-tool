<script lang="ts" setup>
  import { useRandomString } from '@flypeng/browser'
</script>

<template>
  <div>
    <div>
      <span>默认长度：10</span>
      <span>{{ useRandomString() }}</span>
    </div>
    <div>
      <span>自定义长度：</span>
      <span>{{ useRandomString(20) }}</span>
    </div>
  </div>
</template>

<style scoped></style>
