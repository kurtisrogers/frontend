import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import tsconfigPaths from 'vite-tsconfig-paths'

import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "css": path.resolve(__dirname, "./src/assets/css"),
    },
  },
  plugins: [
    /* 
    Uncomment the following line to enable solid-devtools.
    For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
    */
    // devtools(),
    solidPlugin(),
    tsconfigPaths()
  ],
  // server: {
  //   port: 3000,
  // },
  build: {
    target: 'esnext',
  },
});
