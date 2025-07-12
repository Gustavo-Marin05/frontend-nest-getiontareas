import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
  },
  server: {
    // Para permitir rutas SPA como /task, /task/edit/1
    historyApiFallback: true,
  },
});
