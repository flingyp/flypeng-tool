// eslint-disable-next-line import/no-unresolved
import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: ['./core/index'],
  outDir: 'dist',
  clean: true,
  declaration: true,
  rollup: {
    emitCJS: true
  }
})
