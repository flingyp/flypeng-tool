# useDataSensitive

## 基本介绍

敏感数据进行脱敏处理

<script lang="ts" setup>
	import DemoContainer from '../../.vitepress/components/DemoContainer.vue'
	import useDataSensitive from './index.vue'
</script>

## 基本使用

```ts
import { useDataSensitive } from '@flypeng/tool'

// 默认
useDataSensitive({ sensitiveSource: '123456789' })

// 自定义
useDataSensitive({
  sensitiveSource: '123456789',
  startIndex: 2,
  endIndex: 5,
  replaceSource: '#'
})
```

## 类型声明

```ts
interface DataSensitiveOptions {
  sensitiveSource: string // 脱敏源
  startIndex?: number // 开始下标
  endIndex?: number // 结束下标（包括）
  replaceSource?: string // 脱敏符号
}
/**
 * 敏感数据进行脱敏处理
 * @param options
 * @returns
 */
declare function useDataSensitive(options: DataSensitiveOptions): string | undefined
```

## 在线演示

<DemoContainer>
	<useDataSensitive />
</DemoContainer>
