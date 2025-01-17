import { execSync } from 'child_process';

/**
 * 1. 入口、文档侧边栏相关文件生成
 * 2. 代码格式化
 * 3. 函数库 || 文档打包
 */

/**
 * 代码格式化
 */
const codeFormatting = async () => {
  await execSync('npx prettier --write $(git diff --name-only HEAD)', { stdio: 'inherit' });
};

/**
 * 构建包相关入口文件
 */
const buildPackage = async () => {
  await execSync('npx esno ./build/packages/index.ts', { stdio: 'inherit' });
};

/**
 * 构建文档相关入口文件
 */
const buildDocs = async () => {
  await execSync('npx esno ./build/docs/Sidebar.ts', { stdio: 'inherit' });
  await execSync('npx esno ./build/docs/Navbar.ts', { stdio: 'inherit' });
  await execSync('npx esno ./build/docs/Version.ts', { stdio: 'inherit' });
};

export const dev = async () => {
  await buildPackage();
  await codeFormatting();
  await execSync('cross-env NODE_ENV=dev tsup --watch', { stdio: 'inherit' });
};

export const build = async () => {
  await buildPackage();
  await codeFormatting();
  await execSync('cross-env NODE_ENV=build tsup', { stdio: 'inherit' });
};

export const docsDev = async () => {
  await buildPackage();
  await buildDocs();
  await codeFormatting();
  await execSync('pnpm run --filter=docs dev', { stdio: 'inherit' });
};

export const docsBuild = async () => {
  await buildPackage();
  await execSync('cross-env NODE_ENV=build tsup', { stdio: 'inherit' });
  await buildDocs();
  await codeFormatting();
  await execSync('pnpm run --filter=docs build', { stdio: 'inherit' });
};

export const docsServe = async () => {
  await execSync('pnpm run --filter=docs serve', { stdio: 'inherit' });
};

export const newFunction = async () => {
  await execSync('npx esno ./build/packages/new.ts', { stdio: 'inherit' });
  await codeFormatting();
};

export const release = async () => {
  await execSync('npx esno ./build/packages/release.ts', { stdio: 'inherit' });
};
