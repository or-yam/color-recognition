module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
    jest: true
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier', 'plugin:import/typescript'],
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
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': [2, { namedComponents: 'function-declaration' }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error', { typedefs: false, ignoreTypeReferences: true }]
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  }
};
