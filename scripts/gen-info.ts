import { getAbsolutePath } from './utils'
import { readFileSync, writeFileSync, unlinkSync, existsSync } from 'fs'
import { resolve } from 'path'
import packageJson from '../package.json'

const docsInfoPath = resolve('./', 'docs/info.ts')
const changelogPath = resolve('./', 'CHANGELOG.md')
const tagetChangelogPath = resolve('./', 'docs/guide/CHANGELOG.md')

if (existsSync(docsInfoPath)) {
  unlinkSync(docsInfoPath)
}
if (existsSync(tagetChangelogPath)) {
  unlinkSync(tagetChangelogPath)
}
writeFileSync(docsInfoPath, '')
writeFileSync(tagetChangelogPath, '')

// 工具库版本
const toolVersion = packageJson.version || '1.0.0'
writeFileSync(docsInfoPath, `${readFileSync(docsInfoPath) || ''}\nexport const version = '${toolVersion}'`, {
  encoding: 'utf-8'
})

const distStateFilePath = getAbsolutePath('../dist/index.d.ts')
const distStateFileContent = readFileSync(distStateFilePath, { encoding: 'utf-8' })

// 钩子函数数量统计
const hooksNum = distStateFileContent.match(/export\s\{\s(.*)\s\};/)![1].split(',').length

writeFileSync(docsInfoPath, `${readFileSync(docsInfoPath) || ''}\nexport const HooksNum = ${hooksNum}`, {
  encoding: 'utf-8'
})

// CHANGELOG文件的拷贝
const changelogContent = readFileSync(changelogPath, { encoding: 'utf-8' })
// 从这个字符串的最后一个字符开始，删除CHANGELOG文件头部不重要的信息
const findStr = 'commit guidelines.'
const firstFindStrIndex = changelogContent.indexOf(findStr)
const changelogNeedContent = changelogContent.slice(firstFindStrIndex + findStr.length + 1)

writeFileSync(tagetChangelogPath, changelogNeedContent)
