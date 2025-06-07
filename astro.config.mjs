// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import dotenv from 'dotenv';
import vercel from '@astrojs/vercel/serverless'; // 👈 Adaptador Vercel

// Carga variables de entorno desde .env local
dotenv.config();

const LIVE_URL = "https://tiim-tec-adolfin07s-projects.vercel.app";

export default defineConfig({
    site: LIVE_URL,
    output: 'server', // 👈 Necesario para funciones tipo POST
    // @ts-ignore
    adapter: vercel(), // 👈 Aquí usas el adaptador
    vite: {
        plugins: [tailwindcss()],
        define: {
            'process.env.LIVE_URL': JSON.stringify(LIVE_URL),
        },
    },
});
