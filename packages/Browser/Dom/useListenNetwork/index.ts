/**
 * 监听当前网页是否在线执行回调
 * @param online
 * @param offline
 * @returns
 */
export default function useListenNetwork(online: (...args: any[]) => void, offline: (...args: any[]) => void) {
  let curIsOnLine

  window.addEventListener('load', () => {
    curIsOnLine = navigator.onLine

    // listen page online to execute callback
    window.addEventListener('online', () => {
      curIsOnLine = true
      online()
    })

    // listen page offline to execute callback
    window.addEventListener('offline', () => {
      curIsOnLine = false
      offline()
    })
  })

  return curIsOnLine
}
