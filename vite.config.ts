import vue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig } from 'vite';


// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, './src/assets'),
      "@constants": path.resolve(__dirname, './src/constants'),
      "@helpers": path.resolve(__dirname, './src/helpers'),
      "@components": path.resolve(__dirname, './src/components'),
      "@interfaces": path.resolve(__dirname, './src/interfaces'),
    }
  }
});
