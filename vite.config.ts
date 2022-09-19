import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ViteEslint from 'vite-plugin-eslint'

// const resolve = (dir) => path.join(__dirname, dir);

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@': '/'
    }
  },

  build: {
    outDir: 'dist',
    // assetsDir
    cssCodeSplit: true,
    sourcemap: false
  },
  plugins: [react(), ViteEslint({ failOnError: false })],

  server: {
    host: '0.0.0.0',
    port: 4399,
    strictPort: true,
    open: true,
    proxy: {}
  }
})
