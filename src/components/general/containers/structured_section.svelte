<script lang="ts">
import { type Snippet } from "svelte"

let {
	id = undefined,
	itemprop = "hasPart",
	itemtype = "https://schema.org/WebContent",
	itemid = undefined,
	class: otherClasses = [],
	children
}: {
	id?: string|undefined
	itemprop?: string
	itemtype?: string
	itemid?: string|undefined
	class?: string[]
	children: Snippet
} = $props()

let resolvedItemID = $derived(itemid ?? (typeof id === "undefined" ? undefined : `#${id}`))
</script>

<section
	{itemprop}
	itemscope
	{itemtype}
	{id}
	itemid={resolvedItemID}
	class={otherClasses.join(" ")}>
	{@render children()}
</section>
