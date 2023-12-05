import { describe, expect, it } from 'vitest';
import useCheckPasswordStrength from '.';

describe('useCheckPasswordStrength', () => {
  it('检查密码强度', () => {
    expect(useCheckPasswordStrength('123456')).toBe(0);
    expect(useCheckPasswordStrength('123456A')).toBe(1);
    expect(useCheckPasswordStrength('123456789aA')).toBe(2);
    expect(useCheckPasswordStrength('123456789aA~')).toBe(3);
  });
});
