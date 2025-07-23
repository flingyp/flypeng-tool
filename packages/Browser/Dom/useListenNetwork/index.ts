/**
 * 监听当前网页是否在线执行回调
 * @param online
 * @param offline
 * @returns
 */
export default function useListenNetwork(
  online: (...args: any[]) => void,
  offline: (...args: any[]) => void,
) {
  // listen page online to execute callback
  window.addEventListener('online', () => {
    online();
  });

  // listen page offline to execute callback
  window.addEventListener('offline', () => {
    offline();
  });
}
