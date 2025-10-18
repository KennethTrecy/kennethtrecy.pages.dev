<script lang="ts">
import { type Snippet } from "svelte"
import { type ListVariant } from "@/types/container_info"

import SimpleThing from "@/components/general/containers/simple_thing.svelte"
import StructuredListItem from "@/components/general/containers/structured_list_item.svelte"

let {
	itemprop = "itemListElement",
	itemtype = "https://schema.org/ListItem",
	variant = "normal",
	class: otherClasses = [],
	children
}: {
	itemprop?: string
	itemtype?: string
	variant?: ListVariant
	class?: string[]
	children: Snippet
} = $props()
</script>

<StructuredListItem
	{itemprop}
	{variant}
	{itemtype}
	class={otherClasses}>
	<SimpleThing itemprop="description">
		{@render children()}
	</SimpleThing>
</StructuredListItem>
