import { defineConfig } from 'vite'
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  plugins: [
    cssInjectedByJsPlugin(),
    svelte()
  ],
  build: {
        outDir: './dist',
        minify: true,
        sourcemap: false,
        emptyOutDir: true,   

        lib: {
            entry: './src/CounterComponent.js',
            name:'___',
            formats: ['iife'],
            fileName: (format) => `[name].[format].js`
        }
    }
})
