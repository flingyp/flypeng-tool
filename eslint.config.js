import flypeng from '@flypeng/eslint-config';

export default [
  ...flypeng(),
  {
    rules: {
      'no-useless-escape': 'off',
    },
  },
  {
    files: ['**/*.ts'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
];
