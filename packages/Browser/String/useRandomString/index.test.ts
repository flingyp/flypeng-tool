import { describe, expect, it } from 'vitest';

import useRandomString from '.';

describe('useRandomString', () => {
  it('should be defined', () => {
    expect(useRandomString).toBeDefined();
  });

  it('create default length random string', () => {
    expect(useRandomString().length).toEqual(10);
  });

  it('create custom length random string', () => {
    expect(useRandomString(20).length).toEqual(20);
  });
});
