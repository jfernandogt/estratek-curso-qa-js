module.exports = {
  ...require('./jest.common'),
  testEnvironment: 'jsdom',
  displayName: 'client',
  setupFilesAfterEnv: ['./setupTests.js', 'jest-extended'],
}
