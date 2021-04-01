module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    '@react-native-community',
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {ts: 'never', tsx: 'never'},
    ],
  },
};
