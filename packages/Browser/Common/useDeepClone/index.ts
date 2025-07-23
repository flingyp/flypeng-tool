import { useCommonType } from '../index';

const { isNull, isUndefined, isDate, isRegExp, isObject } = useCommonType;

/**
 * 深拷贝对象
 * @param targetObj 目标对象
 * @param hashMap
 * @returns
 */
export default function useDeepClone(targetObj: any, hashMap = new WeakMap()) {
  if (isNull(targetObj) || isUndefined(targetObj)) return targetObj;
  if (isDate(targetObj)) return new Date(targetObj);
  if (isRegExp(targetObj)) return new RegExp(targetObj);
  if (!isObject(targetObj)) return targetObj;

  if (hashMap.has(targetObj)) return hashMap.get(targetObj);

  const resultObj = targetObj.constructor();
  // 将 targetObj 和 resultObj 对应起来，防止重复引用的情况
  hashMap.set(targetObj, resultObj);
  for (const key in targetObj) {
    // @ts-expect-error 忽略类型错误
    resultObj[key] = useDeepClone(targetObj[key], hashMap);
  }
  return resultObj;
}
