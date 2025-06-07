// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const LIVE_URL = 'https://adolfin07.github.io/TiimTec';

export default defineConfig({
    site: LIVE_URL,
    vite: {
        plugins: [tailwindcss()],
    },
    experimental: {
        // @ts-ignore
        assets: true,
    },
});
