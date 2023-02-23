import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),

		alias: {
			$app: 'src',
			$lib: 'src/lib',
			$ui: 'src/components/toucherterre',
			$stores: 'src/stores',
			$tecnologies: 'src/tecnology',
			$utils: 'src/utils',
			$domain: 'src/domain',
		}
	},
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess()
};

export default config;


