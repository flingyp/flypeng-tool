<template>
  <button ref="buttonSend" @click="sendRequestOnce" :disabled="message === '未发送请求' ? false : true">
    点击发送请求
  </button>
</template>

<script lang="ts" setup>
import { useOnce } from '@flypeng/tool/browser';
import { ref } from 'vue';

const message = ref<'未发送请求' | '已发生请求'>('未发送请求');

const sendRequestOnce = useOnce(() => {
  message.value = '已发生请求';
});
</script>

<style scoped>
button {
  border-radius: 4px;
  color: #ffffff;
  background-color: var(--vp-c-brand);
  padding: 4px 8px;
  margin: 10px 0;
}
button:disabled {
  background-color: var(--vp-c-disabled-bg);
  cursor: not-allowed;
}
</style>
