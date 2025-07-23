import {
  readdirSync,
  writeFileSync,
  readFileSync,
  existsSync,
  rmdirSync,
} from 'fs';
import { resolve } from 'path';
import { getAbsolutePath, isDirectory, mkdirs } from '../utils';
import {
  inquireHookName,
  inquireIsNeed,
  inquireModuleChoice,
  inquirePackageChoice,
} from '../inquirer';

/**
 * 每次创建一个新钩子函数时，运行此脚本文件帮助我们创建
 */

// Browser模块
// export default function useXXXHook() {
//   console.log('function template')
// }

// 测试模块
// import { describe, expect, it } from 'vitest'

// import useXXXHook from '.'

// describe('useXXXHook', () => {
//   it('should be defined', () => {
//     expect(useXXXHook).toBeDefined()
//   })
// })

// Node模块
// export const useXXXHook = () => {}

/**
 * 1. 询问创建的钩子函数时 Browser 还是 Node
 * 2. 让用户填写钩子函数名称和选择模块
 * 3. 如果是 Browser 询问是否需要测试文件
 * 4. 如果是 Browser 询问文档是否创建预览组件 index.vue 文件
 * 5. Browser 创建入口文件 创建测试文件
 */

const createHook = async () => {
  const browserPath = getAbsolutePath('../packages/Browser');
  const nodePath = getAbsolutePath('../packages/Node');
  const docsPath = getAbsolutePath('../docs');
  const packageName = await inquirePackageChoice();
  let modulesList = [];
  if (packageName === 'Browser') {
    // 获取Browser所有模块名称并且添加上Node
    modulesList = readdirSync(browserPath).filter((file) => {
      if (isDirectory(`${browserPath}/${file}`)) return file;
    });
  } else {
    modulesList.push('Node');
  }
  const moduleName = await inquireModuleChoice(modulesList);
  const hookName = await inquireHookName();
  let isNeedTestFile = false;
  let isNeedPreviewFile = false;
  if (packageName === 'Browser') {
    isNeedTestFile = (await inquireIsNeed(
      'Whether test file are required',
      isNeedTestFile,
    )) as boolean;
    isNeedPreviewFile = (await inquireIsNeed(
      'Whether preview file are required',
      isNeedPreviewFile,
    )) as boolean;
  }

  let hookPath = '';
  if (packageName === 'Browser') {
    const hookDirPath = resolve(
      browserPath,
      `./${moduleName}`,
      `./${hookName}`,
    );
    hookPath = `${hookDirPath}/index.ts`;
    const hookTestPath = `${hookDirPath}/index.test.ts`;

    const docsDirPath = resolve(docsPath, `./${moduleName}`, `./${hookName}`);
    const docsEntryPath = `${docsDirPath}/index.md`;
    const docsPreviewPath = `${docsDirPath}/index.vue`;

    // 如果存在文件夹则递归删除文件夹中的文件
    if (existsSync(hookDirPath)) {
      rmdirSync(hookDirPath, { recursive: true });
    }
    if (existsSync(docsDirPath)) {
      rmdirSync(docsDirPath, { recursive: true });
    }

    // 创建文件夹
    mkdirs(hookDirPath);
    mkdirs(docsDirPath);

    // 创建文件
    writeFileSync(
      hookPath,
      `export default function ${hookName}() {
	console.log('function template')
}
		`,
    );

    if (isNeedTestFile) {
      writeFileSync(
        hookTestPath,
        `import { describe, expect, it } from 'vitest'
import ${hookName} from '.'
describe('${hookName}', () => {
	it('should be defined', () => {
		expect(${hookName}).toBeDefined()
	})
})
			`,
      );
    }

    writeFileSync(
      docsEntryPath,
      `# ${hookName}

## Introduction

## Basic Usage

## Type Declaration

## Online Demo
		`,
      { encoding: 'utf-8' },
    );

    if (isNeedPreviewFile) {
      writeFileSync(
        docsPreviewPath,
        `<template>
	<div>${hookName}</div>
</template>
<script lang="ts" setup></script>
<style scoped></style>
`,
        { encoding: 'utf-8' },
      );
    }

    // 给入口文件添加导出代码
    const moduleEntryPath = resolve(
      browserPath,
      `./${moduleName}`,
      './index.ts',
    );
    const oldContent = readFileSync(moduleEntryPath, { encoding: 'utf-8' });
    writeFileSync(
      moduleEntryPath,
      `${oldContent}\nexport { default as ${hookName} } from './${hookName}'`,
    );
  } else {
    hookPath = resolve(nodePath, './useNodeHook.ts');
    const docsEntryPath = resolve(docsPath, './Node', `${hookName}.md`);
    const oldContent = readFileSync(hookPath, { encoding: 'utf-8' });
    writeFileSync(
      hookPath,
      `${oldContent}\nexport const ${hookName} = () => {}`,
    );

    writeFileSync(
      docsEntryPath,
      `# ${hookName}

## Introduction

## Basic Usage

## Type Declaration
		`,
      { encoding: 'utf-8' },
    );
  }
};

createHook();
