<script lang="ts">
import { type CompleteCodeFileInfo, type ExecutedCommandSetInfo } from "@/types/container_info"

import ExternalLink from "@/components/general/links/external.svelte"
import ExampleCommand from "@/components/general/containers/example_command.svelte"

let {
	codeInfo,
	commandInfos
}: {
	codeInfo: CompleteCodeFileInfo
	commandInfos: ExecutedCommandSetInfo
} = $props()
</script>

<ExampleCommand {commandInfos}>
	{#snippet caption()}
		Output of
		<ExternalLink
			address={codeInfo.viewURL}
			itemprop={"mainEntityOfPage"}>{codeInfo.path}</ExternalLink>
	{/snippet}
</ExampleCommand>
