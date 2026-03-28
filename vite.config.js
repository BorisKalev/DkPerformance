import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'url'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // Allows imports like: import foo from '@/components/Foo'
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
