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
      name: "copy-redirects",
      closeBundle: () => {
        // Copia _redirects
        copyFileSync(
          resolve(__dirname, "public/_redirects"),
          resolve(__dirname, "dist/_redirects")
        );

        // También copia _routes.json si existe
        try {
          copyFileSync(
            resolve(__dirname, "public/_routes.json"),
            resolve(__dirname, "dist/_routes.json")
          );
        } catch (e) {
          // Si no existe, no pasa nada
        }
      },
    },
  ],
  build: {
    outDir: "dist",
  },
});
