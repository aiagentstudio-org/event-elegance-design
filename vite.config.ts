import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "src/server.ts" },
    nitro: { 
      preset: "vercel",
      publicAssets: [
        {
          dir: "dist/client",
          maxAge: 31536000
        }
      ]
    },
  },
});
