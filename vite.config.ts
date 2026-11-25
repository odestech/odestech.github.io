import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    __BUILD_YEAR__: JSON.stringify(String(new Date().getFullYear())),
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    // Pages are prerendered; the client bundle only hydrates them.
    assetsInlineLimit: 0,
  },
  ssr: {
    noExternal: true,
  },
});
