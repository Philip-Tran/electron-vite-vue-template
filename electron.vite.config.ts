import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
// @ts-ignore
// import tailwindcss from '@tailwindcss/vite'
// import autoprefixer from 'autoprefixer'
import { fileURLToPath, URL } from 'url'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src'),
        '@': fileURLToPath(new URL('./src/renderer/src', import.meta.url))
      }
    },
    plugins: [vue(), vueDevTools()],
    server: {
      port: 3000,
      headers: {
      }
    }
  }
})
