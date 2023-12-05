/**
 * 生成随机整数 [min, max]
 * @param min
 * @param max
 * @returns
 */
export default function useRandomInteger(min: number, max: number) {
  if (min > max) throw new Error(`min: ${min}, max: ${max}`);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
