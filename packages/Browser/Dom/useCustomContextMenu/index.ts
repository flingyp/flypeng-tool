/**
 * 阻止鼠标右键点击默认事件并且执行回调函数
 * @param node
 * @param callback
 */
export default function useCustomContextMenu(
  node: HTMLElement,
  callback: () => void,
) {
  const customCallback = (e: MouseEvent) => {
    e.preventDefault();
    callback();
  };
  node.addEventListener('contextmenu', customCallback);

  return () => {
    node.removeEventListener('contextmenu', customCallback);
  };
}
