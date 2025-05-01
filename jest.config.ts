import type {Config} from 'jest';

const config: Config = {
  verbose: true,
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx|mjs)$": ['ts-jest', {tsconfig: 'projects/demo/tsconfig.spec.json'}],
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  globals: {
  },
};

export default config;