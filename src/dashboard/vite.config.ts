import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
        emptyOutDir: true,
        cssCodeSplit: true,
        outDir: '../../cloudflare-base/static/dashboard-dist/',
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
