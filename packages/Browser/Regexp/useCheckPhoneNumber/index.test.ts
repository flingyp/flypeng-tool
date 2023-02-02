import { describe, expect, it } from 'vitest'

import useCheckPhoneNumber from '.'

describe('useCheckPhoneNumber', () => {
  it('should be defined', () => {
    expect(useCheckPhoneNumber).toBeDefined()
  })

  it('check some phone number', () => {
    // 所有测试用例的手机号码 均是通过网站上在线生成工具随机生成
    expect(useCheckPhoneNumber('13148367212')).toBe(true)
    expect(useCheckPhoneNumber('17524622494')).toBe(true)
    expect(useCheckPhoneNumber('18419496793')).toBe(true)
    expect(useCheckPhoneNumber('18869205671')).toBe(true)
    expect(useCheckPhoneNumber('15900192124')).toBe(true)
    expect(useCheckPhoneNumber('15549064841')).toBe(true)
    expect(useCheckPhoneNumber('14349064841')).toBe(false)
    expect(useCheckPhoneNumber('15449064841')).toBe(false)
    expect(useCheckPhoneNumber('16849064841')).toBe(false)
    expect(useCheckPhoneNumber('17949064841')).toBe(false)
    expect(useCheckPhoneNumber('19449064841')).toBe(false)
  })
})
