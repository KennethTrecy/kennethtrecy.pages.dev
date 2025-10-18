<script lang="ts">
import { type Snippet } from "svelte"

let { itemprop: otherItemprop = "", children }: {
	itemprop?: string
	children: Snippet
} = $props()

let itemprop = $derived(otherItemprop === "" ? "keywords" : `${otherItemprop} keywords`)
</script>

<strong {itemprop}>{@render children()}</strong>
