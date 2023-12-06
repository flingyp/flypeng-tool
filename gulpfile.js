import { execSync } from 'child_process';

/**
 * 1. 入口、文档侧边栏相关文件生成
 * 2. 函数库打包
 * 3. 文档打包
 */

export const dev = async () => {
  await execSync('npx esno ./build/packages/entry.ts', { stdio: 'inherit' });
  await execSync('cross-env NODE_ENV=dev tsup --watch', { stdio: 'inherit' });
};

export const build = async () => {
  await execSync('npx esno ./build/packages/entry.ts', { stdio: 'inherit' });
  await execSync('cross-env NODE_ENV=build tsup', { stdio: 'inherit' });
};
