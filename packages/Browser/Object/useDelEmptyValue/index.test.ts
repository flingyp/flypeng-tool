import { describe, expect, it } from 'vitest';

import useDelEmptyValue from '.';

describe('useDelEmptyValue', () => {
  it('删除对象的空值', () => {
    const handleObj = { name: '@flypeng/tool', date: '2023/01/03', test: null };
    expect(useDelEmptyValue(handleObj)).toEqual({
      name: '@flypeng/tool',
      date: '2023/01/03',
    });
  });
});
