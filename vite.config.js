import { resolve } from 'path';
import {defineConfig} from "vite";
import handlebars from "vite-plugin-handlebars";

export default defineConfig({
    root: resolve(__dirname, 'src'),
    build: {
        outDir: resolve(__dirname, 'dist'),
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/index.html'),
                authorization: resolve(__dirname, 'src/pages/authorization/index.html'),
                registration: resolve(__dirname, 'src/pages/registration/index.html'),
                chat: resolve(__dirname, 'src/pages/chat/index.html'),
                settings: resolve(__dirname, 'src/pages/settings/index.html'),
                error_404: resolve(__dirname, 'src/pages/error/404/index.html'),
                error_500: resolve(__dirname, 'src/pages/error/500/index.html')
            }
        }
    },
    css: {
        preprocessorOptions: {
            scss : {
                additionalData: '@import ...'
            }
        }
    },
    plugins: [handlebars({
        partialDirectory: resolve(__dirname, 'src/partials')
    })]
})
