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
    '!**/*.test.js?(x)',
    '!**/main.jsx',
    '!**/app.1.jsx'
  ],
  moduleNameMapper: {
    '^.+\\.(css|scss)$': 'identity-obj-proxy'
  },
  setupFiles: [
    './test/jest-setup.js'
  ],
  snapshotSerializers: [
    '<rootDir>/node_modules/enzyme-to-json/serializer'
  ]
};
