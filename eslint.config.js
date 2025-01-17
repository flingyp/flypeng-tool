import flypeng from '@flypeng/eslint-config';

export default [
  ...flypeng(),
  {
    ignores: ['**/.vitepress/cache/**', '**/.vitepress/dist/**'],
  },
  {
    rules: {
      'no-useless-escape': 'off',
      'no-unused-vars': 'off',
    },
  },
  {
    files: ['**/*.ts'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unsafe-function-type': 'off',
    },
  },
];
