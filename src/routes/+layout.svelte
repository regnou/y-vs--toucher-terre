<!-- jouer sur le z-index si besoin -->
<!-- <GridChecker /> -->

{#if $navigating}
	<AxPreloadingIndicator />
{/if}

<!-- it sync its state with the store -->
<AxSnack />

<slot />

<!-- <SeoMetas />
	<FavIcons /> -->

<!-- </svelte:head> -->
<script lang="ts">
	//. . . . . . . . . . . . . . . . . . . . . . . . . . . .
	// CSS (themes for all the app)
	//. . . . . . . . . . . . . . . . . . . . . . . . . . . .
	import '@app/app.css';
	//. . . . . . . . . . . . . . . . . . . . . . . . . . . .
	import '@splidejs/splide/css'; // splide - Default theme
	// import '@splidejs/splide/css/skyblue'; // or other themes
	// import '@splidejs/splide/css/sea-green'; // or other themes
	// import '@splidejs/splide/css/core'; // or only core styles
	//. . . . . . . . . . . . . . . . . . . . . . . . . . . .
	//
	//. . . . . . . . . . . . . . . . . . . . . . . . . . . .
	import { navigating, page } from '$app/stores';
	import { onMount } from 'svelte';
	import AxSnack from '@app/components/catalog/toucherterre/shared/frame/AxSnack.svelte';
	import AxPreloadingIndicator from '@app/components/catalog/toucherterre/shared/frame/AxPreloadingIndicator.svelte';
	import { axlog } from '@app/utils/axLog';
	// import GridChecker from '@app/components/catalog/toucherterre/shared/debug-ui/GridChecker.svelte';
	//#######################################################
	// MEGA ROOT LAYOUT
	//#######################################################
	onMount(() => {
		axlog(undefined, $page.url.pathname, 'ROOT-LAYOUT');

		// const style = getComputedStyle(document.body);
		// console.debug('🚔>>> THEME: ' + style.getPropertyValue('--mdc-theme-primary'));
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
	//#######################################################
</script>
