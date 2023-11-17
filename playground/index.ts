import {
  useGetCurrentPath,
  useIsDirectory,
  useIsFile,
  useGetFileName,
  useGetExtensionName,
  useExecCommand,
  useRecursionDelete,
} from '@flypeng/node';

const currentPath = useGetCurrentPath();

console.log('当前文件所在目录->', currentPath);
console.log('当前路径是否是文件夹->', useIsDirectory(currentPath));
console.log('当前路径是否是文件->', await useIsFile(`${currentPath}/index.ts`));
console.log('当前的名录名->', await useGetFileName(currentPath));
console.log('当前的文件名->', await useGetFileName(`${currentPath}/index.ts`));
console.log('获取文件路径的扩展名', await useGetExtensionName(`${currentPath}/index.ts`));
await useExecCommand('echo useExecCommand');
await useRecursionDelete(`${currentPath}/demo`);
