<script lang="ts" setup></script>

<template>
  <div id="demo-container">
    <label>
      <a
        href="https://github.com/flingyp/-flingyp-util/blob/main/packages/core/useRandomInteger/index.ts"
        target="__blank"
        >Source</a
      >
    </label>

    <slot>demo here</slot>
  </div>
</template>

<style scoped>
  #demo-container {
    font-size: var(--vt-doc-code-font-size);
    background: var(--vp-code-block-bg);
    padding: 2em;
    position: relative;
    margin-bottom: 10px;
    border-radius: 8px;
    transition: background-color 0.5s;
    color: var(--vp-c-text-1);
  }

  @media (max-width: 720px) {
    #demo-container {
      --width: calc(100vw - var(--sidebar-width) - var(--scrollbar-width)) !important;
      --content-width: min(48rem, var(--width)) !important;
      --margin-left: calc(calc(calc(var(--content-width) - var(--width)) / 2) - 1.5rem) !important;
    }
  }

  #demo-container > label {
    font-size: 13px;
    position: absolute;
    right: 2%;
    top: 8%;
  }
</style>
