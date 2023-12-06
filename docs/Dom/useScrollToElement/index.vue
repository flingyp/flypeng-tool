<template>
  <div>
    <button @click="scroolToIntroduction">点击滚动到Introduction节点上</button>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useScrollToElement } from '@flypeng/tool/browser';

const introductionNode = ref<HTMLElement | null>(null);

onMounted(() => {
  introductionNode.value = document.querySelector('h2#introduction');
});

const scroolToIntroduction = () => {
  useScrollToElement(introductionNode.value!);
};
</script>

<style scoped>
button {
  padding: 4px 8px;
  border-radius: 4px;
  color: #ffffff;
  background-color: var(--vp-c-brand);
}
</style>
