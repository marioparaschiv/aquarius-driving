import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';

const config: Config = {
	plugins: [animate],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	theme: {
		screens: {
			'sm': '725px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1536px',
		},
		fontFamily: {
			primary: 'Manrope, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
			logo: '"Freehand", cursive'
		},
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1700px',
			},
		},
		extend: {
			colors: {
				brand: 'hsl(var(--hue), 100%, 65%)',
				background: 'hsl(var(--hue), 0%, 100%)',
				foreground: 'hsl(var(--hue), 0%, 0%)',
				border: 'hsl(var(--hue), 0%, 90%)',
				primary: {
					DEFAULT: 'hsl(var(--hue), 0%, 0%)',
					fg: 'hsl(var(--hue), 0%, 25%)',
				},
				secondary: {
					DEFAULT: 'hsl(var(--hue), 0%, 95%)',
					fg: 'hsl(var(--hue), 0%, 35%)',
				},
			}
		},
	}
};

export default config;