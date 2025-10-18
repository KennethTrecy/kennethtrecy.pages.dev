<script lang="ts">
import { type Snippet } from "svelte"

let { itemprop, children }: {
	itemprop: "name"|"description";
	children: Snippet
} = $props()
</script>

<span itemprop="item" itemscope itemtype="https://schema.org/Thing">
	<span {itemprop}>{@render children()}</span>
</span>
