<script lang="ts" setup>
import { useCopyContent } from '@flypeng/tool/browser';

const copy = () => {
  useCopyContent('@flypeng/tool');
};
</script>

<template>
  <button @click="copy">点击后，内容会复制到剪贴板中</button>
</template>

<style scoped>
button {
  border-radius: 4px;
  color: #ffffff;
  background-color: var(--vp-c-brand);
  padding: 4px 6px;
  margin: 10px 0;
}
</style>
