<script lang="ts">
import { type Snippet } from "svelte"
import { type ArticlePageMeta } from "@/types/content_metadata"

import CommonHead from "@/components/general/common_head.svelte"
import PrimaryHeading from "@/components/general/headings/primary.svelte"
import PageDetailCard from "@/components/general/card/page_detail.svelte"
import StructuredArticle from "@/components/general/containers/structured_article.svelte"
import StructuredReference from "@/components/general/containers/structured_reference.svelte"

let { pageMeta, children }: {
	pageMeta: ArticlePageMeta
	children: Snippet
} = $props()

let articleType = $derived(pageMeta.articleType)
let itemtype = $derived(articleType === "technical article"
	? "https://schema.org/TechArticle"
	: articleType === "blog post"
		? "https://schema.org/BlogPosting"
		: "https://schema.org/Article")
</script>

<svelte:head>
	<CommonHead {pageMeta}/>
</svelte:head>

<StructuredArticle {itemtype}>
	{#snippet title()}
		<PrimaryHeading>{pageMeta.title}</PrimaryHeading>
	{/snippet}
	{#snippet content()}
		{@render children()}
		<StructuredReference/>
	{/snippet}
	{#snippet metadata()}
		<PageDetailCard {pageMeta}/>
	{/snippet}
</StructuredArticle>
