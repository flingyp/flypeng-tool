import { useGetCurrentPath, useIsDirectory, useIsFile } from '@flypeng/node'

const currentPath = useGetCurrentPath()

console.log('当前文件所在目录->', currentPath)
console.log('当前路径是否是文件夹->', useIsDirectory(currentPath))
console.log('当前路径是否是文件->', await useIsFile(`${currentPath}/index.ts`))
