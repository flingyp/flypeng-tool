/**
 * 滚到页面顶部
 */
export default function useGoToTop() {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: 'smooth',
  })
}
