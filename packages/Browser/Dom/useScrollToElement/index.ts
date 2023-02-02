/**
 * 滚动到对应DOM元素节点上
 * @param element
 */
export default function useScrollToElement(element: HTMLElement) {
  // 获取元素距离文档顶部的高度
  const distanceDocuemntTop = element.offsetTop
  window.scrollTo({
    top: distanceDocuemntTop,
    behavior: 'smooth',
  })
}
