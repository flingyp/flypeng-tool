/**
 * 判断当前是否为浏览器环境
 * @returns Boolean
 */
export default function useIsBrowser() {
  return ![typeof window, typeof document].includes('undefined')
}
