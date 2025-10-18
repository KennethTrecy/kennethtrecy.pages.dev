<script lang="ts">
import { type Snippet } from "svelte"

import { MAIN_CONTENT_ID } from "@/constants/miscellaneous_meta"

import Heading from "@/components/general/headings/base.svelte"

let { class: otherClasses = [], prefix = "", children }: {
	class?: string[]
	prefix?: string
	children: Snippet
} = $props()

let joinedClasses = $derived([
	"text-center",
	"md:text-left",
	...otherClasses
])
let hasPrefix = $derived(prefix !== "")
</script>

<Heading level={1} fragment={`#${MAIN_CONTENT_ID}`} class={joinedClasses}>
	{#if hasPrefix}
		<span class="text-3xl">
			<span>{prefix}</span>
			<span itemprop="headline name">{@render children()}</span>
		</span>
	{:else}
		<span itemprop="headline name" class="text-3xl">
			{@render children()}
		</span>
	{/if}
</Heading>
