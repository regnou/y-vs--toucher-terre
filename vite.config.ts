import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
// -------------------------------------------------
// import { sveltekit } from '@sveltejs/kit/vite';
// import type { UserConfig } from 'vite';
// import { defineConfig } from 'vitest/config';

// export default defineConfig({
// 	const config: UserConfig = {
// const config: UserConfig = {
// 	plugins: [sveltekit()],
// 	test: {
// 		include: ['src/**/*.{test,spec}.{js,ts}']
// 	}
// };

// export default config;
