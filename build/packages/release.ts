import { execSync } from 'child_process';
import { inquireVersion } from '../inquirer';
import { outChalkLog } from '../utils';

// NPM 发包流程文件
// 0. 执行 npm run test 确保所有测试用例通过
// 1. 询问发布啥版本 major minor patch
// 2. 通过 standard-version 修改相关版本信息
// 3. 发包 npm publish
// 4. 提交到远程仓库中并且生成对应版本的tag
async function initRelease() {
  outChalkLog.title('🚀🚀🚀正在准备发布新版本🚀🚀🚀');
  execSync('vitest --watch=false', { stdio: 'inherit' });
  outChalkLog.info('所有测试用例通过');

  execSync('npm run build', { stdio: 'inherit' });
  outChalkLog.info('@flypeng/tool 完成打包');

  execSync('npm run docs:build', { stdio: 'inherit' });
  outChalkLog.info('@flypeng/tool 完成文档相关配置更新');

  const version = await inquireVersion();
  execSync(`standard-version --release-as ${version}`, { stdio: 'inherit' });
  execSync('npm publish', { stdio: 'inherit' });
  outChalkLog.success(`@flypeng/tool-${version} 新版本发布成功`);

  execSync('git push origin main', { stdio: 'inherit' });
  execSync('git push origin --tags', { stdio: 'inherit' });
  outChalkLog.info('代码已提交到远程仓库中');

  outChalkLog.success(`🎉🎉🎉 @flypeng/tool-${version} 新版本发布成功 🎉🎉🎉`);
}

initRelease();
