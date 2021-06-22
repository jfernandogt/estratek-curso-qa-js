module.exports = {
  ...require('./config/jest/jest.common'),
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    'pages/**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  projects: ['./config/jest/jest.client.js', './config/jest/jest.server.js'],
}
