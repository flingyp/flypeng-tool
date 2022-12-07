import { useNodeHooks } from '@flypeng/tool'

const { useGetCurrentPath, useIsFile, useIsDirectory } = useNodeHooks()

const currentPath = useGetCurrentPath()

console.log('当前文件所在目录->', currentPath)
console.log('当前路径是否是文件夹->', useIsDirectory(currentPath))
console.log('当前路径是否是文件->', useIsFile(`${currentPath}/index.ts`))
