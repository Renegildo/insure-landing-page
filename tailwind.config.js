/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
		colors: {
			purple: "#2c2640",
			white: '#fff',
			gray: '#262328',
		},
		fontFamily: {
			sans: ['"Karla"', "sans-serif"],
			serif: ['"DM Serif Display"', "serif"]
		},
	},
	plugins: [],
};
