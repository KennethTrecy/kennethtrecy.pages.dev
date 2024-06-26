<script lang="ts">
	import { type CompleteCodeFileInfo } from "@/types/container_info"

	import ExternalLink from "@/components/general/links/external.svelte"

	export let codeInfo: CompleteCodeFileInfo
	export let itemprop = "workExample"
	export let beginLineIndex = 0
	export let endLineIndex = Infinity

	$: rawCodeLines = (() => {
		try {
			return atob(codeInfo.content).split("\n")
		} catch (error) {
			return []
		}
	})()
	$: targetBeginLineIndex = Math.max(0, beginLineIndex)
	$: targetEndLineIndex = Math.min(rawCodeLines.length, endLineIndex)
	$: codeLines = rawCodeLines.slice(targetBeginLineIndex, targetEndLineIndex)
	$: repoURL = `https://github.com/${codeInfo.owner}/${codeInfo.repo}`
</script>

<div class="code_container" {itemprop} itemscope itemtype="https://schema.org/SoftwareSourceCode">
	<div class="mockup-code not-prose text-sm">
		{#each codeLines as line, i}
			<pre data-prefix={targetBeginLineIndex+i+1}><code>{line}</code></pre>
		{/each}
	</div>
	<p itemprop="text" class="text-center text-sm">
		Content of
		<ExternalLink
			address={codeInfo.viewURL}
			itemprop="mainEntityOfPage">{codeInfo.path}</ExternalLink> in
		{codeInfo.branch}
		at <ExternalLink address={repoURL} itemprop="codeRepository">{
			codeInfo.owner
		}<wbr/>/{
			codeInfo.repo
		}</ExternalLink>
	</p>
	<slot {codeInfo}></slot>
</div>

<style lang="postcss">
	.code_container {
		/**
		 * 3rem is the padding of the general `.container`.
		 */
		max-width: calc(100vw - 1rem * 2);
	}

	@screen lg {
		.code_container {
			@apply max-w-[100vw]
		}
	}
</style>
