import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    base: "/move-your-car-plz/",
    resolve: {
        alias: {
            "@": resolve(__dirname, "./src"),
        },
    },
});
