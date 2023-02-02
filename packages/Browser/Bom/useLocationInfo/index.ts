export interface LocationInfo {
  href: string
  hostname: string
  port: number
  pathname: string
  params: string
  hash: string
}

/**
 * 返回当前页面链接相关信息
 * @returns
 */
export default function useLocationInfo(): Readonly<Partial<LocationInfo>> | null {
  if (typeof window !== 'undefined') {
    const locationInfo: LocationInfo = {
      href: window.location.href,
      hostname: window.location.hostname,
      port: Number(window.location.port),
      pathname: window.location.pathname,
      params: decodeURIComponent(window.location.search),
      hash: decodeURIComponent(window.location.hash),
    }
    return locationInfo
  }
  return null
}
