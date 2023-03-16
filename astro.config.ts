import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: "dracula",
      wrap: true
    }
  },
  integrations: [mdx({}), tailwind({
    config: {
      path: './tailwind.config.cjs'
    },
  }), image({
    serviceEntryPoint: "@astrojs/image/sharp"
  }), sitemap(), prefetch(), react()],
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"]
    }
  }
});