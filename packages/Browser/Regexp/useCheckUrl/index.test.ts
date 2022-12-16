import { describe, expect, it } from 'vitest'

import useCheckUrl from '.'

describe('useCheckUrl', () => {
  it('should be defined', () => {
    expect(useCheckUrl).toBeDefined()
  })

  it('validate url whether true', () => {
    expect(useCheckUrl('https://yyblog.top/flypeng-tool')).toEqual(true)
    expect(useCheckUrl('htps://yyblog.top/flypeng-tool')).toEqual(false)
  })
})
