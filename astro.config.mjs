// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import dotenv from 'dotenv';

// Carga variables de entorno desde .env local
dotenv.config();

const LIVE_URL = "https://tiim-tec-adolfin07s-projects.vercel.app";

export default defineConfig({
    site: LIVE_URL, // usa la URL de producción aquí
    vite: {
        plugins: [tailwindcss()],
        define: {
            // Define variables para que estén disponibles en tu código cliente si necesitas
            'process.env.LIVE_URL': JSON.stringify(LIVE_URL),
        },
    },
});
