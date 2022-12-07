import { readdirSync, readFileSync, writeFileSync } from 'fs'
import { getAbsolutePath, isFile, isDirectory } from './utils'

const browserModulePath = getAbsolutePath('../packages/Browser')
const nodeModulePath = getAbsolutePath('../packages/Node')

interface VitepressSiderBar {
  text: string
  link?: string
  items?: { text: string; link: string }[]
}

interface VitepressNavBar {
  text: string
  link?: string
  items?: { text: string; link: string }[]
}

let browserAllDirectory: string[] = []
let nodeAllDirectory = ['Node']

let browserFunctionsArrays: Record<string, string[]> = {}
let nodeFunctionsArrays: Record<string, string[]> = {}

// 生成Browser模块侧边栏
const generateBrowserSiderBar = () => {
  // Browser 模块下所有的目录名称
  browserAllDirectory = readdirSync(browserModulePath).filter(name => {
    const filePath = `${browserModulePath}/${name}`
    if (!isFile(filePath) && isDirectory(filePath)) {
      return filePath
    }
  })
  // 读取模块下的index.ts文件提取出所有被导出的钩子函数
  browserAllDirectory.forEach(directory => {
    const hookIndexPath = `${browserModulePath}/${directory}/index.ts`
    const fileContent = readFileSync(hookIndexPath, { encoding: 'utf8' })
    const functionRegExp = /export { default as (\w*) } from '(.*)'/g
    let functionImportCode = fileContent.match(functionRegExp)?.filter(importCode => {
      // if (importCode === "export { default as __template__ } from '../__template__'") return false
      return true
    })
    const functions =
      functionImportCode?.map(importCode => {
        const importRegExp = importCode.match(functionRegExp)
        return RegExp.$1
      }) || []
    browserFunctionsArrays[directory] = functions
  })

  const generateSiderBar: VitepressSiderBar[] = []
  for (const key in browserFunctionsArrays) {
    const siderBarItem: VitepressSiderBar = { text: '', items: [] }
    siderBarItem.text = `${key.replace(key[0], key[0].toUpperCase())} Functions`
    siderBarItem.items = browserFunctionsArrays[key].map(name => {
      return {
        text: name,
        link: `/${key}/${name}/`
      }
    })
    generateSiderBar.push(siderBarItem)
  }

  return generateSiderBar
}
// 生成Node模块侧边栏
const generateNodeSiderBar = () => {
  // Node 模块下的入口文件
  const browserMain = readdirSync(nodeModulePath).filter(name => {
    if (name !== 'index.ts') return
    return `${nodeModulePath}/${name}`
  })
  // 读取模块下的index.ts文件提取出所有被导出的钩子函数
  browserMain.forEach(directory => {
    const hookIndexPath = `${nodeModulePath}/${directory}`
    const fileContent = readFileSync(hookIndexPath, { encoding: 'utf8' })
    const functionRegExp = /export { default as (\w*) } from '(.*)'/g
    let functionImportCode = fileContent.match(functionRegExp)?.filter(importCode => {
      // if (importCode === "export { default as __template__ } from '../__template__'") return false
      return true
    })
    const functions =
      functionImportCode?.map(importCode => {
        const importRegExp = importCode.match(functionRegExp)
        return RegExp.$1
      }) || []

    nodeFunctionsArrays['Node'] = functions
  })

  const generateSiderBar: VitepressSiderBar[] = []
  for (const key in nodeFunctionsArrays) {
    const siderBarItem: VitepressSiderBar = { text: '', items: [] }
    siderBarItem.text = `${key.replace(key[0], key[0].toUpperCase())} Functions`
    siderBarItem.items = nodeFunctionsArrays[key].map(name => {
      return {
        text: name,
        link: `/${key}/${name}`
      }
    })
    generateSiderBar.push(siderBarItem)
  }

  return generateSiderBar
}

const browserSiderBar = generateBrowserSiderBar()
const nodeSiderBar = generateNodeSiderBar()
const allSiderBar = [...browserSiderBar, ...nodeSiderBar]

// 生成文档侧边栏
writeFileSync(getAbsolutePath('../docs/side-bar.ts'), `export default JSON.parse('${JSON.stringify(allSiderBar)}')`, {
  encoding: 'utf8'
})

const generateNavBar = () => {
  const allNavBar: VitepressNavBar[] = []
  const allFunctionArrays = Object.assign({}, browserFunctionsArrays, nodeFunctionsArrays)
  const allDirectory = [...browserAllDirectory, ...nodeAllDirectory]
  allDirectory.forEach(module => {
    const generateItem: VitepressNavBar = { text: '', link: '' }
    generateItem.text = `${module.replace(module[0], module[0].toUpperCase())}`
    if (module === 'Node') {
      generateItem.link = `/${module}/${allFunctionArrays[module][0]}`
    } else {
      generateItem.link = `/${module}/${allFunctionArrays[module][0]}/`
    }
    allNavBar.push(generateItem)
  })
  return allNavBar
}

const navBar = generateNavBar()

// 生成文档顶部栏
writeFileSync(getAbsolutePath('../docs/nav-bar.ts'), `export default JSON.parse('${JSON.stringify(navBar)}')`, {
  encoding: 'utf8'
})
