import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://prismistim.github.io',
  base: '/yosegaki-2014e-next',
  integrations: [tailwind()]
});