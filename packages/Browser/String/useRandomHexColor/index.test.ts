import { describe, expect, it } from 'vitest';
import useRandomHexColor from '.';

describe('useRandomHexColor', () => {
  it('应返回有效的十六进制颜色', () => {
    const randomHexColor = useRandomHexColor();
    expect(randomHexColor).toMatch(/^#[0-9a-fA-F]{6}$/);
  });

  it('每次都应返回不同的颜色', () => {
    const randomHexColor1 = useRandomHexColor();
    const randomHexColor2 = useRandomHexColor();
    expect(randomHexColor1).not.toEqual(randomHexColor2);
  });
});
