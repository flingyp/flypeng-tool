# useIsMobile

## 基本介绍

判断当前是 PC 端还是 Mobile 端。是 Pc 端返回 False， Mobile 返回 True

<script lang="ts" setup>
	import DemoContainer from '../../.vitepress/components/DemoContainer.vue'
	import useIsMobile from './index.vue'
</script>

## 基本使用

```ts
import { useIsMobile } from '@flypeng/tool'

const isMobile = useIsMobile() // boolean
```

## 在线演示

<DemoContainer>
	<useIsMobile />
</DemoContainer>
