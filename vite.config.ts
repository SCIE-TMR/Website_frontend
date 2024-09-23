import path from "path";
// import react from "@vitejs/plugin-react";
import vue from "@vitejs/plugin-vue"
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});