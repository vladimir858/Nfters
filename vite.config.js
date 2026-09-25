import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // Заставляем Vite постоянно проверять файлы
    },
    hmr: {
      host: 'localhost', // Помогает стабилизировать WebSocket-соединение для HMR
    },
  },
})