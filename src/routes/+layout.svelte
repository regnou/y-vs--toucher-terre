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
	import 'app/app.postcss';
	//. . . . . . . . . . . . . . . . . . . . . . . . . . . .
	import '@splidejs/splide/css'; // splide - Default theme
	// import '@splidejs/splide/css/skyblue'; // or other themes
	// import '@splidejs/splide/css/sea-green'; // or other themes
	// import '@splidejs/splide/css/core'; // or only core styles
	//. . . . . . . . . . . . . . . . . . . . . . . . . . . .
	import { onMount } from 'svelte';
	import { axlog } from '../utils/axLog';
	import AxPreloadingIndicator from 'app/components/toucherterre/shared/frame/AxPreloadingIndicator.svelte';
	import AxSnack from 'app/components/toucherterre/shared/frame/popup/AxSnack.svelte';
	import { navigating, page } from '$app/stores';
	// import GridChecker from '@app/components/catalog/toucherterre/shared/debug-ui/GridChecker.svelte';
	//#######################################################
	// MEGA ROOT LAYOUT
	//#######################################################
	onMount(() => {
		axlog('🍃', $page.url.pathname, '############################# ROOT-LAYOUT');
	});
	//#######################################################
</script>
