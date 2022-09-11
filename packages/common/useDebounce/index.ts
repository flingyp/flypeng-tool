/**
 * 防抖函数
 * @param callback
 * @param delay （单位：毫秒）
 */
export default function useDebounce(callback: Function, delay: number) {
  let timer: any = null
  return function (this: unknown, ...rest: unknown[]) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(callback.apply(this, rest), delay)
  }
}
