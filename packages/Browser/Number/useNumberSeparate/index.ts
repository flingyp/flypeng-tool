/**
 * 数字根据指定数量进行分割
 * @param value
 * @param separateNumber
 * @returns
 */
export default function useNumberSeparate(value: number, separateNumber = 3) {
  const num = value.toString()
  const len = num.length
  if (len <= separateNumber) return num
  const remainderNumber = len % separateNumber
  const SeparateReg = new RegExp(`\\d{${separateNumber}}`, 'g')
  const numberSeparateStr = num.slice(remainderNumber, len).match(SeparateReg)!.join(',')
  // 不是3的整数倍
  if (remainderNumber > 0) return `${num.slice(0, remainderNumber)},${numberSeparateStr}`
  // 3的整数倍
  return numberSeparateStr
}
