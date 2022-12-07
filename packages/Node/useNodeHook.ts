import { lstatSync } from 'fs'

/**
 * 获取执行该方法时所在的目录
 * @returns
 */
export const useGetCurrentPath = () => process.cwd()
/**
 * 判断当前路径是否是文件
 * @param path
 * @returns
 */
export const useIsFile = (path: string) => lstatSync(path).isFile()
/**
 * 判断当前路径是否是目录
 * @param path
 * @returns
 */
export const useIsDirectory = (path: string) => lstatSync(path).isDirectory()

export default {
  useGetCurrentPath,
  useIsFile,
  useIsDirectory
}
