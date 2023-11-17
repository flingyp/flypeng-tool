export class TouchBottomClass {
  private isEnable = true;

  private isEnd = false;

  private scrollCallback: (this: Element, ev: Event) => void;

  private callback: Function;

  private selector: Element;

  constructor(callback: Function, selector: Element) {
    this.callback = callback;
    this.selector = selector;
    this.scrollCallback = () => false;

    this.start();
  }

  private start() {
    let timer: null | NodeJS.Timeout = null;
    const targetElement = this.selector;
    this.scrollCallback = (e: Event) => {
      if (this.isEnable) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          // 元素向上滚动的高度
          const { scrollTop } = targetElement;
          // 元素的可视高度,就是肉眼可见的那部分全屏高度
          const { clientHeight } = targetElement;
          // 元素的真实高度
          const { scrollHeight } = targetElement;
          if (!this.isEnd && scrollHeight <= scrollTop + clientHeight) {
            this.callback(e);
          }
        }, 300);
      }
    };
    targetElement.addEventListener('scroll', this.scrollCallback, false);
  }

  private end() {
    this.isEnd = true;
  }

  public stop() {
    this.isEnable = false;
    const targetElement = this.selector;
    targetElement.removeEventListener('scroll', this.scrollCallback, false);
  }
}

/**
 * 滚动到底部并执行回调函数
 * @param selector
 * @param callback
 * @returns
 */
export default function useScrollToBottom(selector: Element, callback: Function) {
  const touchBottomInstance = new TouchBottomClass(callback, selector);
  return touchBottomInstance;
}
