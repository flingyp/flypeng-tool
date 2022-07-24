import { lstatSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

/**
 * 获取指定文件夹的绝对路径
 * @param relativePath
 * @returns
 */
export const getAbsolutePath = (relativePath: string) => {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)
  return path.join(__dirname, relativePath)
}

/**
 * 判断是否是文件
 * @param path
 * @returns
 */
export const isFile = (path: string) => {
  return lstatSync(path).isFile()
}

/**
 * 判断是否是文件目录
 * @param path
 * @returns
 */
export const isDirectory = (path: string) => {
  return lstatSync(path).isDirectory()
}
