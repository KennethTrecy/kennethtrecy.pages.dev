<script lang="ts">
	import { WEBSITE_OWNER } from "@/constants/names"
	import { LICENSE } from "@/constants/miscellaneous_meta"

	export let title: string
	export let description: string
	export let keywords: string[]
	export let pageVersion: string

	export let webAuthor = WEBSITE_OWNER
	export let designer = WEBSITE_OWNER
	export let creator = WEBSITE_OWNER
	export let license = LICENSE
</script>

<title>{title}</title>
<meta name="description" content={description}/>
<meta name="keywords" content={keywords.join(",")}/>
<meta name="page-version" content={pageVersion}/>
<meta name="web_author" content={webAuthor}/>
<meta name="designer" content={designer}/>
<meta name="creator" content={creator}/>
<meta name="license" content={license}/>