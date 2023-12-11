import calendarFormatter from './calendarUtil';

const { solar2lunar, lunar2solar } = calendarFormatter;

/**
 * 获取当前日期阳历或阴历的信息
 * @param date: date format yyyy-MM-dd
 * @param type: 'solar' | 'lunar'
 * @returns
 */
export default function useCalendarSwitch(date: string, type: 'solar' | 'lunar') {
  const year = Number(date.split('-')[0]);
  const month = Number(date.split('-')[1]);
  const day = Number(date.split('-')[2]);
  let resultInfo;
  if (type === 'solar') {
    resultInfo = lunar2solar(year, month, day, false);
  }
  if (type === 'lunar') {
    resultInfo = solar2lunar(year, month, day);
  }

  if (resultInfo === undefined) return -1;
  return resultInfo;
}
