import { useRandomInteger } from '../../index'

const chars = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
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
  'Z',
]

export default function useRandomString(length = 10) {
  let res = ''
  for (let i = 0; i < length; i++) {
    const id = useRandomInteger(0, chars.length - 1)
    res += chars[id]
  }
  return res
}
