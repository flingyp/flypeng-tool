import { describe, expect, it } from 'vitest'

import useCheckQQNumber from '.'

describe('useCheckQQNumber', () => {
  it('should be defined', () => {
    expect(useCheckQQNumber).toBeDefined()
  })

  it('check whether the email is valid', () => {
    // 所有测试用例的QQ账号 均是虚构出来的
    expect(useCheckQQNumber('1915801633')).toBe(true)
    expect(useCheckQQNumber('1215801633')).toBe(true)
    expect(useCheckQQNumber('121580163387')).toBe(false)
  })
})
