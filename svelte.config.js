import adapterStatic from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
// import adapterAuto from '@sveltejs/adapter-auto';
//#######################################################
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// preproc: https://kit.svelte.dev/docs/integrations#preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapterStatic({
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		alias: {
			'@app': 'src'
		}
	}
};
//-------------------------------------------------------
export default config;
