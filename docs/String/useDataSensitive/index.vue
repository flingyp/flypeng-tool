<script lang="ts" setup>
import { useDataSensitive } from '@flypeng/tool/browser';

const defaultSource = '123456789';
</script>

<template>
  <div>
    <span>默认：{{ defaultSource }}：</span>
    <span>{{ useDataSensitive({ sensitiveSource: defaultSource }) }}</span>
  </div>
  <div>
    <span>自定义：{{ defaultSource }}：</span>
    <span>{{
      useDataSensitive({
        sensitiveSource: defaultSource,
        startIndex: 2,
        endIndex: 5,
        replaceSource: '#',
      })
    }}</span>
  </div>
</template>
