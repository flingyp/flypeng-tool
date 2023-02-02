/**
 * 校测邮箱地址是否有效
 * @param value
 * @returns
 */
export default function useCheckEmailUrl(value: string) {
  if (value === '') {
    throw new Error('please enter email url')
  }
  const checkEmailRegExp =		/^[A-Za-z0-9-_\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/g
  return checkEmailRegExp.test(value)
}
