/**
 * 节流函数
 * @param callback
 * @param delay
 */
export default function useThrottle(callback: Function, delay: number) {
  let currentTime = Date.now()

  return function (this: unknown, ...rest: unknown[]) {
    const nowTime = Date.now()
    const context = this
    const args = rest
    if (nowTime - currentTime >= delay) {
      currentTime = Date.now()
      return callback.apply(context, args)
    }
  }
}
