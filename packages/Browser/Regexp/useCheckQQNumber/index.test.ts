import { describe, expect, it } from 'vitest';

import useCheckQQNumber from '.';

describe('useCheckQQNumber', () => {
  it('检查邮箱是否有效', () => {
    // 所有测试用例的QQ账号 均是虚构出来的
    expect(useCheckQQNumber('1915801633')).toBe(true);
    expect(useCheckQQNumber('1215801633')).toBe(true);
    expect(useCheckQQNumber('121580163387')).toBe(false);
  });
});
