import type {Config} from 'jest';

const config: Config = {
  verbose: true,
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": ['ts-jest', {tsconfig: 'projects/demo/tsconfig.spec.json'}],
  },
  transformIgnorePatterns: [
    '/node_modules/(?!flat)/', // Exclude modules except 'flat' from transformation
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  globals: {
  },
};

export default config;