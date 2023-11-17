/**
 * 节流函数
 * @param callback
 * @param delay
 * @param isExecute
 */
export default function useThrottle(callback: Function, delay: number, isExecute = true) {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return function (this: unknown, ...rest: unknown[]) {
    const context = this;
    const args = rest;

    if (isExecute) {
      isExecute = false;
      return callback.apply(context, args);
    } else if (!timeoutId) {
      timeoutId = setTimeout(() => {
        timeoutId = null;
        return callback.apply(context, args);
      }, delay);
    }
  };
}
