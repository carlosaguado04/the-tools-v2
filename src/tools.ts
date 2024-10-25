import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const tools: CustomThemeConfig = {
	name: 'tools',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		'--theme-font-family-heading': `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '12px',
		'--theme-rounded-container': '12px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '255 255 255',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #ffffff
		'--color-primary-50': '255 255 255', // #ffffff
		'--color-primary-100': '255 255 255', // #ffffff
		'--color-primary-200': '255 255 255', // #ffffff
		'--color-primary-300': '255 255 255', // #ffffff
		'--color-primary-400': '255 255 255', // #ffffff
		'--color-primary-500': '255 255 255', // #ffffff
		'--color-primary-600': '230 230 230', // #e6e6e6
		'--color-primary-700': '191 191 191', // #bfbfbf
		'--color-primary-800': '153 153 153', // #999999
		'--color-primary-900': '125 125 125', // #7d7d7d
		// secondary | #21213e
		'--color-secondary-50': '222 222 226', // #dedee2
		'--color-secondary-100': '211 211 216', // #d3d3d8
		'--color-secondary-200': '200 200 207', // #c8c8cf
		'--color-secondary-300': '166 166 178', // #a6a6b2
		'--color-secondary-400': '100 100 120', // #646478
		'--color-secondary-500': '33 33 62', // #21213e
		'--color-secondary-600': '30 30 56', // #1e1e38
		'--color-secondary-700': '25 25 47', // #19192f
		'--color-secondary-800': '20 20 37', // #141425
		'--color-secondary-900': '16 16 30', // #10101e
		// tertiary | #14b4a4
		'--color-tertiary-50': '220 244 241', // #dcf4f1
		'--color-tertiary-100': '208 240 237', // #d0f0ed
		'--color-tertiary-200': '196 236 232', // #c4ece8
		'--color-tertiary-300': '161 225 219', // #a1e1db
		'--color-tertiary-400': '91 203 191', // #5bcbbf
		'--color-tertiary-500': '20 180 164', // #14b4a4
		'--color-tertiary-600': '18 162 148', // #12a294
		'--color-tertiary-700': '15 135 123', // #0f877b
		'--color-tertiary-800': '12 108 98', // #0c6c62
		'--color-tertiary-900': '10 88 80', // #0a5850
		// success | #84cc16
		'--color-success-50': '237 247 220', // #edf7dc
		'--color-success-100': '230 245 208', // #e6f5d0
		'--color-success-200': '224 242 197', // #e0f2c5
		'--color-success-300': '206 235 162', // #ceeba2
		'--color-success-400': '169 219 92', // #a9db5c
		'--color-success-500': '132 204 22', // #84cc16
		'--color-success-600': '119 184 20', // #77b814
		'--color-success-700': '99 153 17', // #639911
		'--color-success-800': '79 122 13', // #4f7a0d
		'--color-success-900': '65 100 11', // #41640b
		// warning | #EAB308
		'--color-warning-50': '252 244 218', // #fcf4da
		'--color-warning-100': '251 240 206', // #fbf0ce
		'--color-warning-200': '250 236 193', // #faecc1
		'--color-warning-300': '247 225 156', // #f7e19c
		'--color-warning-400': '240 202 82', // #f0ca52
		'--color-warning-500': '234 179 8', // #EAB308
		'--color-warning-600': '211 161 7', // #d3a107
		'--color-warning-700': '176 134 6', // #b08606
		'--color-warning-800': '140 107 5', // #8c6b05
		'--color-warning-900': '115 88 4', // #735804
		// error | #9c000f
		'--color-error-50': '240 217 219', // #f0d9db
		'--color-error-100': '235 204 207', // #ebcccf
		'--color-error-200': '230 191 195', // #e6bfc3
		'--color-error-300': '215 153 159', // #d7999f
		'--color-error-400': '186 77 87', // #ba4d57
		'--color-error-500': '156 0 15', // #9c000f
		'--color-error-600': '140 0 14', // #8c000e
		'--color-error-700': '117 0 11', // #75000b
		'--color-error-800': '94 0 9', // #5e0009
		'--color-error-900': '76 0 7', // #4c0007
		// surface | #000000
		'--color-surface-50': '217 217 217', // #d9d9d9
		'--color-surface-100': '204 204 204', // #cccccc
		'--color-surface-200': '191 191 191', // #bfbfbf
		'--color-surface-300': '153 153 153', // #999999
		'--color-surface-400': '77 77 77', // #4d4d4d
		'--color-surface-500': '0 0 0', // #000000
		'--color-surface-600': '0 0 0', // #000000
		'--color-surface-700': '0 0 0', // #000000
		'--color-surface-800': '0 0 0', // #000000
		'--color-surface-900': '0 0 0' // #000000
	}
};
