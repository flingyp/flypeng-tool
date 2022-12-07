import { useNodeHooks } from '@flypeng/tool'

const { useGetCurrentDirectory, useIsFile, useIsDirectory } = useNodeHooks()

const curPath = useGetCurrentDirectory()

console.log('当前文件所在目录->', curPath)
console.log('当前路径是否是文件夹->', useIsDirectory(curPath))
console.log('当前路径是否是文件->', useIsFile(`${curPath}/index.ts`))
