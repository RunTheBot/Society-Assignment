import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        methods: resolve(__dirname, 'methods.html'),
        implications: resolve(__dirname, 'implications.html'),
        sources: resolve(__dirname, 'sources.html'),
      },
    },
  },
})