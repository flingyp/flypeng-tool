import { useCommonType } from '../../index';

/**
 * 删除对象中属性为Null的值
 */
export default function useDelEmptyValue<T extends object>(targetObj: T) {
  const newObj = {} as T;
  for (const key in targetObj) {
    const curValue = targetObj[key];
    if (!useCommonType.isNull(curValue)) {
      newObj[key] = curValue;
    }
    if (useCommonType.isObject(curValue)) {
      if (curValue === targetObj) return;
      newObj[key] = useDelEmptyValue(curValue as any);
    }
  }
  return newObj;
}
