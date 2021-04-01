/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

export default {
  preset: 'react-native',
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  displayName: 'mobiera-app',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
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
  setupFilesAfterEnv: ['<rootDir>/config/jest/setup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
