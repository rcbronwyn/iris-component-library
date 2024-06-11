/// <reference types="vite/client" />
/// <reference types="vitest" />

import react from '@vitejs/plugin-react'
import dts from "vite-plugin-dts";
import { peerDependencies } from "./package.json";
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    react(),
    dts({ exclude: ["**/*.stories.ts", "stc/test", "**/*.test.tsx"]}),
  ],
  build: { 
    lib: { 
      entry: './src/index.ts', 
      name: 'ui', 
      fileName: (format) => `ui.${format}.js`,
      formats: ['es', 'cjs', 'umd'],
    }, 
    rollupOptions: { 
      external: Object.keys(peerDependencies), 
      output: { globals: { react: 'React', 'react-dom': 'ReactDOM' } } 
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    coverage: {
      include: ['src/components'],
      exclude: ['**/*.stories.tsx'],
    }
  }
})