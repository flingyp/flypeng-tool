<script lang="ts" setup>
  import { useLocationInfo } from '@flypeng/tool'

  const locationInfo = useLocationInfo()
</script>

<template>
  <div>
    {{ locationInfo }}
  </div>
</template>
