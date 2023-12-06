<script lang="ts" setup>
import { useCheckIncludeEmoji } from '@flypeng/tool/browser';

const checkStringOne = '@flypeng/tool';
const checkStringTwo = '🚀@flypeng/tool✨';
</script>

<template>
  <div>{{ checkStringOne }}: {{ useCheckIncludeEmoji(checkStringOne) }}</div>
  <div>{{ checkStringTwo }}: {{ useCheckIncludeEmoji(checkStringTwo) }}</div>
</template>
