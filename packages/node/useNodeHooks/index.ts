import { resolve } from 'path'
import { lstatSync } from 'fs'

/**
 * 获取当前目录的绝对路径
 * @returns
 */
const useGetCurrentDirectory = () => resolve(__dirname, './')
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
    useGetCurrentDirectory,
    useIsDirectory,
    useIsFile
  }
}
