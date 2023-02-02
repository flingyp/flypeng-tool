/**
 * 检测字符串中是否包含中文
 * @param value
 * @returns
 */
export default function useCheckIncludeChinese(value: string) {
  if (value === '') {
    throw new Error('please enter a string')
  }
  const checkStrIncludeChineseRegExp = /^.{0,}[\u4e00-\u9fa5]{1,}.{0,}$/g
  return checkStrIncludeChineseRegExp.test(value)
}
