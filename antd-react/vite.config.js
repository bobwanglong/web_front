import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url' // 配置别名路径
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: { // 别名路径
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      "/apis": "http://192.168.118.82:2381"
    }
  }
})
