import { useCommonType } from '../../common/index'

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
  let recordNumber = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  // 如果是闰年，二月份的天数为29
  if (useLeapYear(year)) recordNumber[1] = 29
  return recordNumber[month]
}

export default {
  useLeapYear,
  useTodayWeek,
  useMonthNumber
}
