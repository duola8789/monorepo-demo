module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended', 'prettier'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  rules: {
    '@typescript-eslint/no-explicit-any': process.env.NODE_ENV === 'development' ? 'warn' : 'error',
    'no-alert': process.env.NODE_ENV === 'development' ? 'warn' : 'error',
    'no-debugger': process.env.NODE_ENV === 'development' ? 'warn' : 'error',
    '@typescript-eslint/no-unused-vars': [process.env.NODE_ENV === 'development' ? 'warn' : 'error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
    /** *** 以下为与 prettier 冲突的规则设置, 均由 prettier 接管 **** */
    'operator-linebreak': ['off', 'none'], // 三元表达式的符号位置
    indent: 'off', // 缩进
    'implicit-arrow-linebreak': 'off', // https://eslint.org/docs/latest/rules/implicit-arrow-linebreak#when-not-to-use-it
    'object-curly-newline': 'off', // https://eslint.org/docs/latest/rules/object-curly-newline
    'function-paren-newline': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'lines-between-class-members': 'off',
  },
};
