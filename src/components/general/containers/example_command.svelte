<script lang="ts">
import { type Snippet } from "svelte"
import { type ExecutedCommandSetInfo } from "@/types/container_info"

import SimpleText from "@/components/general/containers/simple_text.svelte"

let {
	commandInfos,
	caption
}: {
	commandInfos: ExecutedCommandSetInfo
	caption?: Snippet
} = $props()
</script>

<div itemprop="hasPart" itemscope itemtype="https://schema.org/CreativeWork">
	<SimpleText itemprop="about">
		{commandInfos.description}
	</SimpleText>
	<div class="mockup-code not-prose text-sm">
		{#each commandInfos.commands as commandInfo}
			<pre data-prefix={"$"}><code>{commandInfo.command}</code></pre>
			{#each commandInfo.output as output}
				<pre><code>{output.text}</code></pre>
			{/each}
		{/each}
	</div>
	{#if caption}
		<p itemprop="text" class="text-center text-sm">
			{@render caption()}
		</p>
	{/if}
</div>
