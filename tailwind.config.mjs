/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				'navy': "#11235A",
				'muted': "#6e6a8633",
				'surface': "#1f1d2eb3",
				'darkText': "#E0DEF4",
				'iris': "#C4A7E7",
				'astro-pink': "#F041FF"

			}
		},
	},
	plugins: [],
}
