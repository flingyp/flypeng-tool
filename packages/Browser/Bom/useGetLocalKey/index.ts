/**
 * 从本地存储中获取Key的值
 * @param key
 * @returns
 */
export default function useGetLocalKey(key: string) {
	return localStorage.getItem(key)
}
