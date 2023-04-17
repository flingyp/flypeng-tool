/**
 * 判断对象是否为空对象
 * @param target
 * @returns
 */
export default function useObjectIsEmpty(target: Record<string, unknown> | null | undefined) {
	if (target === null || target === undefined) {
    return true
  }
  return Object.keys(target).length === 0
}
