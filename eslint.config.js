import flypeng from '@flypeng/eslint-config';

export default [
  ...flypeng(),
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
];
