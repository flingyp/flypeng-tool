const objectToString = Object.prototype.toString

const isUndefined = (value: unknown) => typeof value === 'undefined'
const isString = (value: unknown) => typeof value === 'string'
const isNumber = (value: unknown) => typeof value === 'number'
const isObject = (value: unknown) => value !== null && typeof value === 'object'

const isArray = (value: unknown) => Array.isArray(value)

const isNull = (value: unknown) => objectToString.call(value) === '[object Null]'
const isFunction = (value: unknown) => objectToString.call(value) === '[object Function]'
const isDate = (value: unknown) => objectToString.call(value) === '[object Date]'
const isMap = (value: unknown) => objectToString.call(value) === '[object Map]'
const isSet = (value: unknown) => objectToString.call(value) === '[object Set]'

const typeToString = (value: unknown) => objectToString.call(value)

export default {
  isUndefined,
  isString,
  isNumber,
  isObject,
  isArray,
  isNull,
  isFunction,
  isDate,
  isMap,
  isSet,
  typeToString
}
