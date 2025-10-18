<script lang="ts">
import { type Snippet } from "svelte"
import { type ListVariant } from "@/types/container_info"

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

const requiredClasses = [ "m-0", "p-0" ]

let initialClasses = $derived(
	variant === "project"
		? [ "project_list", ...requiredClasses ]
		: variant === "card"
			? [ "card_list", ...requiredClasses ]
			: []
)
</script>

<li
	{itemprop}
	itemscope
	{itemtype}
	class={[ ...initialClasses, ...otherClasses ].join(" ")}>
	{@render children()}
</li>
