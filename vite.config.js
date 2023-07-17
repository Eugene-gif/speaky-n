import { defineConfig } from 'vite'
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/speaky-n",
  server: {
    open: true,
    host: true,
  },
  build: {
    assetsDir: "assets",
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name].[ext]",
      },
    },
  },
  plugins: [vue()],
  resolve: {
    alias: { '@': resolve(__dirname, './src') }
  },
})
