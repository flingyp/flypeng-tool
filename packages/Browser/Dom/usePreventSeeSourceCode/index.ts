import { useCustomContextMenu } from '../index'

/**
 * 禁止用户以任何方式查看网页源代码（Ctrl+S、Ctrl+U、Ctrl+Shift+I、Ctrl+Shift+C、点击 F12 和 点击鼠标右键）
 * @param callback
 * @returns
 */
export default function usePreventSeeSourceCode(callback?: () => void) {
  const customCallback = callback || (() => false)
  const keyDownCallback = (e: KeyboardEvent) => {
    const keyCode = e.keyCode || e.which || e.charCode
    const ctrlKey = e.ctrlKey || e.metaKey
    if (ctrlKey && (keyCode == 83 || keyCode == 85 || keyCode == 73)) {
      e.preventDefault()
      customCallback()
    } else if (ctrlKey && (keyCode == 83 || keyCode == 85 || keyCode == 67)) {
      e.preventDefault()
      customCallback()
    } else if (keyCode && keyCode == 123) {
      e.preventDefault()
      customCallback()
    }
    return false
  }
  document.addEventListener('keydown', keyDownCallback)
  // @ts-ignore
  const clearCustomContextMenu = useCustomContextMenu(document, customCallback)
  return () => {
    document.removeEventListener('keydown', keyDownCallback)
    clearCustomContextMenu()
  }
}
