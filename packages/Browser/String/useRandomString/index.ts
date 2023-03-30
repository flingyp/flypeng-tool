import { useRandomInteger } from '../../index'

const numbers = [
	'0',
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9'
]

const letters = [
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z'
]

/**
 * 生成随机字符串
 * @param length
 * @param supportNumber 是否参杂数字（默认不参杂）
 * @returns
 */
export default function useRandomString(length = 10, supportNumber = false) {
	let chars = []

	supportNumber ? (chars = [...numbers,...letters]) : (chars = [...letters])

  let res = ''
  for (let i = 0; i < length; i++) {
    const id = useRandomInteger(0, chars.length - 1)
    res += chars[id]
  }
  return res
}
