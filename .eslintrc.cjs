module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb/rules/react',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: [
    'react',
  ],
  rules: {
    'react-refresh/only-export-components': 'warn',
    "semi": ["error", "always"],
    'jsx-a11y/alt-text': 'off',
    'max-len': ['warn', { code: 120 }],
  },
}
