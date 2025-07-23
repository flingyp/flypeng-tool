import { execSync } from 'child_process';
import {
  readdirSync,
  readFileSync,
  writeFileSync,
  unlinkSync,
  existsSync,
} from 'fs';
import { getAbsolutePath, isFile, isDirectory } from '../utils';

/**
 * 构建生成Browser模块入口文件
 */
const buildBrowserEntryFile = async () => {
  const packagesAbsolutePath = getAbsolutePath('../packages/Browser');

  const resultFiles = readdirSync(packagesAbsolutePath);
  // 过滤所有文件
  const directories = resultFiles.filter((filePath) => {
    const fileAbsolutePath = `${packagesAbsolutePath}/${filePath}`;

    if (!isFile(fileAbsolutePath) && isDirectory(fileAbsolutePath)) return true;
    return false;
  });

  const entryPath = `${packagesAbsolutePath}/index.ts`;

  // 删除原有的入口文件
  if (existsSync(entryPath)) unlinkSync(entryPath);
  writeFileSync(entryPath, '// Tip: 文件由 build:entry 脚本生成\r', {
    encoding: 'utf-8',
  });
  // 新建并且追加内容到入口文件中
  directories.forEach((moduleName) => {
    writeFileSync(entryPath, `export * from './${moduleName}'\n`, {
      encoding: 'utf8',
      flag: 'a',
    });
  });
};

/**
 * 构建生成Node模块入口文件
 */
const buildNodeEntryFile = async () => {
  const useHooksPath = getAbsolutePath('../packages/Node/useNodeHook.ts');
  const entryPath = getAbsolutePath('../packages/Node/index.ts');
  const resultFiles = readFileSync(useHooksPath, { encoding: 'utf-8' });
  const catchHooks = resultFiles.match(/export\sconst\s(.*)\s=\s/g) as string[];
  const nodeHooksName = catchHooks.map((hook) =>
    hook.split('const ')[1].split(' =')[0].trim(),
  );
  let commentImportCodes = '';
  for (let i = 0; i < nodeHooksName.length; i++) {
    commentImportCodes += `// export { default as ${nodeHooksName[i]} } from './${nodeHooksName[i]}'\r`;
  }

  // 删除原有的入口文件
  if (existsSync(entryPath)) unlinkSync(entryPath);

  writeFileSync(
    entryPath,
    `
      // Tip: 文件由 build:entry 脚本生成
  		// Tip: 所有钩子函数都写在./useNodeHooks文件中
  		// Tip: Node模块每新增一个钩子函数就在这写一个注释, 方便文档生成侧边栏
  		${commentImportCodes}
      export * from './useNodeHook'
      `,
    { encoding: 'utf-8' },
  );
};

const init = async () => {
  await buildBrowserEntryFile();
  await buildNodeEntryFile();
};

init();
