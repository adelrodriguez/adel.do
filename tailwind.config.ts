import type { Config } from "tailwindcss"
import FormsPlugin from "@tailwindcss/forms"

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [FormsPlugin],
} satisfies Config
