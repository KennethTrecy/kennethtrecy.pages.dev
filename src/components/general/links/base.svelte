<script lang="ts">
import { type Snippet } from "svelte"
import { type AnchorLinkType, type AnchorTarget } from "@/types/container_info"

let {
	address,
	relationship,
	context = "self",
	mayIndicateExternal = true,
	title = undefined,
	itemprop = undefined,
	itemtype = undefined,
	class: otherClasses = [],
	children
}: {
	address: string
	relationship: AnchorLinkType|AnchorLinkType[]
	context?: AnchorTarget
	mayIndicateExternal?: boolean
	title?: string|undefined
	itemprop?: string|undefined
	itemtype?: string|undefined
	class?: string[]
	children: Snippet
} = $props()

let relationshipTypes = $derived(Array.isArray(relationship) ? relationship.sort().join(" ") : relationship)
let target = $derived(context === "self" ? "_self" : "_blank")
let hasExternal = $derived(Array.isArray(relationship)
	? relationship.indexOf("external") > -1
	: relationship === "external")
let mayShowExternalIcon = $derived(hasExternal && mayIndicateExternal)
let joinedClasses = $derived([
	"link",
	...otherClasses
].filter(Boolean).join(" "))
let itemscope = $derived(typeof itemtype === "undefined" ? undefined : true)
let label = $derived(`Link to ${address}`)

function visitLink(event: KeyboardEvent): void {
	if (event.key === "Enter") {
		location.href = address
	}
}
</script>

<a
	{title}
	{itemprop}
	href={address}
	class={joinedClasses}
	rel={relationshipTypes}
	{target}
	{itemscope}
	{itemtype}>
	{@render children()}</a>{#if mayShowExternalIcon}<span
	class="cursor-pointer"
	role="link"
	tabindex="0"
	aria-label={label}
	onkeyup={visitLink}></span>{/if}

<style lang="postcss">
span::after {
	font-family: "Material Symbols Outlined";
	content: "north_east";
	position: relative;
	display: inline;
}
</style>
