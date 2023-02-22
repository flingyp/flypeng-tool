/**
 * 给本地存储中存值
 * @param key
 * @param value
 */
export default function useSetLocalKey(key: string, value: unknown) {
	if(typeof value === 'string') {
		localStorage.setItem(key, value)
	} else {
		localStorage.setItem(key, JSON.stringify(value))
	}
}
