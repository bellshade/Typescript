 module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single', { avoidEscape: true }],
    'keyword-spacing': ['error', { before: true, after: true }],
    eqeqeq: ['error', 'always'],
    'no-trailing-spaces': 'error',
    'no-multiple-empty-lines': 'error'
  }
};
