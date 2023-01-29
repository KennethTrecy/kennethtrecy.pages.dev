// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Error {}
	// interface Locals {}
	// interface PageData {}
	interface Platform {
		env: {
			COUNTER: DurableObjectNamespace
			CF_PAGES_URL: string
			PRODUCTION_BASE_URL: string
			PUBLIC_COMMIT_HASH: string
			PUBLIC_RECOMMENDED_DESCRIPTION_LENGTH: string
		}
		context: {
			waitUntil(promise: Promise<any>): void;
		}
		caches: CacheStorage & { default: Cache }
	}
}
