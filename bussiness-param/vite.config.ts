import { defineConfig, loadEnv } from "vite";

import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load environment variables based on the current mode
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [
      react(),
      federation({
        name: "businessParam",
        filename: "businessParam.js",
        // Modules to expose
        exposes: {
          "./business-param": "./src/features/business-param",
        },
        remotes: {
          mainApp: `${env.VITE_MAIN_APP_URL}/assets/mainApp.js`,
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
  };
});
