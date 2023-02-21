import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
    host: true,
    port: 3300,
  },
  plugins: [react()],
})
