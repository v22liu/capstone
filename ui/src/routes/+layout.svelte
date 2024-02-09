<script>
	import { page } from '$app/stores';
	// import './tailwind-base.css';
	import '../app.css';
	import {
		Header,
		HeaderNav,
		HeaderNavItem,
		HeaderUtilities,
		HeaderAction,
		HeaderPanelLinks,
		HeaderPanelLink
	} from 'carbon-components-svelte';
	import UserAvatarFilledAlt from 'carbon-icons-svelte/lib/UserAvatarFilledAlt.svelte';
</script>

<div class="app">
	<Header company="CACHA" platformName="Clinic Manager">
		<HeaderNav>
			<HeaderNavItem href="/" isSelected={$page.url.pathname === '/'}>Home</HeaderNavItem>
			<HeaderNavItem
				href="/lookup"
				isSelected={$page.url.pathname.includes('/lookup') ||
					$page.url.pathname.includes('/patient')}>Patient Lookup</HeaderNavItem
			>
			<HeaderNavItem href="/create" isSelected={$page.url.pathname.includes('/create')}
				>New Patient</HeaderNavItem
			>
			<HeaderNavItem href="/catalogue" isSelected={$page.url.pathname.includes('/catalogue')}
				>Drug Catalogue</HeaderNavItem
			>
		</HeaderNav>
		<HeaderUtilities>
			<HeaderAction icon={UserAvatarFilledAlt}>
				<HeaderPanelLinks>
					<HeaderPanelLink href="/login">Sign Out</HeaderPanelLink>
				</HeaderPanelLinks>
			</HeaderAction>
		</HeaderUtilities>
	</Header>

	<main>
		<slot />
	</main>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		margin: 3rem auto 0;
		box-sizing: border-box;
	}
</style>
