<script lang="ts">
	import { AppRail, AppRailTile } from '@skeletonlabs/skeleton';
	import { BookOpen, Hammer, RefreshCw } from 'lucide-svelte';
	let currentTile = 0;
</script>

<div class="flex h-[calc(100vh-64px)] mt-16">
	<!-- Fixed App Rail -->
	<div class="fixed left-0 top-16 h-[calc(100vh-64px)]">
		<AppRail>
			<svelte:fragment slot="lead">
				<AppRailTile
					bind:group={currentTile}
					name="tile-0"
					value={0}
					title="intro"
					active="variant-filled-success"
					class="hover:variant-filled-success"
				>
					<div class="flex justify-center items-center w-full">
						<BookOpen class="w-6 h-6" />
					</div>
				</AppRailTile>
			</svelte:fragment>
			<!-- Navigation List -->
			<AppRailTile
				bind:group={currentTile}
				name="tile-1"
				value={1}
				active="variant-filled-success"
				title="builder"
				class="hover:variant-filled-success"
			>
				<div class="flex justify-center items-center w-full">
					<Hammer class="w-6 h-6" />
				</div>
			</AppRailTile>
			<AppRailTile
				bind:group={currentTile}
				name="tile-2"
				value={2}
				title="converter"
				active="variant-filled-success"
				class="hover:variant-filled-success"
			>
				<div class="flex justify-center items-center w-full">
					<RefreshCw class="w-6 h-6" />
				</div>
			</AppRailTile>
		</AppRail>
	</div>

	<!-- Content with left margin to accommodate fixed AppRail -->
	<div class="flex-1 ml-[64px] p-8 overflow-y-auto">
		{#if currentTile === 0}
			<div class="space-y-8 pb-24">
				<h1 class="font-hubot font-hubot-black font-stretch-expanded text-6xl md:text-7xl">
					Documentation
				</h1>
				<p class="font-hubot font-hubot-medium font-stretch-expanded text-xl opacity-75">
					"RTFM: Because asking for help is too mainstream"
				</p>
				<div class="card variant-outline dark:border p-6">
					<h2 class="font-hubot font-hubot-bold font-stretch-expanded text-2xl mb-4">
						Welcome to the Docs
					</h2>
					<p class="font-hubot font-stretch-expanded opacity-75">
						Choose your documentation adventure:
					</p>
					<ul class="list-disc list-inside mt-4 space-y-2 opacity-75">
						<li>Form Builder: For the point-and-click enthusiasts</li>
						<li>Converter: For the Excel-to-ODK believers</li>
					</ul>
					<p class="text-sm mt-6 opacity-50">(Yes, you actually have to read this stuff)</p>
				</div>
			</div>
		{:else if currentTile === 1}
			<div class="space-y-8 pb-24">
				<h1 class="font-hubot font-hubot-black font-stretch-expanded text-6xl md:text-7xl">
					Form Builder
				</h1>
				<p class="font-hubot font-hubot-medium font-stretch-expanded text-xl opacity-75">
					"Building forms without breaking everything"
				</p>
				<div class="space-y-4">
					<div class="card variant-outline dark:border p-6">
						<h2 class="font-hubot font-hubot-bold font-stretch-expanded text-2xl mb-4">
							Getting Started
						</h2>
						<p class="font-hubot font-stretch-expanded opacity-75">
							First, accept that you need help. Then:
						</p>
						<ul class="list-disc list-inside mt-4 space-y-2 opacity-75">
							<li>Click buttons (the right ones preferably)</li>
							<li>Add questions (try to make sense)</li>
							<li>Set constraints (that actually work)</li>
							<li>Test your form (before breaking production)</li>
						</ul>
					</div>
					<div class="card variant-outline dark:border p-6">
						<h2 class="font-hubot font-hubot-bold font-stretch-expanded text-2xl mb-4">Features</h2>
						<ul class="list-disc list-inside space-y-2 opacity-75">
							<li>Drag and drop (try not to drop everything)</li>
							<li>Real-time preview (of your potential mistakes)</li>
							<li>Validation (because you'll need it)</li>
							<li>Export options (pray they work)</li>
						</ul>
					</div>
				</div>
			</div>
		{:else if currentTile === 2}
			<div class="space-y-8 pb-24">
				<h1 class="font-hubot font-hubot-black font-stretch-expanded text-6xl md:text-7xl">
					Converter
				</h1>
				<p class="font-hubot font-hubot-medium font-stretch-expanded text-xl opacity-75">
					"Converting Excel nightmares into ODK dreams"
				</p>
				<div class="space-y-4">
					<div class="card variant-outline dark:border p-6">
						<h2 class="font-hubot font-hubot-bold font-stretch-expanded text-2xl mb-4">
							How It Works
						</h2>
						<p class="font-hubot font-stretch-expanded opacity-75">
							Upload your probably broken Excel and we'll:
						</p>
						<ul class="list-disc list-inside mt-4 space-y-2 opacity-75">
							<li>Validate your spreadsheet (find your mistakes)</li>
							<li>Convert to ODK format (if possible)</li>
							<li>Point out your errors (there will be many)</li>
							<li>Generate working forms (hopefully)</li>
						</ul>
					</div>
					<div class="card variant-outline dark:border p-6">
						<h2 class="font-hubot font-hubot-bold font-stretch-expanded text-2xl mb-4">
							Common Errors
						</h2>
						<ul class="list-disc list-inside space-y-2 opacity-75">
							<li>Missing required fields (obviously)</li>
							<li>Invalid constraints (as usual)</li>
							<li>Broken references (why are you like this)</li>
							<li>Syntax errors (learn to type)</li>
						</ul>
					</div>
				</div>
			</div>
		{/if}
	</div>
</div>
