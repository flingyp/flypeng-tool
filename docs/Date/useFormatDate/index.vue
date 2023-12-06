<script lang="ts" setup>
import { useFormatDate } from '@flypeng/tool/browser';
</script>

<template>
  <div>
    <div>当前年份: {{ useFormatDate('yyyy') }}</div>
    <div>当前月份: {{ useFormatDate('MM') }}</div>
    <div>当前几号: {{ useFormatDate('dd') }}</div>
    <div>当前时间: {{ useFormatDate('yyyy-MM-dd hh:mm:ss') }}</div>
    <div>传入一个Unix时间戳: {{ useFormatDate('yyyy-MM-dd hh:mm:ss', '2021-01-17T13:32:06.381Z') }}</div>
    <div>传入一个时间戳: {{ useFormatDate('yyyy-MM-dd hh:mm:ss', 1668528000000) }}</div>
  </div>
</template>
