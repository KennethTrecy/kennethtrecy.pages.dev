<script lang="ts">
import { type Snippet } from "svelte"
import { type CompleteCodeFileInfo } from "@/types/container_info"

import ExternalLink from "@/components/general/links/external.svelte"

let {
	codeInfo,
	itemprop = "workExample",
	beginLineIndex = 0,
	endLineIndex = Infinity,
	children
}: {
	codeInfo: CompleteCodeFileInfo
	itemprop?: string
	beginLineIndex?: number
	endLineIndex?: number
	children?: Snippet<[ { codeInfo: CompleteCodeFileInfo } ]>
} = $props()

let rawCodeLines = $derived((() => {
	try {
		return atob(codeInfo.content).split("\n")
	} catch (error) {
		return []
	}
})())
let targetBeginLineIndex = $derived(Math.max(0, beginLineIndex))
let targetEndLineIndex = $derived(Math.min(rawCodeLines.length, endLineIndex))
let codeLines = $derived(rawCodeLines.slice(targetBeginLineIndex, targetEndLineIndex))
let repoURL = $derived(`https://github.com/${codeInfo.owner}/${codeInfo.repo}`)
let repoNameFragments = $derived(codeInfo.repo.split("_"))
</script>

<div class="code_container lg:max-w-[100vw]" {itemprop} itemscope itemtype="https://schema.org/SoftwareSourceCode">
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
		}<wbr/>/{#each repoNameFragments as fragment, i}{#if i > 0}_{/if}{fragment}<wbr/>{/each}</ExternalLink>
	</p>
	{@render children?.({ codeInfo })}
</div>

<style lang="postcss">
.code_container {
	/**
		* 3rem is the padding of the general `.container`.
		*/
	max-width: calc(100vw - 1rem * 2);
}
</style>
