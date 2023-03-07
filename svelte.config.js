import adapterStatic from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		alias: {
			routes: 'src/routes',
			ui: 'src/components/toucherterre',
			stores: 'src/stores',
			lib: 'src/lib',
			libfirebase: 'src/lib/firebase',
			libutils: 'src/lib/utils',
			app: 'src',
		},

		// adapter: adapter()
		// https://github.com/sveltejs/kit/issues/1650
		adapter: adapterStatic({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html',
			precompress: false
		}),
		//

		prerender: {
			entries: [
				'/',
				'/acceuil',
				'/la-demarche',
				'/creations-realisations',
				'/prochains-rendez-vous',
				'/cms/acceuil',
				'/cms/la-demarche',
				'/cms/creations-realisations',
				'/cms/prochains-rendez-vous',
				'/login',
				"/cms",
				"/cms/profile",
				"/z/debug",
				"/z/debug/grid",
				"/z/debug/theme-color",
				"/z/debug/theme-elevation",
				"/z/debug/theme-typo",
				"/z/scripts",


			]
		}

	},
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess()
};

export default config;
