import { writeFileSync } from 'fs'
import { resolve } from 'path'
import packageJson from '../package.json'

const toolVersion = packageJson.version || '1.0.0'
const docsVersionPath = resolve('./', 'docs/version.ts')

writeFileSync(docsVersionPath, `export default '${toolVersion}'`, { encoding: 'utf-8' })
