module.exports = {
  extends: '../../.eslintrc.js',
  env: {
    node: true,
    es2021: true,
  },
  parserOptions: { sourceType: 'module' },
  rules: {
    '@typescript-eslint/no-var-requires': 0,
  },
};
