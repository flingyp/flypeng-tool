import { useCommonType } from '../../Common'
/**
 * 格式类型
 */
export type DateFormatOption =
  | 'yyyy-MM-dd hh:mm:ss'
  | 'yyyy-MM-dd'
  | 'yyyy/MM/dd'
  | 'hh:mm:ss'
  | 'yyyy'
  | 'MM'
  | 'dd'
  | 'hh'
  | 'mm'
  | 'ss'

/**
 * 格式化日期函数
 * @param format
 * @param date
 */
export default function useFormatDate(format: DateFormatOption, date?: string | number | Date) {
  let resultDate: string = format
  let handleDate: Date = new Date()

  if (useCommonType.isString(date)) {
    handleDate = new Date(date as string)
  }

  if (useCommonType.isNumber(date)) {
    handleDate = new Date(date as number)
  }

  if (useCommonType.isDate(date)) {
    handleDate = date as Date
  }

  const defineChars = {
    'y+': handleDate.getFullYear(),
    'M+': handleDate.getMonth() + 1,
    'd+': handleDate.getDate(),
    'h+': handleDate.getHours(),
    'm+': handleDate.getMinutes(),
    's+': handleDate.getSeconds()
  }
  for (let key in defineChars) {
    const checkReg = new RegExp(`(${key})`)
    if (checkReg.test(resultDate)) {
      // @ts-ignore
      let currentValue = defineChars[key].toString()
      // 补零操作
      currentValue.length === 1 ? (currentValue = `0${currentValue}`) : currentValue
      resultDate = resultDate.replace(checkReg, currentValue)
    }
  }
  return resultDate
}
