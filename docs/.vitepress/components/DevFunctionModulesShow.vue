<script lang="ts" setup>
import { useRouter } from 'vitepress';
import navBar from '../../nav-bar';

const router = useRouter();

const navigatorTo = (item: any) => {
  router.go(`/flypeng-tool${item.link}`);
};
</script>

<template>
  <div id="modules-show-container">
    <div v-for="(item, index) in navBar" :key="index">
      <span class="item" @click="navigatorTo(item)">- {{ item.text }} Functions 模块</span>
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

#modules-show-container > div > .item {
  cursor: pointer;
  color: var(--vp-c-brand);
}
</style>
