import inquirer from 'inquirer'

export const inquireVersion = async () => {
  const { version } = await inquirer.prompt({
    type: 'list',
    name: 'version',
    message: 'Please select the release version from list',
    default: 'patch',
    choices: ['major', 'minor', 'patch']
  })
  return version
}
