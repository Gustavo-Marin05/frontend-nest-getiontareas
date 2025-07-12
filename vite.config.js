import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";
import { copyFileSync } from "fs";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'copy-redirects',
      closeBundle: () => {
        // Copia el archivo _redirects desde public a dist
        copyFileSync(
          resolve(__dirname, 'public/_redirects'),
          resolve(__dirname, 'dist/_redirects')
        );
      }
    }
  ],
  build: {
    outDir: "dist",
  },
});
