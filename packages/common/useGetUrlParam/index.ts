/**
 * 获取URL参数中指定参数值
 * @param param
 * @param origin
 * @returns
 */
export default function useGetUrlParam(param: string, origin?: string) {
  const reg = new RegExp('(^|&)' + param + '=([^&]*)(&|$)')
  let _param = null
  if (typeof window !== 'undefined') {
    if (origin == null) {
      _param = window.location.search.substring(1).match(reg)
    } else {
      _param = origin.substring(1).match(reg)
    }
  }
  if (_param != null) return decodeURIComponent(_param[2])
  return null
}
