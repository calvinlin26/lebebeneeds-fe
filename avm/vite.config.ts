import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "avm",
      filename: "avm.js",
      // Modules to expose
      exposes: {
        "./avm": "./src/features/avm",
      },
      remotes: {
        mainApp: "http://localhost:5173/assets/mainApp.js",
      },
      shared: ["react", "react-dom", "react-router-dom"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
