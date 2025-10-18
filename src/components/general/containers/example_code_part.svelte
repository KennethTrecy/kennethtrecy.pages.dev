<script lang="ts">
let {
	filename,
	rawCodeLines,
	itemprop = "workExample",
	beginLineIndex = 0,
	endLineIndex = Infinity
}: {
	filename: string
	rawCodeLines: string[]
	itemprop?: string
	beginLineIndex?: number
	endLineIndex?: number
} = $props()

let targetBeginLineIndex = $derived(Math.max(0, beginLineIndex))
let targetEndLineIndex = $derived(Math.min(rawCodeLines.length, endLineIndex))
let codeLines = $derived(rawCodeLines.slice(targetBeginLineIndex, targetEndLineIndex))
</script>

<div class="code_container lg:max-w-[100vw]" {itemprop} itemscope itemtype="https://schema.org/SoftwareSourceCode">
	<div class="mockup-code not-prose text-sm">
		{#each codeLines as line, i}
			<pre data-prefix={targetBeginLineIndex+i+1}><code>{line}</code></pre>
		{/each}
	</div>
	<p itemprop="text" class="text-center text-sm">
		Sample content of <b>{filename}</b>
	</p>
</div>

<style lang="postcss">
.code_container {
	/**
		* 3rem is the padding of the general `.container`.
		*/
	max-width: calc(100vw - 1rem * 2);
}
</style>
