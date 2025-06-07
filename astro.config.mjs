// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import 'dotenv/config';

const LIVE_URL = "https://github.com/adolfin07/TiimTec";

export default defineConfig({
    site: 'https://github.com/adolfin07',
    vite: {
        plugins: [tailwindcss()],
    },
});
