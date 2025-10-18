import { defineConfig } from "vite"
import tailwindcss from "@tailwindcss/vite"
import autoprefixer from "autoprefixer"
import { sveltekit } from "@sveltejs/kit/vite"

export default defineConfig(({ mode }) => ({
	"plugins": [
		sveltekit(),
		tailwindcss()
	],
	"css": {
		"postcss": {
			"plugins": [
				autoprefixer({
					"cascade": true
				})
			]
		},
		"transformer": "postcss"
	},
	"server": {
		"port": Number(process.env.PORT || "7000"),
		"hmr": {
			"clientPort": 7000,
			"port": 7000,
			"host": "localhost",
			"protocol": "ws"
		},
		"allowedHosts": true
	},
	"test": {
		"environment": "jsdom",
		"include": [ "src/**/*.spec.ts" ]
	},
	"resolve":	{
		"conditions": mode === "test" ? ["browser"] : [],
	},
}))
