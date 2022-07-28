# useLocationInfo

## 基本介绍

返回当前页面链接相关信息

<script lang="ts" setup>
	import DemoContainer from '../../.vitepress/components/DemoContainer.vue'
	import useLocationInfo from './index.vue'
</script>

## 基本使用

```ts
import { useLocationInfo } from '@flypeng/tool'
const locationInfo = useLocationInfo()
```

## 类型声明

```ts
interface LocationInfo {
  href: string
  hostname: string
  port: number
  pathname: string
  params: string
  hash: string
}
/**
 * 返回当前页面链接相关信息
 * @returns
 */
declare function useLocationInfo(): Readonly<Partial<LocationInfo>>
```

## 在线演示

<DemoContainer>
	<useLocationInfo />
</DemoContainer>
