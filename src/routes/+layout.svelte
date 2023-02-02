<script lang="ts">
	import '@app/app.css';

	// splide -Default theme
	import '@splidejs/splide/css';
	import { onMount } from 'svelte';

	// or other themes
	// import '@splidejs/splide/css/skyblue';
	// import '@splidejs/splide/css/sea-green';
	// or only core styles
	// import '@splidejs/splide/css/core';

	onMount(() => {
		const style = getComputedStyle(document.body);
		console.log('>>> THEME: ' + style.getPropertyValue('--mdc-theme-primary'));

		// --mdc-theme-primary: #f6c0c0;
		// --mdc-theme-secondary: #676778;
		// --mdc-theme-background: #fff;
		// --mdc-theme-surface: #fff;
		// --mdc-theme-error: #b71c1c;
		// --mdc-theme-on-primary: #fff;
		// --mdc-theme-on-secondary: #fff;
		// --mdc-theme-on-surface: #000;
		// --mdc-theme-on-error: #fff;
		// --mdc-theme-text-primary-on-background: rgba(0, 0, 0, 0.87);
		// --mdc-theme-text-secondary-on-background: rgba(0, 0, 0, 0.54);
		// --mdc-theme-text-hint-on-background: rgba(0, 0, 0, 0.38);
		// --mdc-theme-text-disabled-on-background: rgba(0, 0, 0, 0.38);
		// --mdc-theme-text-icon-on-background: rgba(0, 0, 0, 0.38);
		// --mdc-theme-text-primary-on-light: rgba(0, 0, 0, 0.87);
		// --mdc-theme-text-secondary-on-light: rgba(0, 0, 0, 0.54);
		// --mdc-theme-text-hint-on-light: rgba(0, 0, 0, 0.38);
		// --mdc-theme-text-disabled-on-light: rgba(0, 0, 0, 0.38);
		// --mdc-theme-text-icon-on-light: rgba(0, 0, 0, 0.38);
		// --mdc-theme-text-primary-on-dark: white;
		// --mdc-theme-text-secondary-on-dark: rgba(255, 255, 255, 0.7);
		// --mdc-theme-text-hint-on-dark: rgba(255, 255, 255, 0.5);
		// --mdc-theme-text-disabled-on-dark: rgba(255, 255, 255, 0.5);
		// --mdc-theme-text-icon-on-dark: rgba(255, 255, 255, 0.5);
	});
</script>

<!-- <svelte:head>
	<link rel="stylesheet" href="smui.css?v=4" />;
</svelte:head> -->

<slot />

<!-- <SeoMetas />
	<FavIcons /> -->
<!-- </svelte:head> -->
