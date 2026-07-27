import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Migrated from Create React App (react-scripts) to Vite.
export default defineConfig({
  plugins: [react()],
  server: { port: 3000, open: true },
  build: { outDir: 'build' },
})
