// 🌖🌖 Copyright Monwoo 2023 🌖🌖, build by Miguel Monwoo, service@monwoo.com
// https://tailwindcss.com/docs/functions-and-directives#using-apply-with-per-component-css
// https://tailwindcss.com/docs/adding-custom-styles
const plugin = require('tailwindcss/plugin');

const config = {
	// https://tailwindcss.com/docs/configuration
	content: ['./src/**/*.{html,js,svelte,ts}'],
	// https://tailwindcss.com/docs/hover-focus-and-other-states
	// https://tailwindcss.com/docs/dark-mode
	// darkMode: ['class', '[data-mode="dark"]'],
	darkMode: ['class', '.dark-mode'],

	// https://stackoverflow.com/questions/64175950/how-to-add-new-colors-to-tailwind-css-and-keep-the-original-ones
	theme: {
		extend: {
			colors: {
				// primary: 'var(--smui-primary)',
				// 'on-primary': 'var(--smui-on-primary)',
				// secondary: 'var(--smui-secondary)',
				// 'on-secondary': 'var(--smui-on-secondary)',
				// background: 'var(--smui-background)',
				// error: 'var(--smui-error)',
				// surface: 'var(--smui-surface)',
				// 'on-surface': 'var(--smui-on-surface)'
			}
		}
	},
	// https://stackoverflow.com/questions/65322933/tailwind-css-how-to-set-default-font-color
	// variants: {
	// 	extend: {
	// 		textColor: ['active'],
	// 	},
	// },
	plugins: [
		// NOP : below have no effect, will try in :
		// src/app.postcss
		// cf : https://tailwindcss.com/docs/functions-and-directives#using-apply-with-per-component-css
		// plugin(function ({ addComponents, theme }) {
		// 	addComponents({
		// 	  '.text-xl': {
		// 		// backgroundColor: theme('colors.white'),
		// 		// borderRadius: theme('borderRadius.lg'),
		// 		// padding: theme('spacing.6'),
		// 		// boxShadow: theme('boxShadow.xl'),
		// 	  }
		// 	})
		// })
		// TODO : should prefix load those below ?
		// require('daisyui'),
		// require('tw-elements/dist/plugin')
	]
};

module.exports = config;
