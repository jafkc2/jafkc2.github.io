import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'


const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  build: {
    target: 'es2022',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        kc_overlay: resolve(__dirname, 'projetos/kc-overlay.html'),
        minelander: resolve(__dirname, 'projetos/minelander.html'),
        showcase: resolve(__dirname, 'projetos/showcase.html'),
        discord_verification: resolve(__dirname, '.well-known/discord')

      },
    },
  },
  plugins: [
    tailwindcss(),
  ],
})
