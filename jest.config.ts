import nextJest from 'next/jest';
import type { Config as JestConfig } from '@jest/types';

const createJestConfig = nextJest({ dir: './' });

const customJestConfig: JestConfig.InitialOptions = {
  testEnvironment: 'jest-environment-jsdom',
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/@types/**'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@enums/(.*)$': '<rootDir>/src/enums/$1',
    '^@lib/(.*)$': '<rootDir>/src/lib/$1',
    '^@models/(.*)$': '<rootDir>/src/models/$1',
    '^@pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@services/(.*)$': '<rootDir>/src/services/$1',
    '^@styles/(.*)$': '<rootDir>/src/styles/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@view-models/(.*)$': '<rootDir>/src/view-models/$1',
    '^@test-utils/(.*)$': '<rootDir>/tests/.utils/$1',
    '^next-i18next.config': '<rootDir>/next-i18next.config',
  },
};

export default createJestConfig(customJestConfig);
