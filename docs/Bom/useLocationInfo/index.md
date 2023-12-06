# useLocationInfo

## Introduction

返回当前页面链接相关信息

## Type Declaration

```ts
interface LocationInfo {
  href: string;
  hostname: string;
  port: number;
  pathname: string;
  params: string;
  hash: string;
}
/**
 * 返回当前页面链接相关信息
 * @returns
 */
declare function useLocationInfo(): Readonly<Partial<LocationInfo>> | null;
```

## Online Demo

<preview path="./index.vue" title="useLocationInfo" description="返回当前页面链接相关信息"></preview>
