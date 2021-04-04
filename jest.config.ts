export default {
  preset: 'react-native',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    '<rootDir>/src/client/**/*.ts',
    '<rootDir>/src/client/**/*.tsx',
    '!<rootDir>/src/client/**/interfaces/*.ts',
    '!<rootDir>/src/client/interfaces/**/*.ts',
    '!<rootDir>/src/client/store/index.ts',
    '!<rootDir>/src/client/store/reducers/index.ts',
  ],
  coveragePathIgnorePatterns: ['src/client/core/tools'],
  displayName: 'mobiera-app',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '@mobiera/(.*)': '<rootDir>/src/client/$1',
  },
  notify: true,
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: 'reports',
        filename: 'jest.html',
      },
    ],
  ],
  roots: ['<rootDir>/src/client'],
  setupFiles: ['<rootDir>/config/jest/setup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testResultsProcessor: 'jest-sonar-reporter',
  transformIgnorePatterns: [
    'node_modules/(?!react-native|@react-native-community|react-native-elements|@react-navigation)/',
  ],
};
