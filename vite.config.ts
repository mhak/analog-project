/// <reference types="vitest" />

import { defineConfig } from 'vite';
import analog from '@analogjs/platform';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  build: {
    target: ['es2020'],
  },
  resolve: {
    mainFields: ['module'],
    // alias: {
    //   'node-fetch': 'isomorphic-fetch',
    // },
  },
  plugins: [analog()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/test-setup.ts'],
    include: ['**/*.spec.ts'],
    reporters: ['default'],
    // deps: {
    //   interopDefault: true,
    // },
  },
  define: {
    'import.meta.vitest': mode !== 'production',
    // By default, Vite doesn't include shims for NodeJS/
    // necessary for segment analytics lib to work
    //global: {},
  },
}));
