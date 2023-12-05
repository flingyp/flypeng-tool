import { describe, expect, it } from 'vitest';

import useNumberSeparate from '.';

describe('useNumberSeparate', () => {
  it('如果位数小于或等于分隔数字，则应按原样返回数字', () => {
    expect(useNumberSeparate(123)).toBe('123');
    expect(useNumberSeparate(1234)).toBe('1,234');
  });

  it('如果位数大于分隔数字，则应返回带逗号的数字', () => {
    expect(useNumberSeparate(123456789, 3)).toBe('123,456,789');
    expect(useNumberSeparate(123456789, 4)).toBe('1,2345,6789');
    expect(useNumberSeparate(123456789, 5)).toBe('1234,56789');
  });

  it('如果数字有小数点，则应返回带有逗号和小数点的数字', () => {
    expect(useNumberSeparate(123456789.1234, 3)).toBe('123,456,789.1234');
    expect(useNumberSeparate(123456789.1234, 4)).toBe('1,2345,6789.1234');
    expect(useNumberSeparate(123456789.1234, 5)).toBe('1234,56789.1234');
  });
});
