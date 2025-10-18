<script lang="ts">
import { type Snippet } from "svelte"
import { type HeadingInfo, type SubheadingVariant } from "@/types/container_info"

import Heading from "@/components/general/headings/base.svelte"

let {
	level,
	variant,
	headingInfo,
	mayUseBookmark = true,
	class: otherClasses = [],
	children
}: {
	level: number
	variant: SubheadingVariant
	headingInfo: HeadingInfo<"defined">;
	mayUseBookmark?: boolean
	class?: string[]
	children: Snippet
} = $props()

let joinedClasses = $derived([
	...otherClasses
])
let hasPrefix = $derived(Boolean(headingInfo.prefix))
let fragment = $derived(`#${headingInfo.id}`)
let itemprop = $derived(
	variant === "headline"
		? "headline name"
		: variant === "term"
			? "termCode name"
			: variant ==="name"
				? "name"
				: undefined
)
</script>

<Heading {level} {fragment} {mayUseBookmark} class={joinedClasses}>
	{#if hasPrefix}
		<span>{headingInfo.prefix}</span>
	{/if}

	<span {itemprop}>{headingInfo.text}{@render children()}</span>
</Heading>
