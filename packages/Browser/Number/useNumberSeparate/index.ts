/**
 * 数字根据指定数量进行分割
 * @param value
 * @param separateNumber
 * @returns
 */
export default function useNumberSeparate(value: number, separateNumber: number = 3) {
  let num = value.toString()
  let len = num.length
  if (len <= separateNumber) return num
  let remainderNumber = len % separateNumber
  const SeparateReg = new RegExp(`\\d{${separateNumber}}`, 'g')
  const numberSeparateStr = num.slice(remainderNumber, len).match(SeparateReg)!.join(',')
  // 不是3的整数倍
  if (remainderNumber > 0) return num.slice(0, remainderNumber) + ',' + numberSeparateStr
  // 3的整数倍
  else return numberSeparateStr
}
