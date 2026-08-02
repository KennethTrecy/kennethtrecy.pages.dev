<script lang="ts">
import { onMount } from "svelte"
import { themeChange } from "theme-change"
import { DARK_MODE, LIGHT_MODE, mustBeInDarkMode, themeName } from "@/components/general/theme"

import Icon from "@/components/general/icon.svelte"
import toggleBySpace from "@/utilities/toggle_by_space"

$effect(() => {
	const rawThemeName = $themeName
	if (typeof window !== "undefined") {
		document.documentElement.setAttribute(
			"data-theme",
			rawThemeName
		)
	}
});
let modeIcon = $derived($mustBeInDarkMode ? "dark_mode" : "light_mode")
let unusedTheme = $derived($mustBeInDarkMode ? LIGHT_MODE : DARK_MODE)

onMount(() => {
	themeChange(false)
	setTimeout(() => {
		$mustBeInDarkMode = document.documentElement
			.dataset
			.theme === DARK_MODE
	}, 1000)
})

function toggleThemeThoughMouse(_event: MouseEvent): void {
	$mustBeInDarkMode = !$mustBeInDarkMode
}

function toggleThemeThroughKeyboard(event: KeyboardEvent): void {
	event.preventDefault()
	event.stopPropagation()
	toggleBySpace(event, () => {
		$mustBeInDarkMode = !$mustBeInDarkMode
	})
}
</script>

<button
	tabindex="0"
	role="switch"
	aria-checked={$mustBeInDarkMode}
	data-set-theme={unusedTheme}
	data-act-class={LIGHT_MODE}
	aria-label="Toggle theme"
	onkeyup={toggleThemeThroughKeyboard}
	onclick={toggleThemeThoughMouse}
	class="btn bg-transparent border-transparent cursor-pointer hover:primary-content hover:bg-secondary-content link inline-flex flex-row flex-nowrap items-center no-underline font-normal">
	<Icon name={modeIcon}/>
</button>

<style lang="postcss">
.btn {
	padding-inline: calc(0.25rem * 3);
}
</style>
