<script lang="ts">
import { authorTypes, externalTypes } from "@/components/general/links/constants"

import Link from "@/components/general/links/base.svelte"
import BrandIcon from "@/components/general/brand_icon.svelte"

let {
	address,
	icon,
	platformName,
	username,
	usernameProperty
}: {
	address: string
	icon: string
	platformName: string
	username: string
	usernameProperty: string
} = $props()

const relationships = [ ...externalTypes, ...authorTypes ]
</script>

<Link
	title={platformName}
	{address}
	relationship={relationships}
	class={[ "inline-flex", "flex-row", "flex-nowrap", "items-center" ]}>
	<BrandIcon {icon} alternateName={platformName}/>
	<span itemprop={usernameProperty} class="ml-4">{username}</span>
</Link>
