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

export default {
  useGetCurrentPath,
  useIsFile,
  useIsDirectory
}
