import { lstatSync, readdirSync, rmdirSync, statSync, unlinkSync } from 'fs';
import { execSync } from 'child_process';
import { extname, basename } from 'path';

/**
 * 获取执行该方法时所在的目录
 * @returns
 */
export const useGetCurrentPath = () => process.cwd();
/**
 * 判断当前路径是否是文件
 * @param path
 * @returns
 */
export const useIsFile = (path: string) => lstatSync(path).isFile();
/**
 * 判断当前路径是否是目录
 * @param path
 * @returns
 */
export const useIsDirectory = (path: string) => lstatSync(path).isDirectory();

type FileName = string | { name: string; suffix: string };
/**
 * 如果路径Path的是一个文件则会返回文件名和后罪名，否则返回目录名
 * @param path
 */
export const useGetFileName = (path: string): FileName => {
  const lastFileNameStr = basename(path);
  if (!useIsFile(path) && useIsDirectory(path)) {
    return lastFileNameStr;
  }
  const [name, suffix] = lastFileNameStr.split('.');
  return { name, suffix };
};

/**
 * 获取路径的后缀名
 * @param path
 * @returns
 */
export const useGetExtensionName = (path: string) => {
  const name = extname(path);
  if (name === '') return '';
  return name.split('.')[1] as string;
};

interface ExecCommandOptions {
  cwd: string;
}
/**
 * 执行命令
 * @param command
 * @param options
 */
export const useExecCommand = (command: string, options: ExecCommandOptions = { cwd: useGetCurrentPath() }) => {
  const { cwd } = options;
  execSync(command, { stdio: 'inherit', cwd });
};

/**
 * 递归删除目录
 * @param path
 */
export const useRecursionDelete = (path: string) => {
  const files = readdirSync(path);
  for (const file of files) {
    const newpath = `${path}/${file}`;
    const stats = statSync(newpath);
    if (stats.isFile()) {
      unlinkSync(newpath);
    } else {
      useRecursionDelete(newpath);
    }
  }
  // 文件夹里面的都删除之后，删除本文件件
  rmdirSync(path);
};
