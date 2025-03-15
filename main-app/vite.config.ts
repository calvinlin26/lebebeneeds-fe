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
        name: "main-app",
        filename: "mainApp.js",
        remotes: {
          userManagement: `${env.VITE_USER_MANAGEMENT_URL}/assets/userManagement.js`,
          showcase: `${env.VITE_SHOWCASE_URL}/assets/showcase.js`,
          businessParam: `${env.VITE_BUSINESS_PARAM_URL}/assets/businessParam.js`,
          notification: `${env.VITE_NOTIFICATION_URL}/assets/notification.js`,
          avm: `${env.VITE_AVM_SERVICE_URL}/assets/avm.js`,
          auditTrail: `${env.VITE_AUDIT_TRAIL_URL}/assets/auditTrail.js`,
          productManagement: `${env.VITE_PRODUCT_MANAGEMENT_URL}/assets/productManagement.js`,
        },
        exposes: {
          "./button": "./src/components/button",
          "./table": "./src/components/table",
          "./services": "./src/services",
          "./form": "./src/components/form",
          "./label": "./src/components/label",
          "./input": "./src/components/input",
          "./checkbox": "./src/components/checkbox",
          "./select": "./src/components/select",
          "./toast": "./src/components/toast",
          "./useQuery": "./src/hooks/useQuery",
          "./pagination": "./src/components/pagination",
          "./layout": "./src/components/layout",
          "./sidebar": "./src/components/sidebar",
          "./tabs": "./src/components/tabs",
          "./big-number-input": "./src/components/big-number-input",
          "./avatar": "./src/components/avatar",
          "./navbar": "./src/components/navbar",
          "./tooltip": "./src/components/tooltip",
          "./dialog": "./src/components/dialog",
          "./footer": "./src/components/footer",
          "./withUserAccess": "./src/services/withUserAccess",
          "./firebase": "./src/firebase",
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
  };
});
