import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',       // 👈 makes Vite accessible on LAN
    port: 5173             // 👈 optional: default port
  },
  plugins: [react(), tailwindcss()],
})
