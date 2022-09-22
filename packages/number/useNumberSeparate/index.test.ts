import { describe, expect, it } from 'vitest'

import useNumberSeparate from '.'

describe('useNumberSeparate', () => {
  it('should be defined', () => {
    expect(useNumberSeparate).toBeDefined()
  })

  it('separate number by default number', () => {
    expect(useNumberSeparate(1234567892)).toBe('1,234,567,892')
  })

  it('separate number by custom separate number', () => {
    expect(useNumberSeparate(1234567892, 4)).toBe('12,3456,7892')
  })
})
