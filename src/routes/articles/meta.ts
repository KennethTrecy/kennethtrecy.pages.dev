import articleMetaCollection from "@/constants/article_meta_collection"

import definePageMeta from "@/utilities/definers/define_page_meta"

const publishedDateTimes = articleMetaCollection.map(meta => meta.datePublished.getTime())
const meta = definePageMeta("/articles", {
	"datePublished": new Date(Math.min(...publishedDateTimes)),
	"dateModified": new Date(Math.max(...publishedDateTimes, Date.UTC(2023, 6, 14, 8, 0, 0))),
	"description": "Collection of articles written by Kenneth Trecy",
	"keywords": [ "Kenneth Trecy", "articles", "collection" ],
	"title": "Kenneth Trecy's Article Collection",
	"version": "1.003"
})

export default meta
