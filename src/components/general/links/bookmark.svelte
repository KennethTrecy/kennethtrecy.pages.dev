<script lang="ts">
import { type Snippet } from "svelte"
import { internalTypes } from "@/components/general/links/constants"

import Link from "@/components/general/links/base.svelte"

let {
	fragment,
	itemprop = undefined,
	class: group = [],
	children
}: {
	fragment: string
	itemprop?: string|undefined
	class?: string[]
	children: Snippet
} = $props()
</script>

<Link
	address={fragment}
	relationship={[ "bookmark", ...internalTypes ]}
	class={group}
	context="self"
	{itemprop}>
	{@render children()}
</Link>
