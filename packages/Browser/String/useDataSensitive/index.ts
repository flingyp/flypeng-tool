/**
 * sensitiveSource: 脱敏源
 * startIndex: 开始下标
 * endIndex: 结束下标
 * replaceSource：脱敏符号
 */
export interface DataSensitiveOptions {
  sensitiveSource: string;
  startIndex?: number;
  endIndex?: number;
  replaceSource?: string;
}

/**
 * 敏感数据进行脱敏处理
 * @param options
 * @returns
 */
export default function useDataSensitive(options: DataSensitiveOptions) {
  const { sensitiveSource, startIndex = 0, replaceSource = '*' } = options;
  let { endIndex = 5 } = options;
  let handleSource = '';
  let replaceStr = '';

  if (typeof sensitiveSource !== 'string') return '';
  if (endIndex > sensitiveSource.length) endIndex = sensitiveSource.length - 1;
  if (startIndex < 0) return '';
  if (startIndex > endIndex) return '';

  // 截取需要进行脱敏的部分
  const subStr = sensitiveSource.substring(startIndex, endIndex + 1);

  // 拼接脱敏符号
  for (let i = 0; i < subStr.length; i++) {
    replaceStr += replaceSource;
  }
  handleSource = sensitiveSource.replace(subStr, replaceStr);
  return handleSource;
}
