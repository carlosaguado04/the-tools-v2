<script lang="ts">
	import { popup } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';

	const popupDocHover: PopupSettings = {
		event: 'hover',
		target: 'popupDocHover',
		placement: 'top'
	};
</script>

<div class="container mx-auto min-h-screen p-4 flex flex-col items-center gap-8">
	<!-- Title -->
	<h1
		class="font-hubot font-hubot-black font-stretch-expanded text-8xl md:text-9xl text-center mt-24"
	>
		PROJECTS
	</h1>

	<!-- Sarcastic Slogan -->
	<p
		class="font-hubot font-hubot-medium font-stretch-expanded text-xl md:text-2xl text-center opacity-75 max-w-2xl"
	>
		"Making forms slightly less painful"
	</p>

	<!-- Cards Container -->
	<div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mt-8">
		<!-- Form Builder Card -->
		<a
			href="/projects/builder"
			class="card-hover p-6 variant-outline dark:border hover:border-success-400"
		>
			<header class="card-header text-center">
				<h2 class="font-hubot font-hubot-bold font-stretch-expanded text-2xl">Form Builder</h2>
			</header>
			<section class="p-4">
				<p class="font-hubot font-stretch-expanded text-center opacity-75">
					"Making forms idiot-proof (challenge accepted)"
				</p>
			</section>
			<footer class="card-footer flex justify-center">
				<p class="text-sm font-hubot font-stretch-expanded opacity-50">
					(Try not to break this one)
				</p>
			</footer>
		</a>

		<!-- Converter Card -->
		<a
			href="/converter"
			class="card-hover p-6 variant-outline dark:border hover:border-success-400"
		>
			<header class="card-header text-center">
				<h2 class="font-hubot font-hubot-bold font-stretch-expanded text-2xl">Converter</h2>
			</header>
			<section class="p-4">
				<p class="font-hubot font-stretch-expanded text-center opacity-75">
					"Your Excel sucks, we'll tell you why"
				</p>
			</section>
			<footer class="card-footer flex justify-center">
				<p class="text-sm font-hubot font-stretch-expanded opacity-50">
					(Good luck with validation)
				</p>
			</footer>
		</a>
	</div>

	<!-- Documentation Button -->
	<div class="mt-8" use:popup={popupDocHover}>
		<a href="/docs">
			<button
				class="btn-xl font-hubot font-hubot-bold font-stretch-expanded variant-filled hover:variant-filled-success"
			>
				RTFM
			</button>
		</a>
	</div>
	<div class="p-4 border-none" data-popup="popupDocHover">
		<p class="font-hubot font-hubot-bold font-stretch-expanded">READ THE DOCS</p>
	</div>

	<!-- Small print -->
	<p class="text-sm opacity-50 font-hubot font-stretch-expanded text-center mt-8">
		"If you break it, it's your problem now"
	</p>
</div>

<style lang="postcss">
	.gradient-button {
		background-size: 200% auto;
		transition: all 0.5s ease;
	}

	.gradient-button:hover {
		background-image: linear-gradient(to right, #ff758c, #ff7eb3, #ff8c71, #ff758c);
		background-position: right center;
	}
</style>
