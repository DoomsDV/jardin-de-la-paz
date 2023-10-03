/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
				'./node_modules/flowbite/**/*.js'],
	theme: {
		extend: {},
		screens: {
			"2xl": { max: "1535px" },
			xl: { max: "1279px" },
			bxl: { max: "1170px" },
			lGG: { max: "1040px" },
			lg: { max: "1023px" },
			blg: { max: "910px" },
			md: { max: "880px" },
			sm: { max: "680px" },
			bsm: { max: "580px" },
			xr: { max: "420px" },
			se: { max: "375px" },
			mn: { min: "767px" },
			blgMin: { min: "910px" },
		  },
	},
	plugins: [
		require("daisyui"),
		require('flowbite/plugin')
	],
	daisyui: {
		themes: ["light"],
	},
}
