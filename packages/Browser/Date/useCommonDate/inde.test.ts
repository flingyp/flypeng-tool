import { describe, expect, it } from 'vitest';
import useFormatDate from '../useFormatDate';

import useCommonDate from './index';

const currentDate = new Date();

describe('useCommonDate', () => {
  it('should be defined', () => {
    expect(useCommonDate).toBeDefined();
  });

  it('date to add day numbers', () => {
    expect(useCommonDate.useAddDateDay(2)).toBe(
      useFormatDate(
        'yyyy-MM-dd',
        new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 2),
      ),
    );
    expect(useCommonDate.useAddDateDay(5, '2022/10/09', 'yyyy-MM-dd')).toBe('2022-10-14');
  });

  it('get dif number of two dates', () => {
    expect(useCommonDate.useDifDaysValue('2022-10-24', '2022-10-12')).toBe(12);
  });

  it('get first day of month', () => {
    expect(useCommonDate.useGetFirstDay()).toBe(
      useFormatDate('yyyy-MM-dd', new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)),
    );
  });

  it('get last day of month', () => {
    expect(useCommonDate.useGetLastDay()).toBe(
      useFormatDate('yyyy-MM-dd', new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0)),
    );
  });
});
