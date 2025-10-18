import { FIRST_PUBLICATION_DATE } from "@/constants/miscellaneous_meta"

import definePageMeta from "@/utilities/definers/define_page_meta"

const meta = definePageMeta("/projects", {
	"datePublished": FIRST_PUBLICATION_DATE,
	"dateModified": new Date(Date.UTC(2025, 9, 18, 6, 30)),
	// eslint-disable-next-line max-len
	"description": "Kenneth Trecy has a decade of experience in programming websites. Here is an overview of different projects he was involved.",
	"keywords": [ "Kenneth Trecy", "involved", "personal", "projects" ],
	"title": "List of Involved Projects",
	"version": "1.003"
})

export default meta
