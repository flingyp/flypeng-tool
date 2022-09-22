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
export default function useFormatDate(format: DateFormatOption, date?: string) {
  let resultDate: string = format
  let handleDate
  if (!date) {
    handleDate = new Date()
  } else {
    handleDate = new Date(date)
  }
  console.log(handleDate)

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

useFormatDate('yyyy/MM/dd', '2021-01-17T13:32:06.381Z')
