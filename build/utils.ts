import { existsSync, lstatSync, mkdirSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import chalk from 'chalk';

/**
 * 获取指定文件夹的绝对路径
 * @param targetPath: 相对于 utils.ts 文件的相对路径
 * @returns
 */
export const getAbsolutePath = (targetPath: string) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  return path.join(__dirname, targetPath);
};

/**
 * 判断是否是文件
 * @param path
 * @returns
 */
export const isFile = (path: string) => lstatSync(path).isFile();

/**
 * 判断是否是文件目录
 * @param path
 * @returns
 */
export const isDirectory = (path: string) => lstatSync(path).isDirectory();

export const outChalkLog = {
  info(text: string) {
    console.log(text);
  },
  success(text: string) {
    console.log(chalk.hex('#00c48f')(text));
  },
  warning(text: string) {
    console.log(chalk.hex('#ff9800')(text));
  },
  error(text: string) {
    console.log(chalk.hex('#f44336')(text));
  },
  title(text: string) {
    console.log(chalk.cyan(text));
  },
};

export const mkdirs = (dirpath: string) => {
  if (!existsSync(path.dirname(dirpath))) {
    mkdirs(path.dirname(dirpath));
  }
  mkdirSync(dirpath);
};
