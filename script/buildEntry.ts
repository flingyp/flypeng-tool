import { readdirSync, readFileSync, writeFileSync, unlinkSync, existsSync } from 'fs'

import { getAbsolutePath, isFile, isDirectory } from './utils'

const buildEntryFile = async () => {
  const packagesAbsolutePath = getAbsolutePath('../packages')
  const resultFiles = readdirSync(packagesAbsolutePath)
  // 过滤所有文件 和 __template__ 文件夹
  const directories = resultFiles.filter(filePath => {
    const _path = `${packagesAbsolutePath}/${filePath}`
    if (filePath !== '__template__' && !isFile(_path) && isDirectory(_path)) {
      return filePath
    }
  })

  const entryPath = `${packagesAbsolutePath}/index.ts`

  // 删除原有的入口文件
  if (existsSync(entryPath)) unlinkSync(entryPath)

  // 新建并且追加内容到入口文件中
  directories.forEach(moduleName => {
    writeFileSync(`${packagesAbsolutePath}/index.ts`, `export * from './${moduleName}'\n`, {
      encoding: 'utf8',
      flag: 'a'
    })
  })
}

buildEntryFile()
