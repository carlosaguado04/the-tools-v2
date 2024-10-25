<script lang="ts">
	import '../app.postcss';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import CommandMenu from '$lib/components/CommandMenu.svelte';
	import { initializeStores, Toast, Modal } from '@skeletonlabs/skeleton';

	initializeStores();
	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<Navbar />
<slot />
<Footer />
<Toast position="br" />
<Modal />
<CommandMenu />
