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
export default function useLocationInfo(): Readonly<Partial<LocationInfo>> {
  const locationInfo: LocationInfo = {
    href: location.href,
    hostname: location.hostname,
    port: Number(location.port),
    pathname: location.pathname,
    params: decodeURIComponent(location.search),
    hash: decodeURIComponent(location.hash)
  }
  return locationInfo
}
