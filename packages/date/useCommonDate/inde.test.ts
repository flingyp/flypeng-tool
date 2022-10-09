import { describe, expect, it } from 'vitest'

import useCommonDate from './index'

describe('useCommonDate', () => {
  it('should be defined', () => {
    expect(useCommonDate).toBeDefined()
  })

  it('date to add day numbers', () => {
    expect(useCommonDate.useAddDateDay(2)).toBe('2022-10-11')
    expect(useCommonDate.useAddDateDay(5, '2022/10/09', 'yyyy-MM-dd')).toBe('2022-10-14')
  })
})
