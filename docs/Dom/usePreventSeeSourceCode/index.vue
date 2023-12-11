<script lang="ts" setup>
import { usePreventSeeSourceCode } from '@flypeng/tool/browser';
import { onMounted, onUnmounted } from 'vue';

let clear;

onMounted(() => {
  clear = usePreventSeeSourceCode();
});

onUnmounted(() => {
  clear();
});
</script>

<template>
  <p>阻止默认方法并单击键盘快捷键F12、Ctrl+S、Ctrl+U、Ctrl+Shift+I、Ctrl+Shift+C或Right。单击无响应</p>
</template>
