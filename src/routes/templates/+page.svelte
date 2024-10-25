<div class="container mx-auto min-h-screen p-4 flex flex-col items-center gap-8">
	<!-- Title -->
	<h1
		class="font-hubot font-hubot-black font-stretch-expanded text-8xl md:text-9xl text-center mt-24"
	>
		TEMPLATES
	</h1>

	<!-- Sarcastic Slogan -->
	<p
		class="font-hubot font-hubot-medium font-stretch-expanded text-xl md:text-2xl text-center opacity-75 max-w-2xl"
	>
		"Why reinvent the wheel when you can steal one?"
	</p>

	<!-- Cards Container -->
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mt-8">
		{#each Array(10) as _, i}
			<div class="card p-6 variant-outline dark:border">
				<header class="card-header text-center">
					<h2 class="font-hubot font-hubot-bold font-stretch-expanded text-2xl">
						Template {i + 1}
					</h2>
				</header>
				<section class="p-4">
					<p class="font-hubot font-stretch-expanded text-center opacity-75">
						"A form that actually works, unlike yours"
					</p>
					<div class="flex flex-col gap-2 mt-4">
						<p class="text-sm font-hubot opacity-75">Features:</p>
						<ul class="list-disc list-inside text-sm opacity-75 space-y-1">
							<li>Proper constraints</li>
							<li>Working calculations</li>
							<li>No syntax errors</li>
						</ul>
					</div>
				</section>
				<footer class="card-footer flex justify-center mt-4">
					<button
						class="btn-xl font-hubot font-hubot-bold font-stretch-expanded variant-filled hover:variant-filled-success"
					>
						YOINK!
					</button>
				</footer>
			</div>
		{/each}
	</div>

	<!-- Small print -->
	<p class="text-sm opacity-50 font-hubot font-stretch-expanded text-center mt-8 mb-8">
		"Copy with pride, blame with dignity"
	</p>
</div>
