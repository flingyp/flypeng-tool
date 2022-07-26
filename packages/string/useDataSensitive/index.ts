export interface DataSensitiveOptions {
  sensitiveSource: string
  startIndex?: number
  endIndex?: number
  replaceSource?: string
}

/**
 * 敏感数据进行脱敏处理
 * @param options
 * @returns
 */
export default function useDataSensitive(options: DataSensitiveOptions) {
  let { sensitiveSource, startIndex = 0, endIndex = 5, replaceSource = '*' } = options
  let handleSource = '',
    replaceStr = ''
  if (typeof sensitiveSource != 'string') return
  // 截取需要进行脱敏的部分
  let subStr = sensitiveSource.substring(startIndex, endIndex + 1)
  // 拼接脱敏符号
  for (let i = 0; i < subStr.length; i++) {
    replaceStr = replaceStr + replaceSource
  }
  handleSource = sensitiveSource.replace(subStr, replaceStr)
  return handleSource
}
