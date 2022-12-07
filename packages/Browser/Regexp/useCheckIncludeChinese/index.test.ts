import { describe, expect, it } from 'vitest'

import useCheckIncludeChinese from '.'

describe('useCheckIncludeChinese', () => {
	it('should be defined', () => {
		expect(useCheckIncludeChinese).toBeDefined()
	})

	it('check whether string is including chinese', () => {
		expect(useCheckIncludeChinese('早上好')).toBe(true)
		expect(useCheckIncludeChinese('Hello-World')).toBe(false)
		expect(useCheckIncludeChinese('YTo噢噢ols')).toBe(true)
		expect(useCheckIncludeChinese('@flypeng/tools')).toBe(false)
	})
})
