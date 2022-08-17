<script lang="ts" setup>
  import { useDebounce } from '@flypeng/tool'
  import { ref, onMounted } from 'vue'
  const content = ref<string>('')
  const inputChange = e => {
    useDebounce(() => {
      const inputDom = e.target as HTMLInputElement
      content.value = inputDom.value
    }, 500)()
  }

  onMounted(() => {})
</script>

<template>
  <div>
    <div style="margin-bottom: 4px">输入的内容：{{ content }}</div>
    <input type="text" @input="inputChange" placeholder="请输入内容" />
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
