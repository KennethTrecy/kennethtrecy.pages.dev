<script lang="ts">
import { type PageMeta } from "@/types/content_metadata"

import { authorTypes, internalTypes } from "@/components/general/links/constants"
import {
	principlesPath,
	draftStatusURL,
	publishedStatusURL
} from "@/constants/schema_collection"

import BaseLink from "@/components/general/links/base.svelte"
import ExternalLink from "@/components/general/links/external.svelte"

let { pageMeta }: {
	pageMeta: PageMeta
} = $props()

const dateTimeFormatOptions: Partial<Intl.DateTimeFormatOptions> = {
	"year": "numeric",
	"month": "long",
	"day": "numeric",
	"hour": "numeric",
	"minute": "numeric",
	"timeZoneName": "short",
	"timeZone": "UTC"
}

let dateTimePublished = $derived(pageMeta.datePublished.toISOString())
let humanReadableDatePublished = $derived(pageMeta.datePublished.toLocaleString(
	"en",
	dateTimeFormatOptions
))
let dateTimeModified = $derived(pageMeta.dateModified.toISOString())
let humanReadableDateModified = $derived(pageMeta.dateModified.toLocaleString("en", dateTimeFormatOptions))
let hasModified = $derived(dateTimePublished !== dateTimeModified)
let isDraft = $derived(Number(pageMeta.version) < 1)
let publishStatus = $derived(isDraft ? "draft" : "published")
let publishStatusURL = $derived(isDraft ? draftStatusURL : publishedStatusURL)

const repositoryURL = "https://github.com/KennethTrecy/kennethtrecy.pages.dev"
const branch = "master"
let targetFilePath = $derived(`src/routes${(pageMeta.path === "/" ? "" : pageMeta.path)}/+page.svelte`)
let editLink = $derived(`${repositoryURL}/edit/${branch}/${targetFilePath}`)
let issueLink = $derived(`${repositoryURL}/issues/new?template=page_concern.md`)
let viewLink = $derived(`${repositoryURL}/blob/${branch}/${targetFilePath}`)
</script>

<div class="not-prose card bg-base-200">
	<section itemprop="description" class="card-body">
		<h2 class="title">Page details</h2>
		<address itemprop="author" itemscope itemtype="https://schema.org/Person">
			This page was authored by
			<BaseLink
				address="/about_myself"
				relationship={[ ...internalTypes, ...authorTypes ]}
				itemprop="mainEntityOfPage">
				<span itemprop="name">
					<span itemprop="givenName">Kenneth Trecy</span>
					<span itemprop="familyName">Tobias</span></span></BaseLink>.
		</address>
		<p>
			<em>
				Published last
				<time
					itemprop={ hasModified ? "datePublished": "datePublished dateModified" }
					datetime={dateTimePublished}>{humanReadableDatePublished}</time>.
				{#if hasModified}
					Then, it was modified last
					<time
						itemprop="dateModified"
						datetime={dateTimeModified}>{humanReadableDateModified}</time>.
				{:else}
					It has not been modified since then.
				{/if}
				Version of the <span
					itemprop="creativeWorkStatus"
					itemscope
					itemtype="https://schema.org/DefinedTerm">
					<BaseLink
						address={publishStatusURL}
						relationship={internalTypes}
						itemprop="mainEntityOfPage">
						{publishStatus}</BaseLink></span> page is
				"<span itemprop="version">{pageMeta.version}</span>".
				See the <BaseLink
					address={principlesPath}
					relationship={internalTypes}
					itemprop="publishingPrinciples">
					publishing principles
				</BaseLink> for technical info about the details.
			</em>
		</p>
		<p>
			The source of the page can be <ExternalLink address={viewLink}>viewed</ExternalLink> or <ExternalLink address={editLink}>modified</ExternalLink> on GitHub. Should there be a concern or problem in the page, please report by making an <ExternalLink address={issueLink}>issue</ExternalLink> or <BaseLink
					address="/about_myself#contact_details"
					relationship={[ ...internalTypes ]}>contact the website administrator</BaseLink>.
		</p>
	</section>
</div>
