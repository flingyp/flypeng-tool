import { describe, expect, it } from 'vitest'

import useDataSensitive from '.'

describe('useDataSensitive', () => {
  it('should be defined', () => {
    expect(useDataSensitive).toBeDefined()
  })

  it('data default sensitive', () => {
    expect(
      useDataSensitive({
        sensitiveSource: '123456789'
      })
    ).toBe('******789')
  })

  it('custom DataSensitiveOptions', () => {
    expect(
      useDataSensitive({
        sensitiveSource: '123456789',
        startIndex: 2,
        endIndex: 5,
        replaceSource: '#'
      })
    ).toBe('12####789')
  })
})
