<script lang="ts" setup>
import { useLocationInfo } from '@flypeng/tool/browser';

const locationInfo = useLocationInfo();
</script>

<template>
  <div>
    {{ locationInfo }}
  </div>
</template>
