/**
 * 拷贝指定内容到剪贴板中
 * @param content
 * @returns
 */
export default function useCopyContent(content: string) {
  navigator.clipboard.writeText(content)
}
