<script lang="ts" setup>
import { useDebounce } from '@flypeng/tool/browser';
import { ref, onMounted } from 'vue';
const content = ref<string>('');
const inputDom = ref<HTMLInputElement | null>(null);
const inputChange = () => {
  content.value = inputDom.value?.value as string;
};
onMounted(() => {
  inputDom.value?.addEventListener('input', useDebounce(inputChange, 500));
});
</script>

<template>
  <div>
    <div style="margin-bottom: 4px">输入的内容：{{ content }}</div>
    <input ref="inputDom" type="text" placeholder="请输入内容" />
  </div>
</template>

<style scoped>
input {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-bg);
  color: var(--vp-c-text-1);
  padding-left: 4px;
  font-size: 14px;
  border-radius: 4px;
}

input:focus {
  border: 1px solid var(--vp-c-brand);
  transition: all 0.3s linear;
}
</style>
