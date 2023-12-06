<template>
  <button @click="triggerFullScreen">点击全屏</button>
</template>

<script lang="ts" setup>
import { useCommonType, useToggleFullScreen } from '@flypeng/tool/browser';

const triggerFullScreen = async () => {
  const isSupportFullScreen = await useToggleFullScreen();
  if (!useCommonType.isUndefined(isSupportFullScreen)) {
    throw new Error('The browser does not support full screen');
  }
};
</script>

<style scoped>
button {
  border-radius: 4px;
  color: #ffffff;
  background-color: var(--vp-c-brand);
  padding: 4px 6px;
  margin: 10px 0;
}
</style>
