import { join } from 'path';
import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin';
import { tools } from './src/tools';
import plugin from 'tailwindcss/plugin';

export default {
	darkMode: 'selector',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {
			fontFamily: {
				hubot: ['"Hubot Sans"', 'sans-serif']
			},
			fontWeight: {
				'hubot-thin': '200',
				'hubot-light': '300',
				'hubot-regular': '400',
				'hubot-medium': '500',
				'hubot-semibold': '600',
				'hubot-bold': '700',
				'hubot-black': '900'
			},
			fontStretch: {
				'hubot-condensed': '75%',
				'hubot-normal': '100%',
				'hubot-expanded': '125%'
			}
		}
	},
	plugins: [
		forms,
		typography,
		skeleton({
			themes: {
				custom: [tools]
			}
		}),
		plugin(({ addUtilities }) => {
			addUtilities({
				'.font-stretch-condensed': {
					'font-stretch': '75%'
				},
				'.font-stretch-normal': {
					'font-stretch': '100%'
				},
				'.font-stretch-expanded': {
					'font-stretch': '200%'
				}
			});
		})
	]
} satisfies Config;
