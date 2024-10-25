<script lang="ts">
	import { popup } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';

	const popupProjectHover: PopupSettings = {
		event: 'hover',
		target: 'popupProjectHover',
		placement: 'top'
	};

	const popupTemplateHover: PopupSettings = {
		event: 'hover',
		target: 'popupTemplateHover',
		placement: 'top'
	};
</script>

<div class="container mx-auto h-screen flex flex-col items-center justify-center gap-8 p-4">
	<h1 class="font-hubot font-hubot-black font-stretch-expanded text-8xl md:text-9xl text-center">
		THE TOOLS
	</h1>
	<p
		class="font-hubot font-hubot-medium font-stretch-expanded text-xl md:text-2xl text-center opacity-75 max-w-2xl"
	>
		"Because someone got tired of fixing your forms"
	</p>
	<!-- Buttons -->
	<div class="flex flex-col sm:flex-row gap-4 mt-8">
		<div use:popup={popupProjectHover}>
			<a href="/projects">
				<button
					class="btn-xl font-hubot font-hubot-bold font-stretch-expanded variant-filled hover:variant-filled-success"
				>
					Make It Work For Once
				</button>
			</a>
		</div>
		<div class="p-4 border-none" data-popup="popupProjectHover">
			<p class="font-hubot font-hubot-bold font-stretch-expanded">PROJECTS</p>
		</div>

		<div use:popup={popupTemplateHover}>
			<a href="/templates">
				<button
					class="btn-xl font-hubot font-hubot-bold font-stretch-expanded variant-filled hover:variant-filled-success"
				>
					Someone Else's Work
				</button>
			</a>
		</div>
		<div class="p-4 border-none" data-popup="popupTemplateHover">
			<p class="font-hubot font-hubot-bold font-stretch-expanded">TEMPLATES</p>
		</div>
	</div>
</div>
