<template>
  <div>{{ todayDateInfo1 }}</div>
</template>

<script setup lang="ts">
import { useFormatDate, useCalendarSwitch } from '@flypeng/tool/browser';

const todayDate = useFormatDate('yyyy-MM-dd');
const todayDateInfo1 = useCalendarSwitch(todayDate, 'lunar');
</script>

<style></style>
