import { defineConfig, loadEnv } from "vite";
import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";
// https://vitejs.dev/config/
export default defineConfig(function (_a) {
    var mode = _a.mode;
    // Load environment variables based on the current mode
    var env = loadEnv(mode, process.cwd());
    console.log({ mode: mode, env: env });
    return {
        plugins: [
            react(),
            federation({
                name: "main-app",
                filename: "mainApp.js",
                remotes: {
                    userManagement: "".concat(env.VITE_USER_MANAGEMENT_URL, "/assets/userManagement.js"),
                    showcase: "".concat(env.VITE_SHOWCASE_URL, "/assets/showcase.js"),
                    bussinessParam: "".concat(env.VITE_BUSSINESS_PARAM_URL, "/assets/bussinessParam.js"),
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
