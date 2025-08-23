// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // <-- Import the new plugin

// https://vitejs.dev/config/
export default defineConfig({
  // Add the plugin directly to the plugins array
  plugins: [react(), tailwindcss()], 
})
