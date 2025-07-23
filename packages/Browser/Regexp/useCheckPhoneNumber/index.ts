/**
 * 检测电话号码是否有效
 * @param value
 * @returns
 */
export default function useCheckPhoneNumber(value: string) {
  if (value === '') {
    throw new Error('please enter mobile phone number');
  }
  // 前三位数匹配规则 13\d、14[5-9]、15[0-3|5-9]、16[2567]、17[0-8]、18\d、19[0-35-9]
  // 后八位任意数字
  const checkPhoneRegExp =
    /^1(3\d|4[5-9]|5[0-35-9]|6[2567]|7[0-8]|8\d|9[0-35-9])\d{8}$/g;
  return checkPhoneRegExp.test(value);
}
