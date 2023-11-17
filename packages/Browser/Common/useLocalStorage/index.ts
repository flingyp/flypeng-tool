export default function useLocalStorage() {
  const get = (key: string) => localStorage.getItem(key);

  const set = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
    return get(key);
  };

  const remove = (key: string) => localStorage.removeItem(key);

  const clear = () => localStorage.clear();

  return {
    get,
    set,
    clear,
    remove,
  };
}
