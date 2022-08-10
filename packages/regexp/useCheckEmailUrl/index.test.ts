import { describe, expect, it } from 'vitest'

import useCheckEmailUrl from '.'

describe('useCheckEmailUrl', () => {
	it('should be defined', () => {
		expect(useCheckEmailUrl).toBeDefined()
	})

	it('check whether the email is valid', () => {
		// 所有测试用例的邮箱地址 均是通过网站上在线生成工具随机生成
		expect(useCheckEmailUrl('tools@qq.com')).toBe(true)
		expect(useCheckEmailUrl('tools@163.com')).toBe(true)
		expect(useCheckEmailUrl('tools@gmail.com')).toBe(true)
		expect(useCheckEmailUrl('tools@foxmail.com')).toBe(true)
		expect(useCheckEmailUrl('tools@outlook.com')).toBe(true)
		expect(useCheckEmailUrl('tools@126.com')).toBe(true)
		expect(useCheckEmailUrl('tools@domain.com')).toBe(true)
		expect(useCheckEmailUrl('flingyp@live.com')).toBe(true)
		expect(useCheckEmailUrl('flingyp@uutool.cn')).toBe(true)
	})

})
