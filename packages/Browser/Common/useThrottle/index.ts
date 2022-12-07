/**
 * 节流函数
 * @param callback
 * @param delay
 */
export default function useThrottle(callback: Function, delay: number) {
  let record = Date.now()

  return function (this: unknown, ...rest: unknown[]) {
    const nowTime = Date.now()
    const context = this
    const args = rest
    if (nowTime >= record + delay) {
      record = Date.now()
      return callback.apply(context, args)
    }
  }
}
