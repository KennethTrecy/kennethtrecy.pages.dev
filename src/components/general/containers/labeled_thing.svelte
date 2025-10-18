<script lang="ts">
import { type Snippet } from "svelte"

let { label, children }: {
	label: string
	children: Snippet
} = $props()
</script>

<span itemprop="item" itemscope itemtype="https://schema.org/Thing">
	<strong itemprop="name">{label}</strong>.
	<span itemprop="description">{@render children()}</span>
</span>
