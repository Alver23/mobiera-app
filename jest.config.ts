export default {
  preset: 'react-native',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '<rootDir>/src/**/*.tsx',
    '!<rootDir>/src/**/interfaces/*.ts',
    '!<rootDir>/src/interfaces/**/*.ts',
  ],
  coveragePathIgnorePatterns: ['src/core/tools'],
  displayName: 'mobiera-app',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '@mobiera/(.*)': '<rootDir>/src/$1',
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
  roots: ['<rootDir>/src'],
  setupFiles: ['<rootDir>/config/jest/setup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testResultsProcessor: 'jest-sonar-reporter',
  transformIgnorePatterns: [
    'node_modules/(?!react-native|@react-native-community|react-native-elements|@react-navigation)/',
  ],
};
