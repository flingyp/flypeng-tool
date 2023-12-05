import { describe, expect, it } from 'vitest';

import useCheckIdCard from '.';

describe('useCheckIdCard', () => {
  it('检查身份证是否有效', () => {
    // 所有测试用例的身份证号码 均是通过网站上在线生成工具随机生成
    expect(useCheckIdCard('110101199006075838')).toBe(true);
    expect(useCheckIdCard('110101199003075744')).toBe(true);
    expect(useCheckIdCard('36010219900307877X')).toBe(true);
    expect(useCheckIdCard('310101200003073004')).toBe(true);
    expect(useCheckIdCard('361102200003079349')).toBe(true);
    expect(useCheckIdCard('510104199003071472')).toBe(true);
    expect(useCheckIdCard('620102199003076831')).toBe(true);
    expect(useCheckIdCard('500101200003073821')).toBe(true);
  });
});
