<script lang="ts" setup>
import { useGetUrlParam } from '@flypeng/tool/browser';

const customParams = '?name=@flypeng/tool&description=工具库';
</script>

<template>
  <div>
    <section>
      获取当前地址的参数name：
      {{ useGetUrlParam('name') || '不存在此参数' }}
    </section>
    <section>
      获取<label style="color: var(--vp-c-brand)">{{ customParams }}</label
      >：
      {{ useGetUrlParam('name', customParams) || '不存在此参数' }}
    </section>
    <section>
      获取<label style="color: var(--vp-c-brand)">{{ customParams }}</label
      >：
      {{ useGetUrlParam('description', customParams) || '不存在此参数' }}
    </section>
  </div>
</template>
