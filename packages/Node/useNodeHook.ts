import { existsSync, lstatSync, PathLike, readdirSync, rmdirSync, statSync, unlinkSync } from 'fs'
import { execSync } from 'child_process'
import { extname, basename } from 'path'

/**
 * 获取执行该方法时所在的目录
 * @returns
 */
export const useGetCurrentPath = () => {
  return process.cwd()
}
/**
 * 判断当前路径是否是文件
 * @param path
 * @returns
 */
export const useIsFile = async (path: string) => {
  return lstatSync(path).isFile()
}
/**
 * 判断当前路径是否是目录
 * @param path
 * @returns
 */
export const useIsDirectory = async (path: string) => {
  return lstatSync(path).isDirectory()
}

type FileName = string | { name: string; suffix: string }
/**
 * 如果路径Path的是一个文件则会返回文件名和后罪名，否则返回目录名
 * @param path
 */
export const useGetFileName = async (path: string): Promise<FileName> => {
  const lastFileNameStr = basename(path)
  if (!(await useIsFile(path)) && (await useIsDirectory(path))) {
    return lastFileNameStr
  } else {
    const [name, suffix] = lastFileNameStr.split('.')
    return { name, suffix }
  }
}

/**
 * 获取路径的后缀名
 * @param path
 * @returns
 */
export const useGetExtensionName = async (path: string): Promise<string> => {
  const name = extname(path)
  if (name === '') return ''
  return name.split('.')[1] as string
}

interface ExecCommandOptions {
  cwd: string
}
/**
 * 执行命令
 * @param command
 * @param options
 */
export const useExecCommand = async (command: string, options: ExecCommandOptions = { cwd: useGetCurrentPath() }) => {
  const { cwd } = options
  execSync(command, { stdio: 'inherit', cwd })
}

/**
 * 递归删除目录
 * @param path
 */
export const useRecursionDelete = (path: string) => {
  let files = readdirSync(path)
  for (let file of files) {
    let newpath = `${path}/${file}`
    let stats = statSync(newpath)
    if (stats.isFile()) {
      unlinkSync(newpath)
    } else {
      useRecursionDelete(newpath)
    }
  }
  // 文件夹里面的都删除之后，删除本文件件
  rmdirSync(path)
}
