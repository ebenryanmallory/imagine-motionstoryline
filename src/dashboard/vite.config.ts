import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
        emptyOutDir: true,
        cssCodeSplit: true,
        outDir: '../../assets/static/dashboard/',
        rollupOptions: {
            output: {
                inlineDynamicImports: true,
                assetFileNames: '[name].[ext]',
                entryFileNames: 'index.js'
            }
        }
    },
    plugins: []
})
