// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Kumbh Sans",
      cssVariable: "--font-kumbh-sans",
      weights: [400, 500, 700, 800],
      styles: ["normal"],
    },
  ],
});
