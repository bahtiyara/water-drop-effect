import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vite.dev/config/
export default defineConfig({
	base: "water-drop-effect",
	plugins: [react()],
	build: {
		outDir: "docs",
	},
})
