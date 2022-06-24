import { defineConfig } from "vite";
import solid from "solid-start";

export default defineConfig({
  plugins: [solid({ ssr: process.env.RENDER_MODE === "ssr" })],
  define: {
    "process.env.RENDER_MODE": `"${process.env.RENDER_MODE}"`,
  },
});
