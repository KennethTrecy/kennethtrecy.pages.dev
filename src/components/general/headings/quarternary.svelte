<script lang="ts">
import { type Snippet } from "svelte"
import { type HeadingInfo, type SubheadingVariant } from "@/types/container_info"

import Subheading from "@/components/general/headings/subheading.svelte"

let {
	headingInfo,
	variant = "headline",
	mayUseBookmark = true,
	class: otherClasses = [],
	children
}: {
	headingInfo: HeadingInfo<"defined">;
	variant?: SubheadingVariant
	mayUseBookmark?: boolean
	class?: string[]
	children?: Snippet
} = $props()

let joinedClasses = $derived([
	...otherClasses
])
</script>

<Subheading level={4} {headingInfo} {variant} {mayUseBookmark} class={joinedClasses}>
	{@render children?.()}
</Subheading>
