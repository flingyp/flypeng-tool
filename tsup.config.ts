import { Options, defineConfig } from 'tsup';

const currentNodeEnv = process.env.NODE_ENV;
const isProd = currentNodeEnv === 'prod';

const commonConfig: Options = {
  format: ['esm', 'cjs'],
  minify: isProd,
  sourcemap: !isProd,
  shims: true,
  clean: true,
  dts: true,
};

export default defineConfig([
  {
    entry: ['./packages/Browser/index.ts'],
    outDir: 'dist/browser',
    platform: 'neutral',
    ...commonConfig,
  },
  {
    entry: ['./packages/Node/index.ts'],
    outDir: 'dist/node',
    platform: 'node',
    ...commonConfig,
  },
]);
