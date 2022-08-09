import { describe, expect, it } from 'vitest'

import useDataType from '.'

describe('useDataType', () => {
	it('should be defined', () => {
		expect(useDataType).toBeDefined()
	})

	it('typeof is String', () => {
		expect(useDataType('@flypeng/tool')).toBe('string')
	})

	it('typeof is Number', () => {
		expect(useDataType(2)).toBe('number')
	})

	it('typeof is Boolean', () => {
		expect(useDataType(true)).toBe('boolean')
	})

	it('typeof is null', () => {
		expect(useDataType(null)).toBe(null)
	})

	it('typeof is undefined', () => {
		expect(useDataType(undefined)).toBe(undefined)
	})

	it('typeof is Function', () => {
		expect(useDataType(function () { console.log('Hello World') })).toBe('function')
	})

	it('typeof is Object', () => {
		expect(useDataType({ message: 'Hello World' })).toBe('object')
	})

	it('typeof is Symbol', () => {
		expect(useDataType(Symbol('Hello World'))).toBe('symbol')
	})
})
