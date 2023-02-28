import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin"
import svgr from "vite-plugin-svgr"

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
    host: true,
    port: 3300,
  },
  plugins: [react(), vanillaExtractPlugin(), svgr()],
})
