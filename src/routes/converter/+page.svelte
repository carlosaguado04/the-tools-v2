<script lang="ts">
	import { getToastStore } from '@skeletonlabs/skeleton';
	import { ProgressBar } from '@skeletonlabs/skeleton';
	import { Upload, File } from 'lucide-svelte';
	import { onDestroy } from 'svelte';

	const toastStore = getToastStore();

	let isLoading = false;
	let fileName = '';
	let progress = 0;
	let convertedXml: string | null = null;
	let convertedFileName = '';
	let fileInput: HTMLInputElement;

	// Progress timer
	let progressTimer: number;

	interface ImageValidationError {
		row: number;
		name: string;
		message: string;
	}

	$: if (isLoading) {
		progressTimer = window.setInterval(() => {
			// Much slower progression with smaller increments
			if (progress < 20) {
				progress += 0.2; // Initial processing
			} else if (progress < 40) {
				progress += 0.15; // Reading file
			} else if (progress < 60) {
				progress += 0.1; // Converting
			} else if (progress < 75) {
				progress += 0.05; // Validating
			} else if (progress < 85) {
				progress += 0.02; // Final checks
			} else if (progress < 95) {
				progress += 0.01; // Almost done
			}
			// Stop at 95% and wait for actual response
			if (progress >= 95) {
				progress = 95;
				window.clearInterval(progressTimer);
			}
		}, 200); // Increased interval time
	} else {
		progress = 0;
	}

	onDestroy(() => {
		if (progressTimer) window.clearInterval(progressTimer);
	});

	function formatErrorMessage(
		error: string,
		details: string[] | ImageValidationError[] | string
	): string {
		if (error === 'Special characters found') {
			return `Wow. "Special characters found:" Groundbreaking. 🙄 Nobel Prize material right there.\n${(
				details as string[]
			).join('\n')}`;
		} else if (error === 'Image validation errors') {
			return `"Image Validation Errors:" Oh joy, another digital masterpiece fails to meet our lofty standards. 🙄\n${(
				details as ImageValidationError[]
			)
				.map((detail) => `Row ${detail.row}: ${detail.name} - ${detail.message}`)
				.join('\n')}`;
		} else {
			return `${error}: ${details}`;
		}
	}

	function downloadFile() {
		if (convertedXml && convertedFileName) {
			const blob = new Blob([convertedXml], { type: 'text/xml' });
			const url = URL.createObjectURL(blob);
			const a = document.createElement('a');
			a.href = url;
			a.download = convertedFileName;
			document.body.appendChild(a);
			a.click();
			document.body.removeChild(a);
			URL.revokeObjectURL(url);
		}
	}

	function clearUploadedFile() {
		fileName = '';
		if (fileInput) {
			fileInput.value = '';
		}
	}

	async function convertFile() {
		if (!fileInput?.files?.length) {
			toastStore.trigger({
				message: 'Please select a file to convert.',
				background: 'variant-filled-error'
			});
			return;
		}

		const file = fileInput.files[0];
		const formData = new FormData();
		formData.append('file', file);

		isLoading = true;
		progress = 0;

		try {
			const response = await fetch(
				'https://xlsx-converter-server-4466810c1786.herokuapp.com/api/convert',
				{
					method: 'POST',
					body: formData
				}
			);

			let result;
			try {
				result = await response.json();
			} catch (jsonError) {
				console.error('JSON parsing error:', jsonError);
				throw new Error(
					`Failed to parse server response: ${
						(jsonError as Error).message
					}. Raw response: ${await response.text()}`
				);
			}

			console.log('Server response:', result);

			if (!response.ok) {
				if (result && result.error && result.details) {
					throw new Error(formatErrorMessage(result.error, result.details));
				} else {
					throw new Error(`Server error: ${response.status} ${response.statusText}`);
				}
			}

			if (!result || !result.xml) {
				throw new Error('Server response is missing expected data');
			}

			if (result.warnings) {
				toastStore.trigger({
					message: result.warnings,
					background: 'variant-filled-warning',
					autohide: false
				});
			}

			convertedXml = result.xml;
			const newFileName = file.name.split('.')[0] + '.xml';
			convertedFileName = newFileName;

			// Set progress to 100% when conversion is complete
			window.clearInterval(progressTimer);
			progress = 100;

			toastStore.trigger({
				message: `Congrats! ${newFileName} converted. Want a medal for your download? 🏅`,
				background: 'variant-filled-success'
			});
		} catch (error) {
			console.error('Error details:', error);
			toastStore.trigger({
				message: (error as Error).message,
				background: 'variant-filled-error',
				autohide: false
			});
			convertedXml = null;
			convertedFileName = '';

			// Reset progress on error
			window.clearInterval(progressTimer);
			progress = 0;
		} finally {
			isLoading = false;
			clearUploadedFile();
		}
	}

	function onFileSelect(event: Event) {
		const input = event.target as HTMLInputElement;
		if (input.files && input.files.length > 0) {
			const file = input.files[0];
			fileName = file.name;
		}
	}

	function handleDrop(event: DragEvent) {
		event.preventDefault();
		const files = event.dataTransfer?.files;
		if (files && files.length > 0) {
			const file = files[0];
			if (file.name.endsWith('.xlsx') || file.name.endsWith('.xls')) {
				fileName = file.name;
				const dataTransfer = new DataTransfer();
				dataTransfer.items.add(file);
				if (fileInput) fileInput.files = dataTransfer.files;
			} else {
				toastStore.trigger({
					message: 'Please upload an Excel file (.xlsx or .xls)',
					background: 'variant-filled-error'
				});
			}
		}
	}

	function handleDragOver(event: DragEvent) {
		event.preventDefault();
	}
