import { defineConfig } from 'rollup'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'

export default defineConfig([
  {
    input: './packages/index.ts',
    output: [
      {
        file: 'dist/bundle.cjs',
        format: 'umd',
        name: 'ToolBundle'
      },
      {
        file: 'dist/bundle.mjs',
        format: 'esm'
      }
    ],
    plugins: [typescript({ compilerOptions: { lib: ['esnext'] } })],
    watch: {
      exclude: 'node_modules/**'
    }
  },
  {
    input: './packages/index.ts',
    output: [{ file: 'dist/bundle.d.ts', format: 'esm' }],
    plugins: [dts()]
  }
])
