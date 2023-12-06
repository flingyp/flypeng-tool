<script lang="ts" setup>
import { ref, onMounted } from 'vue';

const prefixUrl = 'https://github.com/flingyp/flypeng-tool/blob/main/packages';
// get module and file pathname
let moduleFilePath = ref('');
let sourcePath = ref('');

onMounted(() => {
  // @ts-ignore
  moduleFilePath.value = window.location.pathname.match(/\/flypeng-tool\/(.+)\//)[1];
  sourcePath.value = `${prefixUrl}/${moduleFilePath.value}/index.ts`;
});
</script>

<template>
  <div id="demo-container">
    <label>
      <a :href="sourcePath" target="__blank">Source</a>
    </label>

    <slot>demo here</slot>
  </div>
</template>

<style scoped>
#demo-container {
  font-size: var(--vp-code-font-size);
  background: var(--vp-code-block-bg);
  padding: 2em;
  position: relative;
  margin-bottom: 10px;
  border-radius: 8px;
  transition: background-color 0.5s;
  color: var(--vp-c-text-1);
}

@media (max-width: 720px) {
  #demo-container {
    --width: calc(100vw - var(--sidebar-width) - var(--scrollbar-width)) !important;
    --content-width: min(48rem, var(--width)) !important;
    --margin-left: calc(calc(calc(var(--content-width) - var(--width)) / 2) - 1.5rem) !important;
  }
}

#demo-container > label {
  font-size: 13px;
  position: absolute;
  right: 2%;
  top: 8%;
}
</style>
