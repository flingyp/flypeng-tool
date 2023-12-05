import { describe, expect, it } from 'vitest';

import useCheckIncludeChinese from '.';

describe('useCheckIncludeChinese', () => {
  it('检查字符串是否包含中文', () => {
    expect(useCheckIncludeChinese('早上好')).toBe(true);
    expect(useCheckIncludeChinese('Hello-World')).toBe(false);
    expect(useCheckIncludeChinese('YTo噢噢ols')).toBe(true);
    expect(useCheckIncludeChinese('@flypeng/tools')).toBe(false);
  });
});
