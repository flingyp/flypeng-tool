import { defineConfig } from 'rollup'
import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'

const currentNodeEnv = process.env.NODE_ENV
const isCompressLibrary = currentNodeEnv === 'prod' ? terser({ module: true, toplevel: true }) : null

export default defineConfig([
  {
    input: './packages/Browser/index.ts',
    output: [
      {
        file: 'browser/index-browser.js',
        format: 'umd',
        name: 'fy',
      },
      {
        file: 'browser/index.mjs',
        format: 'esm',
      },
      {
        file: 'browser/index.cjs',
        format: 'cjs',
      },
    ],
    plugins: [typescript(), isCompressLibrary],
    watch: {
      exclude: ['node_modules/**'],
    },
  },
  {
    input: './packages/Node/index.ts',
    output: [
      {
        file: 'node/index.cjs',
        format: 'cjs',
      },
      {
        file: 'node/index.mjs',
        format: 'esm',
      },
    ],
    plugins: [typescript(), isCompressLibrary],
    watch: {
      exclude: ['node_modules/**'],
    },
  },
  {
    input: ['./packages/Browser/index.ts'],
    output: [{ file: './browser/index.d.ts' }],
    plugins: [dts()],
  },
  {
    input: ['./packages/Node/index.ts'],
    output: [{ file: './node/index.d.ts' }],
    plugins: [dts()],
  },
])
