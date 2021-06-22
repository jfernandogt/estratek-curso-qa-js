module.exports = {
  ...require('./jest.common'),
  displayName: 'server',
  testMatch: ['**/__server_tests__/**/*.js'],
  setupFilesAfterEnv: ['./setupTests.js', 'jest-extended'],
  testEnvironment: 'node',
}
