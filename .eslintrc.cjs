module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true
  },
  extends: ['standard', 'standard-jsx', 'plugin:react-hooks/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'padding-line-between-statements': ['error', { blankLine: 'always', prev: '*', next: 'return' }]
  }
}
