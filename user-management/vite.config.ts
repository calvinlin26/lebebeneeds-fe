import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "user-management",
      filename: "userManagment.js",
      // Modules to expose
      exposes: {
        "./App": "./src/App",
      },
      // remotes: {
      //   app: "http://localhost:5000/assets/app.js",
      // },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
