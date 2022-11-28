/**
 * 当浏览器页面切换时执行的回调函数
 * @param callback
 */
export default function usePageTabSwitch(callback: () => void) {
  document.addEventListener('visibilitychange', callback)
  return () => {
    document.removeEventListener('visibilitychange', callback)
  }
}
