module.exports = {
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  testMatch: [
    '**/?(*.)(spec|test).js?(x)'
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/build/',
    '/coverage/',
    '/server/'
  ],
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!**/*.test.js?(x)'
  ]
};
