import { describe, expect, it } from 'vitest';

import useCheckUrl from '.';

describe('useCheckUrl', () => {
  it('检查URL是否有效', () => {
    expect(useCheckUrl('https://flingyp.github.io/flypeng-tool')).toEqual(true);
    expect(useCheckUrl('https:_//flingyp.github.io/flypeng-tool')).toEqual(false);
  });
});
