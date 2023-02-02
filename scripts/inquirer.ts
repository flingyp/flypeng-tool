import inquirer from 'inquirer'

// 询问是否需要
export const inquireIsNeed = async (message: string, defaultValue: boolean) => {
  const { value } = await inquirer.prompt({
    type: 'confirm',
    name: 'value',
    message,
    default: defaultValue,
  })
  return value
}

// 选择版本
export const inquireVersion = async () => {
  const { version } = await inquirer.prompt({
    type: 'list',
    name: 'version',
    message: 'Please select the release version from list',
    default: 'patch',
    choices: ['major', 'minor', 'patch', 'premajor', 'preminor', 'prepatch', 'prerelease'],
  })
  return version
}

// 选择 @flypeng/browser 还是 @flypeng/node
export const inquirePackageChoice = async (): Promise<'@flypeng/browser' | '@flypeng/node'> => {
  const { name } = await inquirer.prompt({
    type: 'list',
    name: 'name',
    message: 'Please select package of hook function',
    choices: ['@flypeng/browser', '@flypeng/node'],
  })
  return name
}

// 询问钩子函数名称
export const inquireHookName = async () => {
  const { name } = await inquirer.prompt({
    type: 'input',
    name: 'name',
    message: 'Please input name of hook function',
  })
  return name
}

// 询问选择模块名称
export const inquireModuleChoice = async (modulesList: string[]) => {
  const { module } = await inquirer.prompt({
    type: 'list',
    name: 'module',
    message: 'Please input module name of hook function',
    choices: modulesList,
  })
  return module
}
