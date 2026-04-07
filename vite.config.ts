import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    // 优化构建输出
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // 启用代码分割
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue'],
          theme: ['vuepress-theme-hope'],
          plugins: ['@vuepress/plugin-shiki', '@vuepress/plugin-markdown-math'],
        },
      },
    },
  },
  // 开发服务器配置
  server: {
    port: 8080,
    open: true,
  },
  // 优化依赖
  optimizeDeps: {
    include: ['vue', 'vue-router', 'vuepress-theme-hope'],
  },
});