import { execSync } from 'child_process'
import chalk from 'chalk'
import { inquireVersion } from './inquirer'
import { outChalkLog } from './utils'
import { name, version } from '../package.json'

// NPM 发包流程文件
// 0. 执行 npm run test 确保所有测试用例通过
// 1. 询问发什么版本的包 major minor patch\
/**
 * standard-version --release-as major
 * standard-version --release-as minor
 * standard-version --release-as patch
 */
// 2. 执行这个 release:changelog:${version}
// 3. 发包 npm publish
// 4. 提交到远程仓库中 git push origin main
async function initRelease() {
  outChalkLog.title('🚀🚀🚀正在准备发布新版本🚀🚀🚀')
  execSync('vitest --watch=false', { stdio: 'inherit' })
  outChalkLog.info('所有测试用例通过~')

  execSync('npm run build', { stdio: 'inherit' })
  outChalkLog.info('@flypeng/tool包已打包完成~')

  execSync('pnpm run gen-info', { stdio: 'inherit' })
  outChalkLog.info('更新文档相关信息~')

  const version = await inquireVersion()
  execSync(`standard-version --release-as ${version}`, { stdio: 'inherit' })
  execSync('npm publish', { stdio: 'inherit' })
  outChalkLog.success('🌈🌈新版本包已发布🌈🌈')

  execSync('git push origin main', { stdio: 'inherit' })
  execSync('git push origin --tags', { stdio: 'inherit' })
  outChalkLog.info('代码提交到远程仓库中~')

  outChalkLog.success('🎉🎉🎉新版本发布成功🎉🎉🎉')
}

initRelease()
