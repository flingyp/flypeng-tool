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
  <p>
    Prevent default method and click keyboard shortcuts that F12, Ctrl+S, Ctrl+U, Ctrl+Shift+I, Ctrl+Shift+C or right
    click not have response
  </p>
</template>
