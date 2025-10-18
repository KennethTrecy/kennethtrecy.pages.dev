<script lang="ts">
import { type Snippet } from "svelte"

import Logo from "@/multimedia/logo.png"

import { LICENSE, LICENSE_URL } from "@/constants/miscellaneous_meta"

import ExternalLink from "@/components/general/links/external.svelte"
import Icon from "@/components/general/icon.svelte"
import Menu from "@/components/shell/menu.svelte"
import SimpleText from "@/components/general/containers/simple_text.svelte"
import ThemeToggler from "@/components/shell/theme_toggler.svelte"
import toggleBySpace from "@/utilities/toggle_by_space"

let {
	main
}: {
	main: Snippet
} = $props()

let isMenuShown = $state(false)

function toggleMenuThroughMouse(_event: MouseEvent): void {
	isMenuShown = !isMenuShown
}

function toggleMenuThroughKeyboard(event: KeyboardEvent): void {
	event.preventDefault()
	event.stopPropagation()
	toggleBySpace(event, () => {
		isMenuShown = !isMenuShown
	})
}
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"/>
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@400,1&family=Noto+Color+Emoji&display=swap"
		as="style"/>
	<style>
		body {
			font-family: "Roboto", "Noto Color Emoji", "Segoe UI", Tahoma, Verdana, Geneva, sans-serif;
		}
	</style>
</svelte:head>
<div itemscope itemtype="https://schema.org/WebSite" class="drawer drawer-mobile lg:drawer-open">
	<input
		type="checkbox"
		class="drawer-toggle"
		aria-labelledby="menu_toggler"
		id="menu_drawer_checkbox"
		bind:checked={isMenuShown}/>
	<div class="drawer-content">
		<header class="navbar border-b-[0.05rem] mb-8 sticky top-0 left-0 z-5 glass lg:hidden">
			<button
				tabindex="0"
				id="menu_toggler"
				role="switch"
				aria-checked={isMenuShown}
				aria-label="Toggle menu drawer"
				onkeyup={toggleMenuThroughKeyboard}
				onclick={toggleMenuThroughMouse}
				class="drawer-button btn bg-transparent border-transparent lg:hidden text-secondary hover:text-primary hover:bg-secondary">
				<Icon name="menu"/>
			</button>
			<nav class="navbar-center">
				<a href="/" class="text-color-inherit flex flex-row items-start">
					<img src={Logo} alt="logo" width="64" height="64" class="flex-none w-16 h-auto"/>
					<p itemprop="name text" class="flex-1 ml-2 my-auto">
						KennethTrecy
					</p>
				</a>
			</nav>
			<div class="flex-1 flex flex-row justify-end items-center">
				<ThemeToggler/>
			</div>
		</header>
		<main
			itemprop="mainEntity"
			itemscope
			itemtype="https://schema.org/WebPage"
			class="flex flex-col justify-center items-center pt-8">
			{@render main()}
		</main>
		<footer class="footer footer-center p-4">
			<div>
				<SimpleText>
					<strong>Disclaimer</strong>: Otherwise noted, the views or interests expressed in this site are my views, and does not necessarily reflect the view or interest of any entity I have a connection to; whether it is an organization, or someone I have worked with. In addition, trademarks (that may be mentioned in different pages) are the property of their respective owners and should not be interpreted as indicating endorsement, affiliation, or sponsorship, unless stated otherwise.
				</SimpleText>
			</div>
		</footer>
		<footer class="footer flex flex-row justify-around items-center p-4">
			<section class="grid-flow-col items-center">
				<img alt="logo" src={Logo} width="64" height="64" class="flex-none w-16 h-auto"/>
				<SimpleText itemprop="copyrightNotice">
					Copyright © <span itemprop="copyrightYear">2025</span>
					<span itemprop="copyrightHolder">Kenneth Trecy Tobias</span>.
				</SimpleText>
			</section>
			<section class="col-span-2 md:col-span-1 place-self-stretch md:place-self-auto text-center">
				<p itemprop="text" class="w-full">
					<ExternalLink
						address="https://github.com/KennethTrecy/kennethtrecy.pages.dev/"
						itemprop="mainEntityOfPage">
						Website's code
					</ExternalLink>
					(not texts such as containing my personal information) are under
					<ExternalLink
						address={LICENSE_URL}
						itemprop="license">{LICENSE} license</ExternalLink>.
				</p>
			</section>
			<div class="col-span-1 place-self-stretch text-center hidden lg:block">
				<ThemeToggler/>
			</div>
		</footer>
	</div>
	<div class="drawer-side border-r-[0.05rem]">
		<button
			class="drawer-overlay lg:hidden"
			tabindex="0"
			role="switch"
			aria-checked={isMenuShown}
			aria-label="Toggle menu drawer"
			onkeyup={toggleMenuThroughKeyboard}
			onclick={toggleMenuThroughMouse}></button>
		<aside class="w-80 glass h-full">
			<a
				itemprop="creator" itemscope itemtype="https://schema.org/Person"
				href="/"
				class="mb-4 border-b p-4 text-color-inherit flex flex-col items-start">
				<img
					itemprop="image"
					src={Logo}
					alt="Logo of Kenneth Trecy"
					class="flex-none w-50 h-auto mb-4"/>
				<p itemprop="name" class="flex-1 my-auto text-2xl">
					KennethTrecy
				</p>
				<p itemprop="description" class="prose">
					An open-source technology enthusiast, back-end experimentalist, and analytic tester.
				</p>
			</a>
			<Menu/>
		</aside>
	</div>
</div>

<style>
	footer {
		background-color: var(--bg-fill);
	}
</style>
