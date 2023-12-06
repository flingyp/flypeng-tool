<script lang="ts" setup>
import { useListenNetwork } from '@flypeng/tool/browser';
import { ref } from 'vue';

const isOnLine = ref(true);
useListenNetwork(
  () => {
    isOnLine.value = true;
  },
  () => {
    isOnLine.value = false;
  },
);
</script>

<template>
  <div ref="online" v-if="isOnLine">网络已连接</div>
  <div ref="offline" v-else>网络已断开</div>
</template>
