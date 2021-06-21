module.exports = {
  testEnvironment: 'jsdom',
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    'pages/**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js', 'jest-extended'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  moduleNameMapper: {
    '^src(.*)$': '<rootDir>/src/$1',
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
  coverageThreshold: {
    // global: {
    //   branches: 90,
    //   functions: 90,
    //   statements: 90,
    //   lines: 90,
    // },
    global: {
      branches: 27,
      functions: 42,
      statements: 29,
      lines: 32,
    },
    'src/core/ejercicios-coverage/operaciones.js': {
      branches: 100,
      functions: 100,
      statements: 100,
      lines: 100,
    },
  },
}
