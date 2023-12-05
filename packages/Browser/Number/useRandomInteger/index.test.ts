import { describe, expect, it } from 'vitest';
import useRandomInteger from '.';

describe('useRandomInteger', () => {
  it('应返回一个介于最小值和最大值之间的随机整数', () => {
    const min = 1;
    const max = 10;
    const randomInteger = useRandomInteger(min, max);
    expect(randomInteger).toBeLessThanOrEqual(max);
    expect(randomInteger).toBeGreaterThanOrEqual(min);
  });

  it('如果最小值大于最大值, 应返报错提示', () => {
    const min = 10;
    const max = 1;
    expect(() => useRandomInteger(min, max)).toThrowError(`min: ${min}, max: ${max}`);
  });
});
