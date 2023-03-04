import adapterStatic from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		alias: {
			app: 'src',
			routes: 'src/routes',
			ui: 'src/components/toucherterre',
			stores: 'src/stores',
			lib: 'src/lib',
			libfirebase: 'src/lib/firebase',
			libutils: 'src/lib/utils'
		},

		// adapter: adapter()
		// https://github.com/sveltejs/kit/issues/1650
		adapter: adapterStatic({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			//
			// fallback: 'index.html'
			// pages: 'build',
			// assets: 'build',
			// fallback: null,
			// precompress: false,
			// strict: true
			//
			// fallback: null
			// fallback: '202.html'
		})
		//
		// prerender: {
		// entries: [
		// '/',
		// '/acceuil',
		// '/la-demarche',
		// '/blog',
		// '/event',
		// ]
		// }
		// prerender: {
		// 	default: true,
		// 	entries: [
		// 		'/',
		// 		'/article/BE%20RASTA%20--%20part%201',
		// 		'/article/Pipi%20popo',
		// 		'/article/ben',
		// 		'/editor',
		// 		'/profile/@Axel%20R.'
		// 	]
		// 	// trailingSlash: 'always'
		// },
	},
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess()
};

export default config;
