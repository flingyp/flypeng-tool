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

export default {
  useLeapYear,
  useTodayWeek
}
