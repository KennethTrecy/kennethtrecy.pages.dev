/*
 * See https://kit.svelte.dev/docs/types#app
 * for information about these interfaces
 * and what to do when importing types
 */
declare namespace App {
	/*
	 * Interface Error {}
	 * interface Locals {}
	 * interface PageData {}
	 * interface PageState {}
	 */
	interface Platform {
		env: {
			PUBLIC_PRODUCTION_BASE_URL: string
			PUBLIC_RECOMMENDED_DESCRIPTION_LENGTH: string
			PUBLIC_MINIMUM_TITLE_LENGTH: string
			PERSONAL_GITHUB_ACCESS_TOKEN: string
			IS_INDEXABLE: string
		}
		context: {
			waitUntil(promise: Promise<any>): void;
		}
		caches: CacheStorage & { default: Cache }
	}
}
