<script lang="ts">
import { type Snippet } from "svelte"
import { type ListVariant, type Order } from "@/types/container_info"

const itemtype = "https://schema.org/ItemList"

let {
	order,
	hasOwnScope = true,
	itemprop = "mainEntity",
	variant = "normal",
	class: otherClasses = [],
	children
}: {
	order: Order
	hasOwnScope?: boolean
	itemprop?: string
	variant?: ListVariant
	class?: string[]
	children?: Snippet
} = $props()
const cardVariantClasses = [ "flex", "flex-col", "list-outside", "list-none" ]

let initialClasses = $derived(variant === "project"
	? [ "project_list", "flex-wrap", ...cardVariantClasses ]
	: variant === "card"
		? [ "card_list", ...cardVariantClasses, ]
		: [])

let joinedClasses = $derived([ ...initialClasses, ...otherClasses ].join(" "))
let listOrder = $derived(order === "unordered"
	? "https://schema.org/ItemListUnordered"
	: order === "ascending"
		? "https://schema.org/ItemListOrderAscending"
		: "https://schema.org/ItemListOrderDescending")
</script>

{#if order === "unordered"}
	{#if hasOwnScope}
		<ul
			{itemprop}
			itemscope
			{itemtype}
			class={joinedClasses}>
			<link itemprop="itemListOrder" href={listOrder}/>
			{@render children?.()}
		</ul>
	{:else}
		<ul class={joinedClasses}>
			<link itemprop="itemListOrder" href={listOrder}/>
			{@render children?.()}
		</ul>
	{/if}
{:else}
	{#if hasOwnScope}
		<ol
			{itemprop}
			itemscope
			{itemtype}
			class={joinedClasses}>
			<link itemprop="itemListOrder" href={listOrder}/>
			{@render children?.()}
		</ol>
	{:else}
		<ol class={joinedClasses}>
			<link itemprop="itemListOrder" href={listOrder}/>
			{@render children?.()}
		</ol>
	{/if}
{/if}
