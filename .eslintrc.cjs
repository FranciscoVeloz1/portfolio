const path = require('path')

module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
    node: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
    project: [
      path.join(__dirname, 'tsconfig.json'),
      path.join(__dirname, 'tsconfig.node.json')
    ],
    tsconfigRootDir: __dirname
  },
  plugins: ['@typescript-eslint', 'react-hooks'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  ignorePatterns: ['dist', 'node_modules'],
  rules: {
    'curly': ['error', 'all'],
    'padding-line-between-statements': ['error', { blankLine: 'always', prev: '*', next: 'return' }],
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }]
  },
  overrides: [
    {
      files: ['vite.config.ts'],
      parserOptions: {
        project: [path.join(__dirname, 'tsconfig.node.json')],
        tsconfigRootDir: __dirname
      }
    }
  ]
}
