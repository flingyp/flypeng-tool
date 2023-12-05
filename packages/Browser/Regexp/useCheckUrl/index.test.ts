import { describe, expect, it } from 'vitest';

import useCheckUrl from '.';

describe('useCheckUrl', () => {
  it('检查URL是否有效', () => {
    expect(useCheckUrl('https://yyblog.top/flypeng-tool')).toEqual(true);
    expect(useCheckUrl('htps://yyblog.top/flypeng-tool')).toEqual(false);
  });
});
