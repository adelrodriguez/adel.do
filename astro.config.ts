import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"

import vercel from "@astrojs/vercel/serverless"

// https://astro.build/config
export default defineConfig({
  site: "https://adelrodriguez.github.io",
  integrations: [tailwind()],
  output: "server",
  adapter: vercel(),
  redirects: {
    '/whatsapp': '/projects/sendawhats.app'
  }
})
