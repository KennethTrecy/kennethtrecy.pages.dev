<script lang="ts">
import { type Snippet } from "svelte"

let {
	itemprop: otherItemprop = "",
	children
}: {
	itemprop?: string
	children: Snippet
} = $props()

let itemprop = $derived(otherItemprop === "" ? "text" : `${otherItemprop} text`)
</script>

<p {itemprop}>
	{@render children()}
</p>
