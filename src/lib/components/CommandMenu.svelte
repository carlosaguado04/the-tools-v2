<script lang="ts">
	import { Command } from 'cmdk-sv';
	import { goto } from '$app/navigation';
	import { Book, RotateCw, House, Lamp, Wrench, FileText, Sun, Moon } from 'lucide-svelte';

	let open = false;

	// Define commands with keywords
	const commands = {
		main: [
			{
				icon: House,
				label: 'Back to Safety',
				keywords: 'home main index start beginning return',
				action: () => navigateTo('/')
			},
			{
				icon: Wrench,
				label: 'Break Something',
				keywords: 'projects tools form builder converter xlsform odk',
				action: () => navigateTo('/projects')
			},
			{
				icon: FileText,
				label: 'Steal These Forms',
				keywords: 'templates example copy download forms xlsform odk',
				action: () => navigateTo('/templates')
			},
			{
				icon: Lamp,
				label: 'Suggest More Work',
				keywords: 'ideas suggestions features requests vote propose new',
				action: () => navigateTo('/ideas')
			}
		],
		tools: [
			{
				icon: Wrench,
				label: 'Form Builder (Good Luck)',
				keywords: 'builder create new form xlsform odk make build design',
				action: () => navigateTo('/projects/builder')
			},
			{
				icon: RotateCw,
				label: 'Fix Your Excel Mess',
				keywords: 'converter excel xml transform convert validate check errors xlsform odk',
				action: () => navigateTo('/projects/converter')
			}
		],
		help: [
			{
				icon: Book,
				label: 'RTFM',
				keywords: 'docs documentation help manual guide tutorial how to instructions',
				action: () => navigateTo('/docs')
			}
		]
	};

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
			e.preventDefault();
			open = !open;
		}
	}

	function navigateTo(path: string) {
		goto(path);
		open = false;
	}

	// Function to check if command matches search
	function matchesSearch(command: any, search: string): boolean {
		if (!search) return true;
		const searchLower = search.toLowerCase();
		return (
			command.label.toLowerCase().includes(searchLower) ||
			command.keywords.toLowerCase().includes(searchLower)
		);
	}
</script>

<svelte:window on:keydown={handleKeydown} />

{#if open}
	<div class="fixed inset-0 bg-black/50 backdrop-blur-sm" />
{/if}

<Command.Dialog
	bind:open
	class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-xl rounded-xl border border-surface-500/20 bg-black/70 backdrop-blur-md shadow-xl animate-in fade-in-0 zoom-in-95 duration-200 z-50 text-white"
>
	<div class="p-4 border-b border-surface-500/20">
		<Command.Input
			class="w-full bg-transparent font-hubot font-hubot-bold font-stretch-expanded text-lg outline-none placeholder:opacity-50 focus:text-success-500 text-white"
			placeholder="Type something (if you can)..."
		/>
	</div>

	<Command.List class="max-h-[60vh] overflow-y-auto p-2">
		<Command.Empty class="p-6 text-center font-hubot font-stretch-expanded opacity-50">
			"Wow, you broke the search too?"
		</Command.Empty>

		<div class="p-2">
			<p class="font-hubot font-hubot-black font-stretch-expanded text-sm opacity-50 mb-2">
				MAIN STUFF
			</p>
			<Command.Group class="space-y-1">
				{#each commands.main as command}
					<Command.Item
						value={`${command.label} ${command.keywords}`}
						onSelect={command.action}
						class="font-hubot font-stretch-expanded rounded-lg p-3 aria-selected:bg-success-500/20 hover:bg-success-500/10 transition-colors cursor-pointer"
					>
						<div class="flex items-center gap-3">
							<svelte:component this={command.icon} class="h-5 w-5 opacity-70" />
							<span>{command.label}</span>
						</div>
					</Command.Item>
				{/each}
			</Command.Group>
		</div>

		<div class="p-2">
			<p class="font-hubot font-hubot-black font-stretch-expanded text-sm opacity-50 mb-2">
				THE ACTUAL TOOLS
			</p>
			<Command.Group class="space-y-1">
				{#each commands.tools as command}
					<Command.Item
						value={`${command.label} ${command.keywords}`}
						onSelect={command.action}
						class="font-hubot font-stretch-expanded rounded-lg p-3 aria-selected:bg-success-500/20 hover:bg-success-500/10 transition-colors cursor-pointer"
					>
						<div class="flex items-center gap-3">
							<svelte:component this={command.icon} class="h-5 w-5 opacity-70" />
							<span>{command.label}</span>
						</div>
					</Command.Item>
				{/each}
			</Command.Group>
		</div>

		<div class="p-2">
			<p class="font-hubot font-hubot-black font-stretch-expanded text-sm opacity-50 mb-2">
				WHEN ALL ELSE FAILS
			</p>
			<Command.Group class="space-y-1">
				{#each commands.help as command}
					<Command.Item
						value={`${command.label} ${command.keywords}`}
						onSelect={command.action}
						class="font-hubot font-stretch-expanded rounded-lg p-3 aria-selected:bg-success-500/20 hover:bg-success-500/10 transition-colors cursor-pointer"
					>
						<div class="flex items-center gap-3">
							<svelte:component this={command.icon} class="h-5 w-5 opacity-70" />
							<span>{command.label}</span>
						</div>
					</Command.Item>
				{/each}
			</Command.Group>
		</div>

		<div class="p-2">
			<p class="font-hubot font-hubot-black font-stretch-expanded text-sm opacity-50 mb-2">
				PREFERENCES
			</p>
			<Command.Group class="space-y-1">
				<Command.Item
					value="theme mode dark light switch toggle"
					onSelect={() => {
						const mode = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
						document.documentElement.classList.remove('light', 'dark');
						document.documentElement.classList.add(mode);
						localStorage.setItem('theme', mode);
						open = false;
					}}
					class="font-hubot font-stretch-expanded rounded-lg p-3 aria-selected:bg-success-500/20 hover:bg-success-500/10 transition-colors cursor-pointer"
				>
					<div class="flex items-center gap-3">
						{#if document.documentElement.classList.contains('dark')}
							<Sun class="h-5 w-5 opacity-70" />
							<span>Make It Brighter</span>
						{:else}
							<Moon class="h-5 w-5 opacity-70" />
							<span>Make It Darker</span>
						{/if}
					</div>
				</Command.Item>
			</Command.Group>
		</div>
	</Command.List>

	<div class="border-t border-surface-500/20 p-3">
		<div
			class="flex items-center justify-end gap-2 opacity-50 font-hubot font-stretch-expanded text-sm"
		>
			<span>press</span>
			<kbd class="px-2 py-0.5 rounded bg-surface-500/20">esc</kbd>
			<span>to rage quit</span>
		</div>
	</div>
</Command.Dialog>

<style>
	:global(.backdrop-blur-sm) {
		transition: all 0.2s ease-in-out;
	}
</style>
