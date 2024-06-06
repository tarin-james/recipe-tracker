import { resolve } from "path";
import { defineConfig } from "vite";
export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        create: resolve(__dirname, "src/create/index.html"),
        search: resolve(__dirname, "src/search/index.html"),
        details: resolve(__dirname, "src/details/index.html")
      },
    },
  },
});
