module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 13,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'no-unused-expressions': 0,
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'react/forbid-prop-types': ['warn', { forbid: [] }],
    'react/jsx-props-no-spreading': 0,
    'comma-dangle': ['error', 'never'],
    'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
    'arrow-parens': ['error', 'as-needed'],
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'react/react-in-jsx-scope': 'off'
  }
};
