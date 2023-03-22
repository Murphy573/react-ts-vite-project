module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react/jsx-runtime'
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'prettier/prettier': ['error', { singleQuote: true }],
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    'no-console': 'error',
    'no-debugger': 'error',
    'handle-callback-err': 0,
    eqeqeq: ['error', 'smart'],
    'one-var': 'off',
    camelcase: 0,
    'no-var': 2,
    // 优先使用数组和对象解构
    'prefer-destructuring': 0,
    'no-duplicate-imports': 2,
    'prefer-const': 0,
    'getter-return': ['error', { allowImplicit: true }],
    'no-empty': ['error', { allowEmptyCatch: true }],
    // 'brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
    // 'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'brace-style': 0,
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        // args: 'after-used',
        args: 'none',
        ignoreRestSiblings: true,
        caughtErrors: 'none'
      }
    ],
    'no-constant-condition': ['error', { checkLoops: false }]
  },
  /**
   * 解决打包时控制台警告：React version not specified in eslint-plugin-react settings
   * https://stackoverflow.com/questions/72780296/warning-react-version-not-specified-in-eslint-plugin-react-settings-while-run
   */
  settings: {
    react: {
      version: 'detect'
    }
  }
}
