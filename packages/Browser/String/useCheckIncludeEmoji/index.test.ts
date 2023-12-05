import { describe, expect, it } from 'vitest';
import useCheckIncludeEmoji from '.';

describe('useCheckIncludeEmoji', () => {
  it('如果字符串包含Emoji, 则应返回True', () => {
    expect(useCheckIncludeEmoji('😃')).toBe(true);
    expect(useCheckIncludeEmoji('👨‍👩‍👦‍👦')).toBe(true);
    expect(useCheckIncludeEmoji('🐷')).toBe(true);
    expect(useCheckIncludeEmoji('👋🌍Hello')).toBe(true);
    expect(useCheckIncludeEmoji('World👩‍🎤')).toBe(true);
  });

  it('如果字符串不包含Emoji, 则应返回False', () => {
    expect(useCheckIncludeEmoji('Hello')).toBe(false);
    expect(useCheckIncludeEmoji('World')).toBe(false);
    expect(useCheckIncludeEmoji('123')).toBe(false);
    expect(useCheckIncludeEmoji('abc')).toBe(false);
    expect(useCheckIncludeEmoji('')).toBe(false);
  });
});
