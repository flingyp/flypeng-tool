import { useCheckUrl } from '../../index'

/**
 * 动态加载脚本文件
 * @param url
 * @param callback
 */
export default async function useDynamicLoadScript(url: string, callback = (...args: unknown[]) => false) {
  if (!useCheckUrl(url)) {
    throw new Error('invalid url')
  }
  const headTag = document.querySelector('head')
  if (!headTag) {
    throw new Error('head tag is null')
  }
  const scriptTag = document.createElement('script')
  scriptTag.type = 'text/javascript'
  scriptTag.src = url
  headTag.appendChild(scriptTag)
  scriptTag.onload = (event) => callback(event)
}
