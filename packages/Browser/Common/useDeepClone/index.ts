import { useCommonType } from '../index'

/**
 * 深拷贝对象
 * @param targetObj 目标对象
 * @param hashMap
 * @returns
 */
export default function useDeepClone(targetObj: any, hashMap = new WeakMap()) {
  if (useCommonType.isNull(targetObj) || useCommonType.isUndefined(targetObj)) return targetObj
  if (useCommonType.isDate(targetObj)) return new Date(targetObj)
  if (useCommonType.isRegExp(targetObj)) return new RegExp(targetObj)
  // 基本数据类型
  if (!useCommonType.isObject(targetObj)) return targetObj
  if (hashMap.has(targetObj)) return hashMap.get(targetObj)
  const resultObj = targetObj.constructor()
  // 将 targetObj 和 resultObj 对应起来，防止重复引用的情况
  hashMap.set(targetObj, resultObj)
  for (const key in targetObj) {
    resultObj[key] = useDeepClone(targetObj[key], hashMap)
  }
  return resultObj
}
