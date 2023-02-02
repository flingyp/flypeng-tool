export interface DataSensitiveOptions {
  sensitiveSource: string // 脱敏源
  startIndex?: number // 开始下标
  endIndex?: number // 结束下标（包括）
  replaceSource?: string // 脱敏符号
}

/**
 * 敏感数据进行脱敏处理
 * @param options
 * @returns
 */
export default function useDataSensitive(options: DataSensitiveOptions) {
  const {
    sensitiveSource, startIndex = 0, endIndex = 5, replaceSource = '*',
  } = options
  let handleSource = ''
  let replaceStr = ''
  if (typeof sensitiveSource !== 'string') return
  // 截取需要进行脱敏的部分
  const subStr = sensitiveSource.substring(startIndex, endIndex + 1)
  // 拼接脱敏符号
  for (let i = 0; i < subStr.length; i++) {
    replaceStr += replaceSource
  }
  handleSource = sensitiveSource.replace(subStr, replaceStr)
  return handleSource
}
