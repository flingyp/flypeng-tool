import { describe, expect, it } from 'vitest';
import useDataSensitive from '.';

describe('useDataSensitive', () => {
  it('应返回包含替换字符的字符串', () => {
    const result = useDataSensitive({
      sensitiveSource: '123456',
      startIndex: 1,
      endIndex: 4,
      replaceSource: '*',
    });
    expect(result).toBe('1****6');
  });

  it('如果开始小标大于结束下标, 则应返回空字符串', () => {
    const result = useDataSensitive({
      sensitiveSource: '123456',
      startIndex: 6,
      endIndex: 5,
      replaceSource: '*',
    });
    expect(result).toBe('');
  });

  it('如果开始小标小于0, 则应返回空字符串', () => {
    const result = useDataSensitive({
      sensitiveSource: '123456',
      startIndex: -1,
      endIndex: 5,
      replaceSource: '*',
    });
    expect(result).toBe('');
  });

  it('如果结束下标大于源的长度, 则应返回空字符串', () => {
    const result = useDataSensitive({
      sensitiveSource: '123456',
      startIndex: 1,
      endIndex: 10,
      replaceSource: '*',
    });
    expect(result).toBe('1*****');
  });
});
