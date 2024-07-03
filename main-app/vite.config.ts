import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "main-app",
      filename: "mainApp.js",
      remotes: {
        userManagement: "http://localhost:5001/assets/userManagment.js",
      },
      exposes: {
        "./button": "./src/components/button",
        "./table": "./src/components/table",
        "./services": "./src/services",
      },
      shared: ["react", "react-dom", "axios", "react-router-dom"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
