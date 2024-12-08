import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: 'localhost.bankoflemons.ru',
    port: 5173,
    proxy: {
      '/api/v1': {
        target: 'http://bankoflemons.ru',
        changeOrigin: true,
        secure: false,
        headers: {
          Origin: 'http://bankoflemons.ru',
        },
        credentials: 'include',
      },
    },
  },
  plugins: [vue(), vueJsx(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
