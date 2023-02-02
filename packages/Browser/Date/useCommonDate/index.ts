import { useCommonType } from '../../Common'
import useFormatDate, { DateFormatOption } from '../useFormatDate'

/**
 * 判断是否为闰年（能被4整除，但不能被100整除 或者 能被400整除）
 * @param value
 */
function useLeapYear(value: number) {
  if (!useCommonType.isNumber(value)) return false
  if ((value % 4 === 0 && value % 100 !== 0) || value % 400 === 0) return true
  return false
}

/**
 * 获取今天是星期几
 * @returns
 */
function useTodayWeek() {
  const currentDate = new Date()
  const recordWeek = ['日', '一', '二', '三', '四', '五', '六']
  return recordWeek[currentDate.getDay()]
}

/**
 * 获取某年某月的天数
 * @param year
 * @param month
 * @returns
 */
function useMonthNumber(year: number, month: number) {
  if (month < 0 || month > 12) return undefined
  const recordNumber = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  // 如果是闰年，二月份的天数为29
  if (useLeapYear(year)) recordNumber[1] = 29
  return recordNumber[month]
}

/**
 * 指定日期添加天数
 * @param number
 */
export type AddDateDayFormatOption<T> = T extends 'yyyy-MM-dd hh:mm:ss' | 'yyyy-MM-dd' | 'yyyy/MM/dd' ? T : never
function useAddDateDay(
  value: number,
  date?: string | Date,
  dateFormat: AddDateDayFormatOption<DateFormatOption> = 'yyyy-MM-dd',
) {
  const currentDate = useFormatDate(dateFormat, date)
  const resultDate = new Date(currentDate)
  resultDate.setDate(resultDate.getDate() + value)
  return useFormatDate(dateFormat, resultDate)
}

/**
 * 计算两个日期相差的天数
 * @param dateOne
 * @param dateTwo
 * @returns
 */
function useDifDaysValue(dateOne: string | Date, dateTwo: string | Date = new Date()) {
  if (useCommonType.isString(dateOne)) {
    dateOne = new Date(dateOne)
  }
  if (useCommonType.isString(dateTwo)) {
    dateTwo = new Date(dateTwo)
  }
  const newDateOne = dateOne as Date
  const newDateTwo = dateTwo as Date
  // 获取两个日期的毫秒数
  const allMilliseconds = Math.abs(newDateOne.getTime() - newDateTwo.getTime())
  return Math.round(allMilliseconds / 1000 / 60 / 60 / 24)
}

/**
 * 获取当月的第一天的日期
 */
function useGetFirstDay() {
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()
  const currentMonth = currentDate.getMonth()
  const firstDayDate = new Date(currentYear, currentMonth, 1)
  return useFormatDate('yyyy-MM-dd', firstDayDate)
}

/**
 * 获取当月的最后一天的日期
 */
function useGetLastDay() {
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()
  const currentMonth = currentDate.getMonth() + 1
  const lastDayDate = new Date(currentYear, currentMonth, 0)
  return useFormatDate('yyyy-MM-dd', lastDayDate)
}

export default {
  useLeapYear,
  useTodayWeek,
  useMonthNumber,
  useAddDateDay,
  useDifDaysValue,
  useGetFirstDay,
  useGetLastDay,
}
