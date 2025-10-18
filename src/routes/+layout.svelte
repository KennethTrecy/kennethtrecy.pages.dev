<script lang="ts">
import { type Snippet } from "svelte"

import "@/components/general.css"
import Shell from "@/components/shell.svelte"

let { children }: {
	children: Snippet
} = $props()
</script>

<Shell>
	{#snippet main()}
		{@render children()}
	{/snippet}
</Shell>
