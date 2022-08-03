import { describe, expect, it } from 'vitest'

import useIsBrowser from '.'

describe('useIsBrowser', () => {
  it('should be defined', () => {
    expect(useIsBrowser).toBeDefined()
  })

  it('current at node environment', () => {
    expect(useIsBrowser()).toBe(false)
  })
})
