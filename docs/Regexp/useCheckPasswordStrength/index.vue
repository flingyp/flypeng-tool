<template>
  <input v-model="checkValue" type="text" placeholder="请输入内容" />
  <label style="margin-left: 8px">{{ passwordLevel }}</label>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { useCheckPasswordStrength } from '@flypeng/tool/browser';

const checkValue = ref('');

const passwordLevel = computed(() => {
  const level = useCheckPasswordStrength(checkValue.value);
  if (level === 0) return 'Risk';
  if (level === 1) return 'Weak';
  if (level === 2) return 'Medium';
  if (level === 3) return 'Strong';
  return level;
});
</script>

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
