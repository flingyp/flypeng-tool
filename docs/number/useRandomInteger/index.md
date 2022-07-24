# useRandomInteger

## 基本介绍

生成指定区间内随机整数

<script lang="ts" setup>
	import DemoContainer from '../../.vitepress/components/DemoContainer.vue'
	import useRandomInteger from './index.vue'
</script>

## 基本使用

```ts
import { useRandomInteger } from '@flypeng/tool'

const randomInteger = useRandomInteger(10, 100)
```

## 在线演示

<DemoContainer>
	<useRandomInteger />
</DemoContainer>
