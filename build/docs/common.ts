/* eslint-disable no-unused-vars */

import { readdirSync, readFileSync } from 'fs';
import { getAbsolutePath, isFile, isDirectory } from '../utils';

const browserModulePath = getAbsolutePath('../packages/Browser');
const nodeModulePath = getAbsolutePath('../packages/Node');

let browserAllDirectory: string[] = [];
const nodeAllDirectory = ['Node'];

export default async () => {
  const browserFunctionsArrays: Record<string, string[]> = {};
  const nodeFunctionsArrays: Record<string, string[]> = {};

  // Browser 模块下所有的目录名称
  browserAllDirectory = readdirSync(browserModulePath).filter((name) => {
    const filePath = `${browserModulePath}/${name}`;
    if (!isFile(filePath) && isDirectory(filePath)) {
      return filePath;
    }
  });

  // Node 模块下的入口文件
  const browserMain = readdirSync(nodeModulePath).filter((name) => {
    if (name !== 'index.ts') return;
    return `${nodeModulePath}/${name}`;
  });

  // 读取 Browser 模块下的 index.ts 文件提取出所有被导出的钩子函数
  browserAllDirectory.forEach((directory) => {
    const hookIndexPath = `${browserModulePath}/${directory}/index.ts`;
    const fileContent = readFileSync(hookIndexPath, { encoding: 'utf8' });
    const functionRegExp = /export { default as (\w*) } from '(.*)'/g;
    const functionImportCode = fileContent.match(functionRegExp)?.filter(
      () =>
        // if (importCode === "export { default as __template__ } from '../__template__'") return false
        true,
    );
    const functions =
      functionImportCode?.map((importCode) => {
        const importRegExp = importCode.match(functionRegExp);
        return RegExp.$1;
      }) || [];

    browserFunctionsArrays[directory] = functions;
  });

  // 读取 Node 模块下的 index.ts 文件提取出所有被导出的钩子函数
  browserMain.forEach((directory) => {
    const hookIndexPath = `${nodeModulePath}/${directory}`;
    const fileContent = readFileSync(hookIndexPath, { encoding: 'utf8' });
    const functionRegExp = /export { default as (\w*) } from '(.*)'/g;
    const functionImportCode = fileContent.match(functionRegExp)?.filter(
      () =>
        // if (importCode === "export { default as __template__ } from '../__template__'") return false
        true,
    );
    const functions =
      functionImportCode?.map((importCode) => {
        const importRegExp = importCode.match(functionRegExp);
        return RegExp.$1;
      }) || [];

    nodeFunctionsArrays.Node = functions;
  });

  return {
    browserAllDirectory,
    nodeAllDirectory,
    browserFunctionsArrays,
    nodeFunctionsArrays,
  };
};
