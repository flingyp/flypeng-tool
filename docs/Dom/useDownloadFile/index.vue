<script lang="ts" setup>
import { useDownloadFile } from '@flypeng/tool/browser';

const downloadFile = () => {
  useDownloadFile('https://flingyp.github.io/flypeng-tool/favicon.png', '@flypeng-tool.png');
};
</script>

<template>
  <button @click="downloadFile">点击下载</button>
</template>

<style scoped>
button {
  width: 80px;
  border-radius: 4px;
  color: #ffffff;
  background-color: var(--vp-c-brand);
}
</style>
