import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // The configured GitHub Pages custom domain serves this site at its root.
  base: "/",
  build: {
    outDir: "dist/client",
  },
  optimizeDeps: {
    include: ["react", "react-dom/client"],
  },
  server: {
    host: "0.0.0.0",
    allowedHosts: ["terminal.local"],
    warmup: {
      clientFiles: ["./src/main.jsx"],
    },
  },
  plugins: [react()],
});
