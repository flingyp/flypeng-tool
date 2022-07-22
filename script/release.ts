import { execSync } from 'child_process'
import chalk from 'chalk'

import { inquireVersion } from './inquirer'

async function initRelease() {
  const version = await inquireVersion()
  execSync(`standard-version --release-as ${version}`)
  console.log(chalk.blueBright('版本更新完成！'))
  execSync('npm publish')
  console.log(chalk.blueBright('NPM发布完成！'))
  execSync('git push origin main')
  console.log(chalk.blueBright('代码提交到远程仓库中！'))
}

initRelease()

// NPM 发包流程
// 1. 询问发什么版本的包 major minor patch
// 2. 执行这个 release:changelog:${version}
// 3. 发包 npm publish
// 4. 提交到远程仓库中 git push origin main
