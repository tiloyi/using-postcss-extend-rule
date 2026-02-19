import { defineConfig } from "vite";
import postcssExtendRule from "postcss-extend-rule";

export default defineConfig({
  css: {
    postcss: {
      plugins: [postcssExtendRule()],
    },
    preprocessorOptions: {
      scss: {
        loadPaths: [
          "node_modules/@gouvfr/dsfr",
          "node_modules/@gouvfr/dsfr/src",
        ],
        quietDeps: true,
      },
    },
  },
  build: {
    cssMinify: false, // Permet de voir le code CSS généré dans le fichier dist/assets/index.css, utile pour le développement et le débogage.
  },
});
