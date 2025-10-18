<script lang="ts">
import { derived } from "svelte/store"
import { page } from "$app/state"

import CommonHead from "@/components/general/common_head.svelte"
import definePageMeta from "@/utilities/definers/define_page_meta"
import PrimaryHeading from "@/components/general/headings/primary.svelte"
import StructuredArticle from "@/components/general/containers/structured_article.svelte"

let title = $state("")
let message = $state("")

const DEFAULT_MESSAGE = "Please contact the Kenneth Trecy if this happens."
const errorInfos = [
	{
		"status": 404,
		"message": "The page for this URL does not exist or has been archived."
	}, {
		"status": 500,
		"message": "Server error happened. Please contact Kenneth Trecy if this happens."
	}
]

$effect(() => {
	if (page.status >= 400 && page.status < 500) {
		title = "Client Error"
	} else if (page.status >= 500 && page.status < 600) {
		title = "Server Error"
	} else {
		title = "Unknown Error"
	}

	message = DEFAULT_MESSAGE
	for (const errorInfo of errorInfos) {
		if (errorInfo.status === page.status) {
			message = errorInfo.message
		}
	}
})

const pageMeta = $derived(definePageMeta(page.url.pathname, {
	"title": title,
	"description": "Encountered an error while visiting a page.",
	"keywords": [ "error" ],
	"version": "1.0",
	"datePublished": new Date()
}))
</script>

<svelte:head>
	<CommonHead pageMeta={pageMeta}/>
	<meta name="robots" content="noindex"/>
</svelte:head>

<StructuredArticle>
	{#snippet title()}
		<PrimaryHeading >{page.status} | {page.error?.message}</PrimaryHeading>
	{/snippet}
	{#snippet content()}
		<p >
			{message}
		</p>
	{/snippet}
</StructuredArticle>
