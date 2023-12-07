import { readFileSync, writeFileSync, unlinkSync, existsSync, readdirSync } from 'fs';
import { resolve } from 'path';
import { getAbsolutePath, isDirectory } from '../utils';
import packageJson from '../../package.json';

const docsInfoPath = resolve('./', 'docs/info.ts');
const changelogPath = resolve('./', 'CHANGELOG.md');
const targetChangelogPath = resolve('./', 'docs/guide/CHANGELOG.md');

if (existsSync(docsInfoPath)) {
  unlinkSync(docsInfoPath);
}
if (existsSync(targetChangelogPath)) {
  unlinkSync(targetChangelogPath);
}
writeFileSync(docsInfoPath, '');
writeFileSync(targetChangelogPath, '');

// 工具库版本
const toolVersion = packageJson.version || '1.0.0';
writeFileSync(docsInfoPath, `${readFileSync(docsInfoPath) || ''}\nexport const version = '${toolVersion}'`, {
  encoding: 'utf-8',
});

// 钩子函数数量统计 读取每个模块下的入口文件
let hooksNum = 0;
const browserPath = getAbsolutePath('../packages/Browser');
const nodePath = getAbsolutePath('../packages/Node');
let browserModules = readdirSync(browserPath);
browserModules = browserModules.filter((file) => {
  if (isDirectory(`${browserPath}/${file}`)) return file;
});
browserModules.forEach((module) => {
  const moduleEntryPath = `${browserPath}/${module}/index.ts`;
  const entryContent = readFileSync(moduleEntryPath, { encoding: 'utf-8' });
  const curModuleNum = entryContent.match(/export\s\{.*\}\sfrom\s'.*'/g)?.length || 0;
  hooksNum += curModuleNum;
});

const nodeModuleEntryPath = `${nodePath}/index.ts`;
const nodeModuleContent = readFileSync(nodeModuleEntryPath, { encoding: 'utf-8' });
const nodeModuleNum = nodeModuleContent.match(/export\s\{.*\}\sfrom\s'.*'/g)?.length || 0;
hooksNum += nodeModuleNum;

writeFileSync(docsInfoPath, `${readFileSync(docsInfoPath) || ''}\nexport const HooksNum = ${hooksNum}`, {
  encoding: 'utf-8',
});

// CHANGELOG文件的拷贝
const changelogContent = readFileSync(changelogPath, { encoding: 'utf-8' });
// 从这个字符串的最后一个字符开始，删除CHANGELOG文件头部不重要的信息
const findStr = 'commit guidelines.';
const firstFindStrIndex = changelogContent.indexOf(findStr);
let changelogNeedContent = changelogContent.slice(firstFindStrIndex + findStr.length + 1);

changelogNeedContent = `
# CHANGELOG

${changelogNeedContent}
`;

writeFileSync(targetChangelogPath, changelogNeedContent);
