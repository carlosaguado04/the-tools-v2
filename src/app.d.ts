// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}

declare module 'tailwindcss/plugin';

// Extend the Tailwind CSS types
declare module '@tailwindcss/types' {
	interface CustomUtilities {
		'font-stretch-condensed': string;
		'font-stretch-normal': string;
		'font-stretch-expanded': string;
	}
}
