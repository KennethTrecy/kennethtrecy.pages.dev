<script lang="ts">
import { type Snippet } from "svelte"
import Icon from "@/components/general/icon.svelte"
import Bookmark from "@/components/general/links/bookmark.svelte"

let {
	level,
	fragment,
	mayUseBookmark = true,
	class: otherClasses = [],
	children
}: {
	level: number
	fragment: string
	mayUseBookmark?: boolean
	class?: string[]
	children: Snippet
} = $props()

let isMouseIn = $state(false)

let joinedClasses = $derived([
	"heading-bg",
	...otherClasses
].filter(Boolean).join(" ") || undefined)
let tag = $derived(
	level == 1
		? "h1"
		: level === 2
			? "h2"
			: level === 3
				? "h3"
				: "h4"
)
</script>

<svelte:element
	this={tag}
	class={joinedClasses}
	onmouseout={_event => isMouseIn = false}
	onblur={_event => isMouseIn = false}
	onmouseover={_event => isMouseIn = true}
	onfocus={_event => isMouseIn = true}>
	{@render children()}
	{#if mayUseBookmark}
		<Bookmark
			{fragment}
			class={[ isMouseIn ? "opacity-100 transition-opacity" : "opacity-0 transition-opacity" ]}>
			<Icon name="link"/>
		</Bookmark>
	{/if}
</svelte:element>
