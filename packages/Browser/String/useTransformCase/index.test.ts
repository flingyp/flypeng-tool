import { describe, expect, it } from 'vitest'

import useTransformCase from '.'

describe('useTransformCase', () => {
  it('should be defined', () => {
    expect(useTransformCase).toBeDefined()
  })

  it('string to lowerCase', () => {
    expect(useTransformCase('Hello WORLD', 0)).toBe('hello world')
  })

  it('string to upperCase', () => {
    expect(useTransformCase('Hello WORld', 1)).toBe('HELLO WORLD')
  })

  it('string to first lower case', () => {
    expect(useTransformCase('Hello WORld', 2)).toBe('hello WORld')
  })
})
