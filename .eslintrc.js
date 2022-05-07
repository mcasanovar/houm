module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'multiline-ternary': ['error', 'never'],
    'space-before-function-paren': [
      'error',
      { named: 'never', asyncArrow: 'always' }
    ]
  }
}