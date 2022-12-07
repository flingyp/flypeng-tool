<script lang="ts" setup>
  import { useLocationInfo } from '@flypeng/browser'

  const locationInfo = useLocationInfo()
</script>

<template>
  <div>
    {{ locationInfo }}
  </div>
</template>
