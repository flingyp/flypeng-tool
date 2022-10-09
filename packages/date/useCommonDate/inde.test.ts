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

  it('get dif number of two dates', () => {
    expect(useCommonDate.useDifDaysValue('2022-10-24', '2022-10-12')).toBe(12)
    expect(useCommonDate.useDifDaysValue('2022-10-12')).toBe(2)
  })
})
