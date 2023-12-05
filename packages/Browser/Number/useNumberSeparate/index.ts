/**
 * 数字根据指定数量进行分割
 * @param value
 * @param separateNumber
 * @returns
 */
export default function useNumberSeparate(value: number, separateNumber = 3) {
  const num = value.toString();
  const len = num.length;
  if (len <= separateNumber) return num;

  let resultStr = '';
  const valueStr = value.toString();
  let splitStr = valueStr;

  if (valueStr.includes('.')) splitStr = valueStr.split('.')[0];

  for (let i = 0; i < splitStr.length; i++) {
    if ((splitStr.length - i) % separateNumber === 0 && i !== 0) {
      resultStr += ',';
    }
    resultStr += num[i];
  }

  if (valueStr.includes('.')) return `${resultStr}.${valueStr.split('.')[1]}`;

  return resultStr;
}
