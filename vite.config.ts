/// <reference types="vitest" />
/// <reference types="vite/client" />

import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import fs from 'fs'
import path from 'path'

export default defineConfig(({ command, mode }) => {
  const isDevelopment = mode === 'development'

  return {
    server: {
      host: 'localhost.bankoflemons.ru',
      port: 5173,
      ...(isDevelopment && {
        proxy: {
          '/api/v1': {
            target: 'https://bankoflemons.ru',
            changeOrigin: true,
            secure: false,
            headers: {
              Origin: 'https://bankoflemons.ru',
            },
            credentials: 'include',
          },
        },
        https: {
          key: fs.readFileSync(path.resolve(__dirname, './certificate.key')),
          cert: fs.readFileSync(path.resolve(__dirname, './certificate.crt')),
        },
      }),
    },
    plugins: [vue(), vueJsx(), vueDevTools()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  }
})
