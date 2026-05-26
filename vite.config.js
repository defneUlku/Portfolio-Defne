import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Relative base — GitHub Pages alt-klasor deploy icin
  base: './',
})
