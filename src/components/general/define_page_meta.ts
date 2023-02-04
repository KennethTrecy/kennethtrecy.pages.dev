import type { PageMeta } from "@/types/head"

import { LICENSE, LICENSE_URL } from "@/constants/miscellaneous_meta"
import {
	WEBSITE_OWNER_GIVEN_NAME,
	WEBSITE_OWNER_FAMILY_NAME,
	WEBSITE_OWNER_LINK
} from "@/constants/names"

export default function(path: string, {
	version = "0.1",
	datePublished = new Date(),
	dateModified = datePublished,
	title = "Draft Page",
	description = "This is a draft page.",
	keywords = [ "draft" ],
	authors = [
		{
			"givenName": WEBSITE_OWNER_GIVEN_NAME,
			"familyName": WEBSITE_OWNER_FAMILY_NAME,
			"link": WEBSITE_OWNER_LINK
		}
	],
	encoder = authors[0],
	designers = [ encoder ],
	creator = encoder,
	license = {
		"name": LICENSE,
		"link": LICENSE_URL
	}
}: Partial<Exclude<PageMeta, "path">> = {}): PageMeta {
	return {
		path,
		version,
		datePublished,
		dateModified,
		title,
		description,
		keywords,
		authors,
		encoder,
		designers,
		creator,
		license
	}
}
