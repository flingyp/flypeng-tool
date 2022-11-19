/**
 * 判断对象是否为空对象
 * @param target
 * @returns
 */
export default function useObjectIsEmpty(target: Object) {
  return Object.keys(target).length === 0 ? true : false
}
