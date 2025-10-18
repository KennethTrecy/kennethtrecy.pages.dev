<script lang="ts">
import { type Snippet } from "svelte"
import { type AnchorLinkType } from "@/types/container_info"

import { externalTypes } from "@/components/general/links/constants"

import Link from "@/components/general/links/base.svelte"

let {
	address,
	itemprop = undefined,
	itemtype = undefined,
	relationship = [],
	children
}: {
	address: string
	itemprop?: string|undefined
	itemtype?: string|undefined
	relationship?: AnchorLinkType|AnchorLinkType[]
	children: Snippet
} = $props()

let relationshipTypes = $derived([
	...externalTypes,
	...Array.isArray(relationship)
		? relationship
		: [ relationship ]
])
</script>

<Link address={address} relationship={relationshipTypes} context="other" {itemprop} {itemtype}>
	{@render children()}
</Link>
