module.exports = {
  ...require('./jest.common'),
  testEnvironment: 'jsdom',
  displayName: 'client',
  testMatch: ['**/__tests__/**/*.js'],
  setupFilesAfterEnv: ['./setupTests.js', 'jest-extended'],
}
