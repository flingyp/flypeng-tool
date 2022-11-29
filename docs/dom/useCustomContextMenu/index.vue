<script lang="ts" setup>
  import { useCustomContextMenu } from '@flypeng/tool'
  import { ref, onMounted, onUnmounted } from 'vue'

  const preventButton = ref<HTMLButtonElement | null>(null)
  let clearCustomContextMenu

  onMounted(() => {
    if (preventButton.value) {
      clearCustomContextMenu = useCustomContextMenu(preventButton.value, () => {
        console.log('Custom ContextMenu')
      })
    }
  })

  onUnmounted(() => {
    clearCustomContextMenu()
  })
</script>

<template>
  <div>
    <div>Click F12 to see console</div>
    <button ref="preventButton">Click right and not show context menu</button>
  </div>
</template>

<style scoped>
  button {
    border-radius: 4px;
    color: #ffffff;
    background-color: var(--vp-c-brand);
    padding: 4px 6px;
    margin: 10px 0px;
  }
</style>
