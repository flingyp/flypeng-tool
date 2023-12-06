<script lang="ts" setup>
import { useRandomInteger } from '@flypeng/tool/browser';
</script>

<template>
  <div>生成的随机整数：{{ useRandomInteger(10, 100) }}</div>
</template>
