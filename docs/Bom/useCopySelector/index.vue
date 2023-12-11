<template>
  <div class="copyDom">@flypeng-tool - useCopySelector</div>
  <button @click="copy">点击</button>
  <div>复制结果：{{ copyResult ? '成功' : '失败' }}</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useCopySelector } from '@flypeng/tool/browser';

const copyResult = ref(false);

const copy = () => {
  copyResult.value = useCopySelector('.copyDom');
};
</script>

<style scoped>
button {
  width: 80px;
  border-radius: 4px;
  color: #ffffff;
  background-color: var(--vp-c-brand);
  margin: 10px 0;
}
</style>
