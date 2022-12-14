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
  const { lstatSync } = await import('fs')
  return lstatSync(path).isFile()
}
/**
 * 判断当前路径是否是目录
 * @param path
 * @returns
 */
export const useIsDirectory = async (path: string) => {
  const { lstatSync } = await import('fs')
  return lstatSync(path).isDirectory()
}

type FileName = string | { name: string; suffix: string }
/**
 * 如果路径Path的是一个文件则会返回文件名和后罪名，否则返回目录名
 * @param path
 */
export const useGetFileName = async (path: string): Promise<FileName> => {
  const { basename } = await import('path')
  const lastFileNameStr = basename(path)
  if (!(await useIsFile(path)) && (await useIsDirectory(path))) {
    return lastFileNameStr
  } else {
    const [name, suffix] = lastFileNameStr.split('.')
    return { name, suffix }
  }
}

export default {
  useGetCurrentPath,
  useIsFile,
  useIsDirectory,
  useGetFileName
}
