import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import  VitePurgeIcons  from 'vite-plugin-purge-icons';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),VitePurgeIcons()],
})
