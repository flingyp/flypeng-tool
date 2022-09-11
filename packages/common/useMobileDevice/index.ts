/**
 * 判断是苹果设备还是安卓设备
 * @returns true：苹果、false：安卓
 */
export default function () {
  if (typeof window !== 'undefined' && window.navigator.userAgent.match(/iphone|ipod|ipad|Macintosh/i)) return true
  return false
}
