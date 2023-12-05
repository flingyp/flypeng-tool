import { describe, expect, it } from 'vitest';

import useCheckIncludeNumber from '.';

describe('useCheckIncludeNumber', () => {
  it('检查字符串是否包含数字', () => {
    expect(useCheckIncludeNumber('早上好')).toBe(false);
    expect(useCheckIncludeNumber('Hello-World')).toBe(false);
    expect(useCheckIncludeNumber('2022年8月10号')).toBe(true);
    expect(useCheckIncludeNumber('@flypeng/tool')).toBe(false);
  });
});
