/**
 * 校验 QQ 号码（5-11 位）格式是否正确
 * @param value
 * @returns
 */
export default function useCheckQQNumber(value: string) {
  if (value === '') {
    throw new Error('please enter QQ number')
  }
  // 5 - 11位的QQ号
  const checkQQRegExp = /^[1-9][0-9]{4,10}$/g
  return checkQQRegExp.test(value)
}
