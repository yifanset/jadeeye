import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `
          @import "@/styles/variables.less";
          @import "@/styles/mixins.less";
          @import "@/styles/styles.less";
        `,
      },
    },
  },
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: ['.js', '.vue', '.json'] // Добавлено для лучшего разрешения файлов
  },
  server: {
    port: 3001,
    host: 'localhost', // Явное указание хоста
    strictPort: true, // Запрещает автоматический выбор порта
    hmr: {
      overlay: true // Показывать ошибки в браузере
    },
    watch: {
      usePolling: true // Для WSL/Docker или проблемных файловых систем
    }
  },
  optimizeDeps: {
    include: ['vue'] // Оптимизация зависимостей
  }
})