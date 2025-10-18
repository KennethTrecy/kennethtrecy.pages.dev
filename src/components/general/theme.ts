import rgbToHex from "rgb-hex"
import { derived, writable } from "svelte/store"

export const DARK_MODE = "night"
export const LIGHT_MODE = "corporate"

export const mustBeInDarkMode = writable<boolean>(true)
export const themeName = derived(
	mustBeInDarkMode,
	isInDarkMode => {
		if (isInDarkMode) return DARK_MODE
		return LIGHT_MODE
	}
)
export const textColor = derived(
	themeName,
	(name, set) => {
		const quickDuration = 25
		setTimeout(() => {
			if (typeof window !== "undefined") {
				set(rgbToHex(name === DARK_MODE ? "rgb(255,255,255)" : "rgb(0,0,0)"))
			}
		}, quickDuration)
	}
)
