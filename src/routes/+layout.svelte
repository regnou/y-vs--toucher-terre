<!--  -->
<!--  -->
<!--  -->
<!-- jouer sur le z-index si besoin -->
<!-- <GridChecker /> -->
{#if $navigating}
	<AxPreloadingIndicator />
{/if}
<!--  -->
<!--  -->
<!--  -->
<!-- it sync its state with the store -->
<AxSnack />
<!--  -->
<!--  -->
<!--  -->
<slot />
<!--  -->
<!--  -->
<!--  -->
<!-- <SeoMetas />
	<FavIcons /> -->
<!--  -->
<!--  -->
<!--  -->

<!-- </svelte:head> -->
<script lang="ts">
	onMount(() => {
		axlog({ data: $AX_STORE__CONTENT, db: $AX_STORE__CONTENT_DB }, $page.url.pathname, '############################# ROOT-LAYOUT');
	});
	// <!-- ----------------------------------------------------- -->
	// <!-- css - BASE -->
	// <!-- ----------------------------------------------------- -->
	import 'app/app.postcss';
	// <!-- ----------------------------------------------------- -->
	// <!-- css - SPLIDE -->
	// <!-- ----------------------------------------------------- -->
	import '@splidejs/splide/css'; // splide - Default theme
	// import '@splidejs/splide/css/skyblue'; // or other themes
	// import '@splidejs/splide/css/sea-green'; // or other themes
	// import '@splidejs/splide/css/core'; // or only core styles

	// <!-- ----------------------------------------------------- -->
	// <!--  -->
	// <!-- ----------------------------------------------------- -->
	import { navigating, page } from '$app/stores';
	import AxPreloadingIndicator from 'app/components/toucherterre/shared-frame-widgets/AxPreloadingIndicator.svelte';
	import AxSnack from 'app/components/toucherterre/shared-frame-widgets/AxSnack.svelte';
	import { AX_STORE__CONTENT, AX_STORE__CONTENT_DB } from 'app/stores/AX_BASE1__STORE_CONTENT';
	import { onMount } from 'svelte';
	import { axlog } from '../lib/utils/axLog';
	// import GridChecker from '@app/components/catalog/toucherterre/shared/debug-ui/GridChecker.svelte';
</script>
