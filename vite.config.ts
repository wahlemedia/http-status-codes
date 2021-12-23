import path from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

module.exports = defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/main.ts'),
            name: 'http-status-codes',
            fileName: (format: string) => `http-status-codes.${format}.js`
        },
        rollupOptions: {
            external: [],
            output: {
                globals: {}
            }
        }
    },
    plugins: [dts({
        outputDir: 'types',
        exclude: ['src/ignore'],
        staticImport: true,
        insertTypesEntry: true,
        logDiagnostics: true
    })]
})