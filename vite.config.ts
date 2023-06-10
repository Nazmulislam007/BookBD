import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./src/__test__/setup.tsx"],
    globals: true,
  },
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
});
