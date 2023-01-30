const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

const config = {
	plugins: [
		//Some plugins, like tailwindcss/nesting, need to run before Tailwind,
		tailwindcss(),

		// TODO : load prefixed lib for ui safe inclusions ?
		// https://stackoverflow.com/questions/73041170/how-to-make-daisyui-preserve-tailwind-config-theme
		// https://github.com/saadeghi/daisyui/issues/117
		// https://github.com/saadeghi/daisyui-prefix-example/blob/master/tailwind-daisy.config.js
		// https://daisyui.com/docs/config/
		// https://stackoverflow.com/questions/66217592/passing-custom-tailwind-config-file-to-postcss-loader
		// tailwindcss('./tailwind.daisyui.config.cjs'), TODO : prefixed daisyui and tw-elements ?
		//But others, like autoprefixer, need to run after,
		autoprefixer
	]
};

module.exports = config;
