import { describe, expect, it } from 'vitest';
import useObjectIsEmpty from '.';

describe('useObjectIsEmpty', () => {
  it('如果对象为空或未定义, 则应返回True', () => {
    expect(useObjectIsEmpty(null)).toBe(true);
    expect(useObjectIsEmpty(undefined)).toBe(true);
  });

  it('如果对象为空, 则应返回True', () => {
    expect(useObjectIsEmpty({})).toBe(true);
  });

  it('如果对象不为空, 则应返回False', () => {
    expect(useObjectIsEmpty({ key: 'value' })).toBe(false);
  });
});
