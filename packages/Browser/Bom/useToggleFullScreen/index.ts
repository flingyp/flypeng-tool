/**
 * 触发页面全屏
 * @returns
 */
export default function useToggleFullScreen() {
  const handleElement = document.documentElement
  return handleElement.requestFullscreen({ navigationUI: 'auto' })
}
