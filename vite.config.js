import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["react-router-dom", "react-just-parallax", "scroll-lock"], // Exclude these dependencies from optimization
  },
});
