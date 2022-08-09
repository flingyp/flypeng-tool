/**
 * 返回数据类型
 * @param value
 * @returns
 */
export default function useDataType(value: unknown) {
	if (value === null) return null
	if (value === undefined) return undefined
	return typeof value
}
