// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import 'dotenv/config';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		})
	],

	kit: {
		adapter: adapter(
			// https://dev.to/robertobutti/how-to-start-building-your-static-website-with-svelte-and-tailwindcss-hbk
			{
				// default options are shown
				pages: 'build',
				assets: 'build',
				fallback: null
			}
		),
		// https://github.com/sveltejs/kit/tree/master/packages/adapter-static#spa-mode
		// prerender: { entries: [] },

		// npm run build -- --base=/crowdfundings/
		// => will not work since sveltekit overide this, configured from here
		// https://stackoverflow.com/questions/74325393/how-to-define-base-urls-in-sveltekit
		// import { PUBLIC_BASE_URL } from '$env/static/public'
		// Configuré en mode racine pour l'instant, en filtrant les
		// Reg exp URLs de base necessaire au fonctionnement du frontend :
		// ,crowdfundings|_app|smui.*.css|wp-display/favicomatic,
		paths: {
			// https://stackoverflow.com/questions/72956324/how-can-i-use-vite-env-variables-in-svelte-config-js
			base: process.env.VITE_MWS_BASE_HREF || ''
			// base: import.meta.env.VITE_MWS_BASE_HREF || '',
			// https://stackoverflow.com/questions/69378392/sveltekit-base-url-for-subdirectory-throws-404
			// base: '/toucherterre',
		},
		alias: {
			// this will match a file
			'@app': 'src'
		}
	}
};

export default config;
