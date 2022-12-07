import { lstatSync } from 'fs'

/**
 * 获取执行该方法时所在的目录
 * @returns
 */
const useGetCurrentPath = () => process.cwd()
/**
 * 判断当前路径是否是文件
 * @param path
 * @returns
 */
const useIsFile = (path: string) => lstatSync(path).isFile()
/**
 * 判断当前路径是否是目录
 * @param path
 * @returns
 */
const useIsDirectory = (path: string) => lstatSync(path).isDirectory()

/**
 * Node模块相关钩子函数集合
 * @returns
 */
export default function useNodeHook() {
  return {
    useGetCurrentPath,
    useIsDirectory,
    useIsFile
  }
}
