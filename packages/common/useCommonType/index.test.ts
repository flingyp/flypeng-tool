import { describe, expect, it } from 'vitest'

import useGetType from '.'

describe('useGetType', () => {
  it('should be defined', () => {
    expect(useGetType).toBeDefined()
  })

  it('typeof is String', () => {
    expect(useGetType('@flypeng/tool')).toBe('string')
  })

  it('typeof is Number', () => {
    expect(useGetType(2)).toBe('number')
  })

  it('typeof is Boolean', () => {
    expect(useGetType(true)).toBe('boolean')
  })

  it('typeof is null', () => {
    expect(useGetType(null)).toBe(null)
  })

  it('typeof is undefined', () => {
    expect(useGetType(undefined)).toBe(undefined)
  })

  it('typeof is Function', () => {
    expect(
      useGetType(function () {
        console.log('Hello World')
      })
    ).toBe('function')
  })

  it('typeof is Object', () => {
    expect(useGetType({ message: 'Hello World' })).toBe('object')
  })

  it('typeof is Symbol', () => {
    expect(useGetType(Symbol('Hello World'))).toBe('symbol')
  })
})
