import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

export const astroConfig = {
  integrations: [tailwind()],
  site: 'https://pay-hayashi.github.io',
  base: '/simplog/'
}

// https://astro.build/config
export default defineConfig(astroConfig);