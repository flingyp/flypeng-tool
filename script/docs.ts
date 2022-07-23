import { readdirSync, readFileSync, writeFileSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

import { getAbsolutePath, isFile, isDirectory } from './utils'

// 1. 扫描 packages/* 所有目录
// 2. 读 packages/*/index.ts 文件内容
// 3. 生成 sidebar 数据结构的数据
// [
// 	{
// 		text: 'Guide',
// 		items: [{ text: 'Get Started', link: '/guide/' }]
// 	},
// 	{
// 		text: 'Core Functions',
// 		items: [{ text: 'useRandomInteger', link: '/useRandomInteger/' }]
// 	}
// ]
// 4. 把生成的数据生成一个TS文件，放在 docs/sideBar.ts 导出去

// resultFiles：packages 下所有的文件和文件夹
const packagesAbsolutePath = getAbsolutePath('../packages')
const resultFiles = readdirSync(packagesAbsolutePath)
// 过滤所有文件 和 __template__ 文件夹
const directories = resultFiles.filter(filePath => {
  const _path = `${packagesAbsolutePath}/${filePath}`
  if (filePath !== '__template__' && !isFile(_path) && isDirectory(_path)) {
    return filePath
  }
})
// 所有目录名称
console.log('directories：', directories)
const functionsArrays: Record<string, string[]> = {}
directories.forEach(directory => {
  const indexFilePath = `${packagesAbsolutePath}/${directory}/index.ts`
  const fileContent = readFileSync(indexFilePath, { encoding: 'utf8' })
  const functionRegExp = /export { default as (\w*) } from '(.*)'/g
  let functionImportCode = fileContent.match(functionRegExp)?.filter(importCode => {
    if (importCode === "export { default as __template__ } from '../__template__'") return false
    return true
  })

  const functions =
    functionImportCode?.map(importCode => {
      const importRegExp = importCode.match(functionRegExp)
      return RegExp.$1
    }) || []
  functionsArrays[directory] = functions
})
// 所有目录下引入的工具方法
console.log('functionsArrays：', functionsArrays)

interface SideBar {
  text: string
  items: { text: string; link: string }[]
}
// 	{
// 		text: 'Core Functions',
// 		items: [{ text: 'useRandomInteger', link: '/useRandomInteger/' }]
// 	}
const generateSideBar: SideBar[] = []
for (const key in functionsArrays) {
  const generateItem: SideBar = { text: '', items: [] }
  generateItem.text = `${key.replace(key[0], key[0].toUpperCase())} Functions`
  generateItem.items = functionsArrays[key].map(name => {
    return {
      text: name,
      link: `/${key}/${name}/`
    }
  })
  generateSideBar.push(generateItem)
}
console.log('generateSideBar：', generateSideBar)

// write content to docs/sideBar.ts
writeFileSync(
  getAbsolutePath('../docs/sideBar.ts'),
  `export default JSON.parse('${JSON.stringify(generateSideBar)}')`,
  { encoding: 'utf8' }
)
