<script lang="ts" setup>
  import { useLeapYear } from '@flypeng/tool'
</script>

<template>
  <div>2022： {{ useLeapYear(2022) }}</div>
  <div>2020： {{ useLeapYear(2020) }}</div>
  <div>2024：{{ useLeapYear(2024) }}</div>
</template>
