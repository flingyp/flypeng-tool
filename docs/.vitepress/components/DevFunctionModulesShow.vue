<script lang="ts" setup>
  // @ts-ignore
  import navBar from '../../nav-bar'
</script>

<template>
  <div id="modules-show-container">
    <div v-for="(item, index) in navBar" :key="index">
      <a :href="`/flypeng-tool${item.link}`">- {{ item.text }} Functions 模块</a>
    </div>
  </div>
</template>

<style scoped>
  #modules-show-container {
    font-size: var(--vp-code-font-size);
    background: var(--vp-code-block-bg);
    padding: 2em;
    position: relative;
    margin-bottom: 10px;
    border-radius: 8px;
    transition: background-color 0.5s;
    color: var(--vp-c-text-1);
  }

  #modules-show-container > div:not(:last-of-type) {
    margin-bottom: 0.6em;
  }
</style>
