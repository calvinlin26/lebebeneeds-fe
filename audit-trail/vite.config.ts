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
        name: "audit-trail",
        filename: "auditTrail.js",
        // Modules to expose
        exposes: {
          "./api": "./src/features/api-list",
          "./activity": "./src/features/activity-list",
        },
        remotes: {
          mainApp: `${env.VITE_MAIN_APP_URL}/assets/mainApp.js`,
        },
        shared: ["react", "react-dom", "react-router-dom", "sonner"],
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
