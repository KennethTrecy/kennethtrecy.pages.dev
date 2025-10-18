<script lang="ts">
import { type Snippet } from "svelte"

let { children }: {
	children: Snippet
} = $props()
</script>

<div itemprop="articleBody">
	{@render children()}
</div>
