import { useCommonType } from '../../Common/index';

/**
 * 如果不是移动设备则返回false，如果是移动设备则会判断是Apple还是Android
 * @returns Apple | Android | false
 */
export default function useMobileDevice() {
  if (!useCommonType.isMobile()) {
    return false;
  }
  if (navigator?.userAgent.match(/iphone|ipod|ipad|Macintosh/i)) return 'Apple';
  return 'Android';
}
