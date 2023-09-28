/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				inter: ["Inter", "sans-serif"],
				sora: ["Sora", "sans-serif"],
				work_sans: ["Work Sans", "sans-serif"],
			},
			colors: {
				dark_blue: "#120B48",
				dark_black: "#141414",
				line: "#F4F6F8",
				text: "#616163",
				sub_header: "#1B233D",
			},
		},
	},
	plugins: [],
};