</script>

<div class="container mx-auto p-4 min-h-screen flex flex-col items-center justify-center">
	<div class="w-full max-w-4xl flex flex-col items-center gap-8">
		<h1 class="font-hubot font-hubot-black font-stretch-expanded text-6xl md:text-9xl text-center">
			Converter
		</h1>

		<p
			class="font-hubot font-hubot-medium font-stretch-expanded text-xl md:text-2xl text-center opacity-75 max-w-2xl"
		>
			"Your Excel + Our Converter = Still questionable, but workable"
		</p>

		<div
			class="card-hover variant-outline dark:border hover:border-success-400 w-full max-w-2xl h-full max-h-xl"
		>
			<div class="p-4">
				<input
					type="file"
					accept=".xls,.xlsx"
					bind:this={fileInput}
					on:change={onFileSelect}
					class="hidden"
				/>
				<div
					class="border-2 border-dashed border-surface-500/30 dark:border-white dark:hover:border-success-300 rounded-lg p-6 text-center cursor-pointer"
					on:click={() => fileInput.click()}
					on:keydown={(e) => e.key === 'Enter' && fileInput.click()}
					on:drop={handleDrop}
					on:dragover={handleDragOver}
					role="button"
					tabindex="0"
				>
					{#if fileName}
						<div class="flex items-center justify-center">
							<File class="w-8 h-8 opacity-70 mr-2" />
							<span class="font-hubot font-stretch-expanded">{fileName}</span>
						</div>
					{:else}
						<div class="text-center">
							<Upload class="w-12 h-12 mx-auto mb-2 opacity-50" />
							<p class="text-sm opacity-70 font-hubot font-stretch-expanded">
								Drag and drop your Excel mess here
							</p>
							<p class="text-xs opacity-50 font-hubot font-stretch-expanded mt-1">
								(or click to upload if you're boring)
							</p>
						</div>
					{/if}
				</div>
			</div>
		</div>

		<div class="flex justify-center space-x-4">
			<button
				class="btn-lg variant-filled font-hubot font-stretch-expanded hover:variant-filled-success"
				on:click={convertFile}
				disabled={isLoading || !fileName}
			>
				{isLoading ? 'Converting (and judging)...' : 'Convert (and judge silently)'}
			</button>
			{#if convertedXml}
				<button
					class="btn-lg variant-filled font-hubot font-stretch-expanded hover:variant-filled-success"
					on:click={downloadFile}
				>
					Converted (Judgment Free... Not)
				</button>
			{/if}
		</div>

		{#if isLoading}
			<div class="w-full max-w-md">
				<ProgressBar value={progress} max={100} class="mt-4" meter="bg-success-500-400-token" />
			</div>
		{/if}
	</div>
</div>
