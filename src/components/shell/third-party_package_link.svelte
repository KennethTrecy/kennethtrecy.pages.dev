<script lang="ts">
import ExternalLink from "@/components/general/links/external.svelte"

let {
	packageName,
	homeLink,
	licenseName,
	licenseLink
}: {
	packageName: string
	homeLink: string
	licenseName: string
	licenseLink: string
} = $props()
</script>

<ExternalLink address={homeLink} itemprop="name">{packageName}</ExternalLink>
(<ExternalLink address={licenseLink} itemprop="license">{licenseName}</ExternalLink>)
