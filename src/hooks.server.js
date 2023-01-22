import { dev } from '$app/environment'
import { minify } from "html-minifier"

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	const response = await resolve(event, {
		transformPageChunk: ({ html }) => {
			if (dev) {
				return html
			}

			const minimizeHTML = minify(html, {
				"collapseBooleanAttributes": true,
				"collapseWhitespace": true,
				"minifyCSS": true,
				"includeAutoGeneratedTags": false,
				"minifyJS": true
			})
			const almostSpaceFreeHTML = minimizeHTML.replace(/(\t|\r?\n)/g, "")
			return almostSpaceFreeHTML
		}
	 })

	return response
}
