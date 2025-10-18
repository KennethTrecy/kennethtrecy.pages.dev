<script lang="ts">
import { type Snippet } from "svelte"

import { browser } from "$app/environment"
import { MAIN_CONTENT_ID } from "@/constants/miscellaneous_meta"

let {
	itemtype = "https://schema.org/WebContent",
	title,
	aside,
	content,
	metadata
}: {
	itemtype?: string
	title: Snippet
	aside?: Snippet
	content: Snippet
	metadata?: Snippet
} = $props()

const currentLocation = browser ? location.href : ""
</script>

<div class="flex-1 m-0 h-full flex flex-col justify-center items-stretch container">
	<article
		id={MAIN_CONTENT_ID}
		itemid={`${currentLocation}#${MAIN_CONTENT_ID}`}
		itemprop="mainContentOfPage"
		itemscope
		itemtype="https://schema.org/WebPageElement"
		class="container flex-1 flex flex-col justify-center items-center">
		{@render title()}
		<div class="flex flex-col md:flex-row-reverse justify-center items-stretch max-w-full">
			{#if aside}
				<!-- TODO: Create a side navigation for articles -->
				<aside class="prose prose-neutral w-96 flex flex-row justify-left items-start">
					{@render aside()}
				</aside>
			{/if}
			<div
				itemprop="mainEntity"
				itemscope
				{itemtype}
				class="prose prose-neutral pb-8 text-justify">
				{@render content()}
			</div>
		</div>
		{#if metadata}
			<footer class="prose prose-neutral pb-8">
				{@render metadata()}
			</footer>
		{/if}
	</article>
</div>
