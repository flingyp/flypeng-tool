import { getAbsolutePath } from './utils'
import { readFileSync, writeFileSync, unlinkSync, existsSync } from 'fs'
import { resolve } from 'path'
import packageJson from '../package.json'

const docsInfoPath = resolve('./', 'docs/info.ts')

if (existsSync(docsInfoPath)) {
  unlinkSync(docsInfoPath)
}
writeFileSync(docsInfoPath, '')

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
