/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable max-lines-per-function */
// @vitest-environment jsdom

import { cleanup, fireEvent, render } from "@testing-library/svelte"
import { describe, expect, it } from "vitest"

import defineHeadingInfo from "@/utilities/definers/define_heading_info"

import Component from "./secondary.svelte"

describe("Secondary heading behavior", () => {
	it("can render prefix as separate", async() => {
		const headingInfo = defineHeadingInfo({
			"prefix": "I. ",
			"text": "hello a"
		})
		const { container } = render(Component, { headingInfo })

		const property = container.querySelector("[itemprop~=headline][itemprop~=name]")
		const spans = container.querySelectorAll("h2 span")

		expect(property).not.toBeNull()
		expect(property?.innerHTML).not.toContain(headingInfo.prefix)
		expect(property?.innerHTML).toContain(headingInfo.text)
		expect(spans).toHaveLength(3)

		cleanup()
	})

	it("can render two spans if there is no prefix", async() => {
		const headingInfo = defineHeadingInfo({
			"text": "hello b"
		})
		const { container } = render(Component, { headingInfo })

		const spans = container.querySelectorAll("h2 span")

		expect(spans).toHaveLength(2)

		cleanup()
	})

	it("can show bookmark if hovered", async() => {
		const headingInfo = defineHeadingInfo({
			"text": "hello c"
		})
		const { container } = render(Component, { headingInfo })

		const heading = container.querySelector("h2") as HTMLHeadingElement
		await fireEvent.mouseOver(heading)

		const bookmark = container.querySelector(".hidden")
		expect(bookmark).toBeNull()

		cleanup()
	})

	it("can hide bookmark if unhovered", async() => {
		const headingInfo = defineHeadingInfo({
			"text": "hello d"
		})
		const { container } = render(Component, { headingInfo })

		const heading = container.querySelector("h2") as HTMLHeadingElement
		await fireEvent.mouseOver(heading)
		await fireEvent.mouseOut(heading)

		const bookmark = container.querySelector(".hidden")
		expect(bookmark).not.toBeNull()

		cleanup()
	})

	it("can render as raw", async() => {
		const headingInfo = defineHeadingInfo({
			"text": "hello_e"
		})
		const variant = "raw"
		const { container } = render(Component, {
			headingInfo,
			variant
		})

		const property = container.querySelector("[itemprop~=headline][itemprop~=name]")
		const spans = container.querySelectorAll("h2 span")

		expect(property).toBeNull()
		expect(spans).toHaveLength(2)

		cleanup()
	})

	it("can render as normal name", async() => {
		const headingInfo = defineHeadingInfo({
			"text": "hello_e"
		})
		const variant = "name"
		const { container } = render(Component, {
			headingInfo,
			variant
		})

		const missingProperty = container.querySelector("[itemprop~=headline][itemprop~=name]")
		const presentProperty = container.querySelector("[itemprop~=name]")

		expect(missingProperty).toBeNull()
		expect(presentProperty).not.toBeNull()

		cleanup()
	})
})
