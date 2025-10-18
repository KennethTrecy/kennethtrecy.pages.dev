<script lang="ts">
import { type Snippet } from "svelte"
import { PUBLIC_PRODUCTION_BASE_URL } from "$env/static/public"

import { internalTypes } from "@/components/general/links/constants"

import BaseLink from "@/components/general/links/base.svelte"
import ExternalLink from "@/components/general/links/external.svelte"

let {
	address,
	itemprop,
	itemtype,
	children
}: {
	address: string
	itemprop?: string
	itemtype?: string
	children: Snippet
} = $props()

let isInbound = $derived(address.includes(PUBLIC_PRODUCTION_BASE_URL))
let relationship = $derived(isInbound ? internalTypes : [])
</script>

{#if isInbound}
<BaseLink
	{address}
	{itemprop}
	{itemtype}
	{relationship}>{@render children()}</BaseLink>
{:else}
<ExternalLink
	{address}
	{itemprop}
	{itemtype}
	{relationship}>{@render children()}</ExternalLink>
{/if}
