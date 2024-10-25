<script lang="ts">
	import { ProgressBar } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';

	interface Idea {
		id: number;
		title: string;
		description: string;
		votes: number;
		maxVotes: number;
	}

	let newIdeaTitle = '';
	let newIdeaDescription = '';
	let ideas: Idea[] = [];

	// Load ideas from localStorage on mount
	onMount(() => {
		const savedIdeas = localStorage.getItem('projectIdeas');
		if (savedIdeas) {
			ideas = JSON.parse(savedIdeas);
		} else {
			// Sample ideas for testing
			ideas = [
				{
					id: 1,
					title: 'PDF Form Builder',
					description: 'Because apparently ODK forms are not painful enough',
					votes: 15,
					maxVotes: 50
				},
				{
					id: 2,
					title: 'Form Template Generator',
					description: 'For those too lazy to even copy-paste',
					votes: 25,
					maxVotes: 50
				}
			];
			localStorage.setItem('projectIdeas', JSON.stringify(ideas));
		}
	});

	function addIdea() {
		if (newIdeaTitle.trim() && newIdeaDescription.trim()) {
			const newIdea: Idea = {
				id: Date.now(),
				title: newIdeaTitle,
				description: newIdeaDescription,
				votes: 0,
				maxVotes: 50
			};
			ideas = [...ideas, newIdea];
			localStorage.setItem('projectIdeas', JSON.stringify(ideas));
			newIdeaTitle = '';
			newIdeaDescription = '';
		}
	}

	function vote(id: number) {
		ideas = ideas.map((idea) => {
			if (idea.id === id && idea.votes < idea.maxVotes) {
				return { ...idea, votes: idea.votes + 1 };
			}
			return idea;
		});
		localStorage.setItem('projectIdeas', JSON.stringify(ideas));
	}
</script>

<div class="container mx-auto min-h-screen p-4 flex flex-col items-center gap-8">
	<!-- Title -->
	<h1
		class="font-hubot font-hubot-black font-stretch-expanded text-8xl md:text-9xl text-center mt-24"
	>
		IDEAS
	</h1>

	<!-- Sarcastic Slogan -->
	<p
		class="font-hubot font-hubot-medium font-stretch-expanded text-xl md:text-2xl text-center opacity-75 max-w-2xl"
	>
		"Submit your ideas, we'll ignore them anyway"
	</p>

	<!-- Add Idea Form -->
	<div class="card p-6 variant-outline dark:border w-full max-w-2xl">
		<header class="card-header text-center">
			<h2 class="font-hubot font-hubot-bold font-stretch-expanded text-2xl">
				Add Your Brilliant Idea
			</h2>
		</header>
		<section class="p-4 space-y-4">
			<input
				type="text"
				class="input"
				placeholder="Your groundbreaking idea title"
				bind:value={newIdeaTitle}
			/>
			<textarea
				class="textarea"
				rows="3"
				placeholder="Explain your idea (try to make sense)"
				bind:value={newIdeaDescription}
			/>
			<button
				class="btn-xl font-hubot font-hubot-bold font-stretch-expanded variant-filled hover:variant-filled-success w-full"
				on:click={addIdea}
			>
				SUBMIT THIS MASTERPIECE
			</button>
		</section>
	</div>

	<!-- Ideas Container -->
	<div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mt-8">
		{#each ideas as idea}
			<div class="card p-6 variant-outline dark:border">
				<header class="card-header">
					<h3 class="font-hubot font-hubot-bold font-stretch-expanded text-xl">{idea.title}</h3>
				</header>
				<section class="p-4">
					<p class="font-hubot font-stretch-expanded opacity-75 mb-4">{idea.description}</p>
					<div class="space-y-2">
						<ProgressBar
							value={idea.votes}
							max={idea.maxVotes}
							meter="bg-success-400"
							class="font-hubot font-stretch-expanded"
						/>
						<div class="flex justify-between text-sm opacity-75">
							<span>{idea.votes} votes</span>
							<span>{idea.maxVotes - idea.votes} needed</span>
						</div>
					</div>
				</section>
				<footer class="card-footer flex justify-center mt-4">
					<button
						class="btn-xl font-hubot font-hubot-bold font-stretch-expanded variant-filled hover:variant-filled-success"
						on:click={() => vote(idea.id)}
					>
						VOTE FOR THIS MESS
					</button>
				</footer>
			</div>
		{/each}
	</div>

	<!-- Small print -->
	<p class="text-sm opacity-50 font-hubot font-stretch-expanded text-center mt-8 mb-8">
		"Democracy at its finest (or worst)"
	</p>
</div>
