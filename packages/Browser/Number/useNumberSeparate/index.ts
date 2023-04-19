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
	let result = ''
  for (let i = 0; i < len; i++) {
    if ((len - i) % separateNumber === 0 && i !== 0) {
      result += ','
    }
    result += num[i]
  }
	return result
}
