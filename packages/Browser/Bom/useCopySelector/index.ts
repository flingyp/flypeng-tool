/**
 * 拷贝选择器的文本内容
 * @param selector DOM selector
 * @returns
 */
export default function useCopySelector(selector: string) {
  const needCopyDom = document.querySelector(selector);
  const copyContent = needCopyDom?.textContent || '';
  const createTextArea = document.createElement('textarea');
  createTextArea.setAttribute('readonly', 'readonly');
  createTextArea.value = needCopyDom?.textContent || '';
  document.body.appendChild(createTextArea);
  createTextArea.select();
  const copyResult = document.execCommand('copy');
  document.body.removeChild(createTextArea);
  if (copyResult) return true;
  navigator.clipboard.writeText(copyContent);
  return false;
}
