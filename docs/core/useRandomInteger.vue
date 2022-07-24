<script lang="ts" setup>
  import { useRandomInteger } from '@flypeng/tool'
</script>

<template>
  <div>
    <span>生成的随机整数：{{ useRandomInteger(10, 100) }}</span>
  </div>
</template>
