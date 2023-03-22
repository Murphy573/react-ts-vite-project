import { ConfigEnv, defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import ViteEslint from 'vite-plugin-eslint'
import path from 'node:path'
import { getLocalEnvConfig } from './built/utils'

const resolve = (dir: string) => path.join(__dirname, dir)

// https://vitejs.dev/config/
export default defineConfig((configEnv: ConfigEnv) => {
  const currentEnv = loadEnv(configEnv.mode, process.cwd())
  const localEnv = getLocalEnvConfig()?.parsed || {}
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const finalEnv = Object.assign({}, currentEnv, localEnv)

  // console.log(configEnv.command, configEnv.mode, finalEnv)

  return {
    base: './',
    resolve: {
      alias: {
        '@': resolve('src')
      },
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    },

    esbuild: {
      // 删除console debugger
      pure: ['console.log', 'debugger']
    },

    build: {
      outDir: 'dist',
      // assetsDir
      cssCodeSplit: true,
      sourcemap: false
      // terserOptions: {
      //   compress: {
      //     drop_console: true,
      //     drop_debugger: true
      //   }
      // }
    },

    plugins: [react(), ViteEslint({ failOnError: false })],

    server: {
      host: '0.0.0.0',
      port: 4399,
      strictPort: true,
      open: true,
      proxy: {}
    }
  }
})
