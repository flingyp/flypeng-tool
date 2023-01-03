import { describe, expect, it } from 'vitest'

import useDelEmptyValue from '.'

describe('useDelEmptyValue', () => {
  it('should be defined', () => {
    expect(useDelEmptyValue).toBeDefined()
  })

  it('delete empty value of object', () => {
    const handleObj = { name: '@flypeng/tool', date: '2023/01/03', test: null }
    expect(useDelEmptyValue(handleObj)).toEqual({
      name: '@flypeng/tool',
      date: '2023/01/03'
    })
  })
})
