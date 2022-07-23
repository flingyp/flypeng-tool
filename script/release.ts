import { execSync } from 'child_process'
import chalk from 'chalk'
import { inquireVersion } from './inquirer'

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
  execSync('vitest --watch=false', { stdio: 'inherit' })
  console.log(chalk.blueBright('所有测试用例通过!'))
  const version = await inquireVersion()
  execSync(`standard-version --release-as ${version}`, { stdio: 'inherit' })
  console.log(chalk.blueBright('版本更新完成!'))
  execSync('npm publish', { stdio: 'inherit' })
  console.log(chalk.blueBright('NPM发布完成!'))
  execSync('git push origin main', { stdio: 'inherit' })
  console.log(chalk.blueBright('代码提交到远程仓库中!'))
}

initRelease()
