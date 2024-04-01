import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
        emptyOutDir: true,
        cssCodeSplit: true,
        outDir: '../../assets/static/dashboard/',
        rollupOptions: {
            output: {
                inlineDynamicImports: false,
                assetFileNames: '[name].[ext]',
                chunkFileNames: '[name].js',
                entryFileNames: '[name].js'
            }
        }
    },
    plugins: []
})
