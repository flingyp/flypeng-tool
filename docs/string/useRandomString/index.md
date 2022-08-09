# useRandomString

## 基本介绍

生成指定长度的随机字符串，包含中文数组 （默认长度 10）

<script lang="ts" setup>
	import useRandomString from './index.vue'
</script>

## 基本使用

```ts
import { useRandomString } from '@flypeng/tool'

const randomStr1 = useRandomString()
const randomStr2 = useRandomString(20)
```

## 在线演示

<DemoContainer>
	<useRandomString />
</DemoContainer>
