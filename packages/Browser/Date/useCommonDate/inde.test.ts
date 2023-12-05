import { describe, expect, it } from 'vitest';
import useFormatDate from '../useFormatDate';

import useCommonDate from './index';

const currentDate = new Date();

describe('useCommonDate', () => {
  it('添加天数的日期', () => {
    expect(useCommonDate.useAddDateDay(2)).toBe(
      useFormatDate(
        'yyyy-MM-dd',
        new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 2),
      ),
    );
    expect(useCommonDate.useAddDateDay(5, '2022/10/09', 'yyyy-MM-dd')).toBe('2022-10-14');
  });

  it('获取两个日期的间隔天数', () => {
    expect(useCommonDate.useDifDaysValue('2022-10-24', '2022-10-12')).toBe(12);
  });

  it('获取每月的第一天', () => {
    expect(useCommonDate.useGetFirstDay()).toBe(
      useFormatDate('yyyy-MM-dd', new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)),
    );
  });

  it('获取每月的最后一天', () => {
    expect(useCommonDate.useGetLastDay()).toBe(
      useFormatDate('yyyy-MM-dd', new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0)),
    );
  });
});
