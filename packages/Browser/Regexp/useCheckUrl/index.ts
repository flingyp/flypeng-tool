/**
 * 验证URL是否是有效的
 * @param value
 * @returns
 */
export default function useCheckUrl(value: string) {
  const checkUrlReg = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/
  if (!checkUrlReg.test(value)) return false
  return true
}
