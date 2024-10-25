<script lang="ts">
	import { AppBar, LightSwitch, TabGroup, TabAnchor } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	import { popup } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';

	const popupHover: PopupSettings = {
		event: 'hover',
		target: 'popupHover',
		placement: 'right-end'
	};
</script>

<nav class="fixed top-0 w-full z-30">
	<AppBar
		gridColumns="grid-cols-3"
		slotDefault="place-self-center"
		slotTrail="place-content-end"
		background="transparent"
		class="backdrop-blur-3xl"
	>
		<svelte:fragment slot="lead">
			<div>
				<a href="/" use:popup={popupHover}>
					<h1
						class="font-hubot font-hubot-black font-stretch-expanded text-2xl hover:text-success-500 transition-colors"
						class:text-success-500={$page.url.pathname === '/'}
					>
						THE TOOLS
					</h1>
				</a>
			</div>
			<div class="p-4 bg-transparent border-none" data-popup="popupHover">
				<p class="font-hubot font-hubot-bold font-stretch-expanded">HOME</p>
			</div>
		</svelte:fragment>
		<TabGroup
			border="none"
			hover="none"
			class="font-hubot font-hubot-bold font-stretch-expanded"
			active="border-b-2 border-success-500-400-token "
		>
			<TabAnchor href="/projects" selected={$page.url.pathname === '/projects'}>PROJECTS</TabAnchor>
			<TabAnchor href="/templates" selected={$page.url.pathname === '/templates'}
				>TEMPLATES</TabAnchor
			>
			<TabAnchor href="/ideas" selected={$page.url.pathname === '/ideas'}>IDEAS</TabAnchor>
		</TabGroup>
		<svelte:fragment slot="trail"><LightSwitch /></svelte:fragment>
	</AppBar>
</nav>
