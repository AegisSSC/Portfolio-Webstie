import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()]
})

import preprocess from "svelte-preprocess";

const config = {
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
}