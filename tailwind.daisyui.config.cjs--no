// 🌖🌖 Copyright Monwoo 2023 🌖🌖, build by Miguel Monwoo, service@monwoo.com

// https://stackoverflow.com/questions/66217592/passing-custom-tailwind-config-file-to-postcss-loader
// https://github.com/saadeghi/daisyui/issues/117 (Support .daisy- prefix)
// https://github.com/saadeghi/daisyui-prefix-example/search?q=tailwind-daisy

const plugin = require('tailwindcss/plugin');
const coreConfig = require('./tailwind.config.cjs');

// https://github.com/saadeghi/daisyui-prefix-example/blob/master/tailwind-daisy.config.js
const config = {
	...coreConfig,
	// prefix: 'daisy-', // TODO : do not seem to be loaded from post css... (so even with prefix will not work)
	plugins: [require('daisyui')]
	// mode: 'jit',
	// corePlugins: {
	// 	preflight: false,
	// }

	// https://stackoverflow.com/questions/73041170/how-to-make-daisyui-preserve-tailwind-config-theme
	// daisyUI config (optional)
	// daisyui: {
	// 	styled: true,
	// 	themes: true,
	// 	base: true,
	// 	utils: true,
	// 	logs: true,
	// 	rtl: false,
	// 	prefix: "",
	// 	darkTheme: "dark",
	// },
};

module.exports = config;
