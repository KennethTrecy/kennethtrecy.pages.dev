<script lang="ts">
import { type Snippet } from "svelte"
import { type ReferenceInfo } from "@/types/reference"

import { onMount } from "svelte"

import { internalTypes } from "@/components/general/links/constants"

import { appendReference } from "@/components/general/containers/reference_info_collection"

import BaseLink from "@/components/general/links/base.svelte"
import ExternalLink from "@/components/general/links/external.svelte"

let { info, itemprop = undefined, children }: {
	info: ReferenceInfo
	itemprop?: string|undefined
	children?: Snippet
} = $props()

onMount(() => {
	appendReference(info)
})

let linkComponent = $derived(info.linkCategory === "inbound"
	? BaseLink
	: ExternalLink)
let relationship = $derived(info.linkCategory === "inbound"
	? internalTypes
	: [])

const SvelteComponent = $derived(linkComponent);
</script>

<SvelteComponent
	address={info.link}
	{itemprop}
	{relationship}>{@render children?.()}</SvelteComponent>
