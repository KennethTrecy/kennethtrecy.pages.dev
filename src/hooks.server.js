import { minify } from "html-minifier"

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	const response = await resolve(event, {
		transformPageChunk: ({ html }) => {
			const minimizeHTML = minify(html, {
				"collapseBooleanAttributes": true,
				"collapseInlineTagWhitespace": true,
				"collapseWhitespace": true,
				"minifyCSS": true,
				"includeAutoGeneratedTags": false,
				"minifyJS": true
			})
			return minimizeHTML.replace(/(\t|\n)/g, "")
		}
	 })

	return response
}
