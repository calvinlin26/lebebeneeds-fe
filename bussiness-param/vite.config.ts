import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "bussinessParam",
      filename: "bussinessParam.js",
      // Modules to expose
      exposes: {
        "./bussiness-param" : "./src/features/bussiness-param",
      },
      remotes: {
        mainApp: "http://localhost:5173/assets/mainApp.js",
      },
      shared: ["react", "react-dom", "react-router-dom"]
    })
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  }
})
