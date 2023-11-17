/**
 * 保证函数只执行一次
 * @param callback
 * @returns
 */
export default function useOnce(callback: () => void) {
  let run = false;
  return function () {
    if (run) return;
    // @ts-ignore
    callback.apply(this, arguments);
    run = true;
  };
}
