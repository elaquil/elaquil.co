import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// git subtree push --prefix dist origin gh-pages
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
