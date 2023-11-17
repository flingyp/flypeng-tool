/**
 * 检测字符串中是否包含数字
 * @param value
 * @returns
 */
export default function useCheckIncludeNumber(value: string) {
  if (value === '') {
    throw new Error('please enter a string');
  }
  const checkStrIncludeNumberRegExp = /^.{0,}[0-9]{1,}.{0,}$/g;
  return checkStrIncludeNumberRegExp.test(value);
}
