import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()], // Combined all plugins into one array
  server: {
    port: 3000, // Set the port to 3000
    open: true, // Open the browser when the server starts
    proxy: {
      // Proxy configuration
      "/api": {
        target: "http://localhost:5000", // Target API URL
        changeOrigin: true, // Change the origin of the host header to the target URL
        rewrite: (path) => path.replace(/^\/api/, ""), // Rewrite the path to remove the /api prefix
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
