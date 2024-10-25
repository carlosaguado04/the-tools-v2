<script lang="ts">
	const currentYear = new Date().getFullYear();

	// City names with rude alternatives
	const cityNames = {
		istanbul: {
			default: 'Istanbul',
			rude: 'Constantinople'
		},
		mexicoCity: {
			default: 'Mexico City',
			rude: 'Viva la Corrupción'
		},
		abuja: {
			default: 'Abuja',
			rude: 'Phishing Paradise'
		},
		tokyo: {
			default: 'Tokyo',
			rude: 'Tentacle City'
		},
		newYork: {
			default: 'New York',
			rude: 'Roach Kingdom'
		}
	};

	// Arrays of comments for each location
	const comments = {
		istanbul: [
			'(arguing over tea strength)',
			'(scamming tourists at the bazaar)',
			'(trying to sell you a carpet)',
			'(calling everyone brother)',
			'(feeding stray cats again)',
			'(smoking hookah instead of working)',
			'(yelling MASHALLAH at pigeons)',
			'(drinking the 47th tea of the day)',
			'(haggling over a 2₺ difference)',
			'(telling you their cousin has better price)'
		],
		mexicoCity: [
			'(probably jumping a wall)',
			'(adding hot sauce to hot sauce)',
			'(running from la chancla)',
			'(saying wey for the 100th time)',
			'(hiding from cartels)',
			'(getting deported... again)',
			'(stealing your job)'
		],
		tokyo: [
			'(watching weird tentacle stuff)',
			'(living in a closet-sized apartment)',
			'(being weird on a game show)',
			'(getting crushed in the metro)',
			'(marrying a body pillow)',
			'(cosplaying at work)',
			'(simping for vtubers)',
			'(being polite but judging hard)',
			'(sleeping at their desk like a pro)'
		],
		newYork: [
			'(probably complaining)',
			'(paying $4000 for a shoebox)',
			'(pretending to be important)',
			'(cursing at pigeons)',
			'(claiming their pizza is better)',
			'(being aggressively unfriendly)'
		],
		abuja: [
			'(scamming time)',
			'(writing another email scheme)',
			'(looking for a prince)',
			'(promising millions)',
			'(asking for your bank details)',
			'(creating linkedin opportunities)'
		]
	};

	function getTimeIn(timezone: string) {
		try {
			return new Intl.DateTimeFormat('en-GB', {
				timeZone: timezone,
				hour: '2-digit',
				minute: '2-digit',
				hour12: false
			}).format(new Date());
		} catch (error) {
			return '--:--';
		}
	}

	let times = {
		istanbul: '',
		mexicoCity: '',
		abuja: '',
		tokyo: '',
		newYork: ''
	};

	// Function to get random comment based on current hour
	function getComment(location: keyof typeof comments) {
		const currentHour = new Date().getHours();
		const index = currentHour % comments[location].length;
		return comments[location][index];
	}

	let currentComments = {
		istanbul: '',
		mexicoCity: '',
		abuja: '',
		tokyo: '',
		newYork: ''
	};

	function updateTimes() {
		times = {
			istanbul: getTimeIn('Europe/Istanbul'),
			mexicoCity: getTimeIn('America/Mexico_City'),
			abuja: getTimeIn('Africa/Lagos'),
			tokyo: getTimeIn('Asia/Tokyo'),
			newYork: getTimeIn('America/New_York')
		};
	}

	function updateComments() {
		currentComments = {
			istanbul: getComment('istanbul'),
			mexicoCity: getComment('mexicoCity'),
			abuja: getComment('abuja'),
			tokyo: getComment('tokyo'),
			newYork: getComment('newYork')
		};
	}

	// Initial updates
	updateTimes();
	updateComments();

	// Cleanup intervals on component destroy
	import { onDestroy } from 'svelte';

	const timeInterval = setInterval(updateTimes, 1000);
	const commentInterval = setInterval(updateComments, 3600000);

	onDestroy(() => {
		clearInterval(timeInterval);
		clearInterval(commentInterval);
	});
</script>

<footer class="bg-transparent backdrop-blur-3xl">
	<div class="container mx-auto">
		<div class="flex flex-col lg:flex-row justify-between items-center gap-4">
			<!-- Copyright -->
			<div
				class="font-hubot font-hubot-bold font-stretch-expanded text-sm whitespace-nowrap opacity-70"
			>
				© {currentYear} Carlos Aguado
			</div>

			<!-- Time zones -->
			<div
				class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-6 gap-y-2 font-hubot font-hubot-medium font-stretch-expanded text-sm"
			>
				<div class="flex flex-col items-center whitespace-nowrap group">
					<span class="opacity-70">
						<span class="group-hover:hidden">{cityNames.istanbul.default}</span>
						<span class="hidden group-hover:inline transition-all duration-300"
							>{cityNames.istanbul.rude}</span
						>
					</span>
					<span>{times.istanbul}</span>
					<span class="text-xs opacity-50 transition-opacity duration-300 text-center"
						>{currentComments.istanbul}</span
					>
				</div>
				<div class="flex flex-col items-center whitespace-nowrap group">
					<span class="opacity-70">
						<span class="group-hover:hidden">{cityNames.mexicoCity.default}</span>
						<span class="hidden group-hover:inline transition-all duration-300"
							>{cityNames.mexicoCity.rude}</span
						>
					</span>
					<span>{times.mexicoCity}</span>
					<span class="text-xs opacity-50 transition-opacity duration-300 text-center"
						>{currentComments.mexicoCity}</span
					>
				</div>
				<div class="flex flex-col items-center whitespace-nowrap group">
					<span class="opacity-70">
						<span class="group-hover:hidden">{cityNames.abuja.default}</span>
						<span class="hidden group-hover:inline transition-all duration-300"
							>{cityNames.abuja.rude}</span
						>
					</span>
					<span>{times.abuja}</span>
					<span class="text-xs opacity-50 transition-opacity duration-300 text-center"
						>{currentComments.abuja}</span
					>
				</div>
				<div class="flex flex-col items-center whitespace-nowrap group">
					<span class="opacity-70">
						<span class="group-hover:hidden">{cityNames.tokyo.default}</span>
						<span class="hidden group-hover:inline transition-all duration-300"
							>{cityNames.tokyo.rude}</span
						>
					</span>
					<span>{times.tokyo}</span>
					<span class="text-xs opacity-50 transition-opacity duration-300 text-center"
						>{currentComments.tokyo}</span
					>
				</div>
				<div class="flex flex-col items-center whitespace-nowrap group">
					<span class="opacity-70">
						<span class="group-hover:hidden">{cityNames.newYork.default}</span>
						<span class="hidden group-hover:inline transition-all duration-300"
							>{cityNames.newYork.rude}</span
						>
					</span>
					<span>{times.newYork}</span>
					<span class="text-xs opacity-50 transition-opacity duration-300 text-center"
						>{currentComments.newYork}</span
					>
				</div>
			</div>
		</div>
	</div>
</footer>
