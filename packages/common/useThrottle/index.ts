/**
 * 节流函数
 * @param callback
 * @param delay
 */
export default function useThrottle(callback: Function, delay: number) {
  let flag = true
  let firstTimer: number = 0
  return function () {
    // 记录第一次的时间戳
    if (flag) {
      firstTimer = Date.now()
      flag = false
    }
    // 获取现在的时间戳
    const current = Date.now()
    // 如果现在的时间戳 >= 第一次时间戳 + 延迟执行的时间 就可以执行函数
    if (current >= firstTimer + delay) {
      callback()
      flag = true
      firstTimer = Date.now()
    }
  }
}
