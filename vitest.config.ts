import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    environment: 'node',
    globals: true,
    include: ['**/*.test.ts', '**/*.test.tsx'],
  },
  resolve: {
    alias: {
      '~encore': path.resolve(__dirname, '.encore/runtime'),
    },
  },
});