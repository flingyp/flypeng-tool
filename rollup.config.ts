import { defineConfig } from 'rollup'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import { terser } from 'rollup-plugin-terser'

const currentNodeEnv = process.env.NODE_ENV
const isCompressLibrary = currentNodeEnv === 'prod' ? terser({ module: true, toplevel: true }) : null

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
    plugins: [typescript(), isCompressLibrary],
    watch: {
      exclude: ['node_modules/**']
    }
  },
  {
    input: ['./packages/index.ts'],
    output: [{ file: './dist/index.d.ts' }],
    plugins: [dts()]
  }
])
