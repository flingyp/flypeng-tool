<script lang="ts" setup>
import { onUnmounted } from 'vue';
import { usePageTabSwitch } from '@flypeng/tool/browser';

const clear = usePageTabSwitch(() => {
  const isPageHidden = document.hidden;
  if (isPageHidden) {
    document.title = 'usePageTabSwitch | Hidden';
  } else {
    document.title = 'usePageTabSwitch | Show';
    setTimeout(() => (document.title = 'usePageTabSwitch | @flypeng/tool'), 1000);
  }
});

onUnmounted(() => {
  clear();
});
</script>

<template>
  <div>Notice current page title change</div>
</template>
