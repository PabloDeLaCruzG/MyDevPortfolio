/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
			  "jost" : ['"Jost"', 'sans-serif']
			},
			colors: {
			  "sec-color": "#FE564D"
			},
			backgroundImage: {
			  'custom-gradient': 'linear-gradient(180deg, #233043, #293647, #1F2937)',
			  'custom-white-gradient': '#FFDFDD'                         
			},
			screens: {
				xs: '360px',
				sm: '480px',
				md: '768px',
				lg: '976px',
				xl: '1120px',
			},
		  },
	},
	plugins: [],
}
