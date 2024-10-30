import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import {resolve} from 'path'
import tsconfigPaths from 'vite-tsconfig-paths'

const root = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'dist'); 


// https://vite.dev/config/
export default defineConfig({
  root,
  plugins: [react(), tsconfigPaths()],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        cart: resolve(root, 'cart','index.html'),
        checkout: resolve(root, 'checkout','index.html'),
        productDetails: resolve(root, 'product-details','index.html'),
        shop: resolve(root, 'shop','index.html'),
        login: resolve(root, 'login','index.html'),
        register: resolve(root, 'register','index.html'),
        about : resolve(root, 'about','index.html'),
      },
    },
  },
})
