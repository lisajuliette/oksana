/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			white: '#ffffff',
			polar: '#ECF6FB',
			tulip: '#C3E0F4',
			cornflower: '#A0CFEA',
			palegreen: '#e9f9f0',
			midgreen: '#93d5c8',
			sand: '#fff7e6',
			midnight: '#0b3453',
			beige: '#ece3c4',
		},
		fontFamily: {
			display: 'Melgrim',
			body: 'Roboto Slab',
		},
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
	},
	plugins: [],
};
