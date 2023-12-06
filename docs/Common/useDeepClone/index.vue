<script lang="ts" setup>
import { useDeepClone } from '@flypeng/tool/browser';
let targetObj: {
  name: string;
  address: any;
  origin: any;
} = { name: '@flypeng-tool', address: { x: 100 }, origin: undefined };
targetObj.origin = targetObj;

const resultObj = useDeepClone(targetObj);
resultObj.name = 'change-@flypeng-tool';
resultObj.address.x = 1000;
</script>

<template>
  <div>拷贝目标：{{ targetObj.name }} 拷贝目标：{{ targetObj.address.x }}</div>
  <div>结果目标：{{ resultObj.name }} 结果目标：{{ resultObj.address.x }}</div>
</template>
