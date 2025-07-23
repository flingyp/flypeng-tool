import { lstatSync, readdirSync, rmdirSync, statSync, unlinkSync } from 'fs';
import { execSync } from 'child_process';
import { extname, basename, resolve } from 'path';

/**
 * 获取执行该方法时所在的目录
 * @returns 当前工作目录的绝对路径
 */
export const useGetCurrentPath = () => process.cwd();

/**
 * 判断当前路径是否是文件
 * @param path 要检查的路径
 * @returns 如果是文件返回true，否则返回false
 */
export const useIsFile = (path: string) => lstatSync(path).isFile();

/**
 * 判断当前路径是否是目录
 * @param path 要检查的路径
 * @returns 如果是目录返回true，否则返回false
 */
export const useIsDirectory = (path: string) => lstatSync(path).isDirectory();

type FileName = string | { name: string; suffix: string };
/**
 * 如果路径Path的是一个文件则会返回文件名和后缀名，否则返回目录名
 * @param path 要获取文件名的路径
 * @returns 文件名对象或目录名字符串
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
 * @param path 要获取后缀名的路径
 * @returns 文件后缀名（不包含点号）
 */
export const useGetExtensionName = (path: string) =>
  extname(path).toLowerCase().slice(1);

interface ExecCommandOptions {
  cwd: string;
}
/**
 * 执行命令
 * @param command 要执行的命令
 * @param options 执行选项，包含工作目录
 */
export const useExecCommand = (
  command: string,
  options: ExecCommandOptions = { cwd: useGetCurrentPath() },
) => {
  const { cwd } = options;
  execSync(command, { stdio: 'inherit', cwd });
};

/**
 * 递归删除目录
 * @param path 要删除的目录路径
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
  // 文件夹里面的都删除之后，删除本文件夹
  rmdirSync(path);
};

/**
 * 获取文件的绝对路径
 * @param filename 文件名
 * @returns 文件的绝对路径
 */
export const useGetFilePath = (filename: string) =>
  resolve(process.cwd(), filename);

/**
 * 检查当前进程的标准输入是否是TTY（终端环境）
 * @returns 如果是TTY返回true，否则返回false
 */
export const useIsTTY = () => process.stdin.isTTY;
