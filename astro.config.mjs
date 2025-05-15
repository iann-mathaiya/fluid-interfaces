// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  experimental: {
        fonts: [{
            provider: fontProviders.google(),
            name: "Geist",
            cssVariable: "--font-geist"
        }]
    },
  adapter: vercel()
});