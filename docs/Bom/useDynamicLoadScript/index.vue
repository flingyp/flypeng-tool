<script lang="ts" setup>
import { useDynamicLoadScript } from '@flypeng/tool/browser';

const copy = async () => {
  await useDynamicLoadScript('https://cdn.bootcdn.net/ajax/libs/jquery/3.6.3/jquery.min.js');
};
</script>

<template>
  <button @click="copy">点击后加载Jquery文件</button>
  <p>打开控制条Network, 清空控制台后点击按钮。查看效果</p>
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
