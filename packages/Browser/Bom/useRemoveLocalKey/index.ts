/**
 * remove key from local storage
 * @param key
 */
export default function useRemoveLocalKey(key: string) {
  localStorage.removeItem(key);
}
