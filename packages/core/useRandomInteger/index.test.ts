import { describe, expect, it } from 'vitest'

import useRandomInteger from '.'

describe('useRandomInteger', () => {
  it('should be defined', () => {
    expect(useRandomInteger).toBeDefined()
  })

  it('integer value range in [min, max]', () => {
    const integer = useRandomInteger(10, 100)
    expect(integer).toBeGreaterThanOrEqual(10)
    expect(integer).toBeLessThanOrEqual(100)
  })

  it('min greater than max', () => {
    const integer = useRandomInteger(100, 10)
    expect(integer).toBeGreaterThanOrEqual(10)
    expect(integer).toBeLessThanOrEqual(100)
  })
})
