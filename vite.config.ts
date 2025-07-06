import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/phishing_game/', // Diese Zeile hinzufügen
  plugins: [react()],
})
