import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Enable global functions like `describe`, `it`, `expect`
    environment: 'jsdom', // Simulate a browser environment
    setupFiles: './src/setupTests.ts', // Path to your setup file
  },
})
