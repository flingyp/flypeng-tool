<script lang="ts" setup>
import { ref } from 'vue';
import { useNumberSeparate } from '@flypeng/tool/browser';
const separateNumber = ref(123456789);
</script>

<template>
  <div>
    <h4>Default Separation Number is 3</h4>
    <span>{{ separateNumber }}：{{ useNumberSeparate(separateNumber, 3) }}</span>
  </div>
  <div>
    <h4>Config Separation Number is 4</h4>
    <div>{{ separateNumber }}：{{ useNumberSeparate(separateNumber, 4) }}</div>
  </div>
</template>

<style scoped>
div {
  margin: 8px 0;
}
</style>
