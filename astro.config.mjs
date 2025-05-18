// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
const LIVE_URL = "https://github.com/adolfin07/TiimTec"

// https://astro.build/config
export default defineConfig({
    site: 'https://github.com/adolfin07',
    vite: {
        plugins: [tailwindcss()],
    },
});
