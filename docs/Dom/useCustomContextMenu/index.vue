<script lang="ts" setup>
import { useCustomContextMenu } from '@flypeng/tool/browser';
import { ref, onMounted, onUnmounted } from 'vue';

const preventButton = ref<HTMLButtonElement | null>(null);
let clearCustomContextMenu;

onMounted(() => {
  if (preventButton.value) {
    clearCustomContextMenu = useCustomContextMenu(preventButton.value, () => {
      console.log('Custom ContextMenu');
    });
  }
});

onUnmounted(() => {
  clearCustomContextMenu();
});
</script>

<template>
  <div>
    <div>点击 F12 查看控制台</div>
    <button ref="preventButton">单击鼠标右键而不显示上下文菜单</button>
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
