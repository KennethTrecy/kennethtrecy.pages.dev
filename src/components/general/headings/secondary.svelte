<script lang="ts">
import { type Snippet } from "svelte"
import { type HeadingInfo, type SubheadingVariant } from "@/types/container_info"
import Subheading from "@/components/general/headings/subheading.svelte"

let {
	headingInfo,
	variant = "headline",
	class: otherClasses = [],
	children
}: {
	headingInfo: HeadingInfo<"defined">;
	variant?: SubheadingVariant
	class?: string[]
	children?: Snippet
} = $props()

let joinedClasses = $derived([
	...otherClasses
])
</script>

<Subheading level={2} {headingInfo} {variant} class={joinedClasses}>
	{@render children?.()}
</Subheading>
