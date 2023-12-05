import { describe, expect, it } from 'vitest';
import useTransformCase, { TransformCaseTypeEnum } from '.';

describe('useTransformCase', () => {
  it('应返回小写字符串', () => {
    expect(useTransformCase('Hello World', TransformCaseTypeEnum.LOWER_CASE)).toBe('hello world');
  });

  it('应返回大写字符串', () => {
    expect(useTransformCase('Hello World', TransformCaseTypeEnum.UPPER_CASE)).toBe('HELLO WORLD');
  });

  it('应返回第一个小写字符串', () => {
    expect(useTransformCase('Hello World', TransformCaseTypeEnum.FIRST_LOWER_CASE)).toBe('hello World');
  });
});
