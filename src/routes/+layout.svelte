<script lang="ts">
	import '@app/app.postcss';
	import { navigating } from '$app/stores';
	import PreloadingIndicator from '@app/components/catalog/toucherterre/shared/PreloadingIndicator.svelte';
	import { onMount } from 'svelte';
	// splide -Default theme
	import '@splidejs/splide/css';
	import { STORE_UI__SNACK_IS_OPEN } from '@app/stores/storeUi';
	import Snack from '@app/components/catalog/toucherterre/shared/Snack.svelte';
	// or other themes
	// import '@splidejs/splide/css/skyblue';
	// import '@splidejs/splide/css/sea-green';
	// or only core styles
	// import '@splidejs/splide/css/core';

	// let snackOpen = false;
	// let snackType = 'success';
	// let snackText = 'N/A';

	// let snackOpen = $STORE_UI__SNACK_IS_OPEN.open;
	// let snackType = $STORE_UI__SNACK_IS_OPEN.type;
	// let snackText = $STORE_UI__SNACK_IS_OPEN.text;

	// $: if ($STORE_UI__SNACK_IS_OPEN.open) {
	// $: {
	// 	console.log('before: ', snackOpen);
	// 	snackOpen = $STORE_UI__SNACK_IS_OPEN.open; // change state after all ? or right now ?
	// 	snackType = $STORE_UI__SNACK_IS_OPEN.type;
	// 	snackText = $STORE_UI__SNACK_IS_OPEN.text;
	// 	console.log('after: ', snackOpen);
	// 	console.log('SNACK >> ', snackText);
	// 	$STORE_UI__SNACK_IS_OPEN.open = false;
	// }
	// --------------------------------------------------------
	// function onOpenSnack(event) {
	// 	console.log('2 ===========================');

	// 	snackOpen = event.detail.snackOpen;
	// 	snackType = event.detail.snackType;
	// 	snackText = event.detail.snackText;
	// }
	// --------------------------------------------------------
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
	// --------------------------------------------------------
</script>

<!-- BK - si beoin utiliser -->
<!-- <svelte:head>
	<link rel="stylesheet" href="smui.css?v=4" />;
</svelte:head> -->

{#if $navigating}
	<PreloadingIndicator />
{/if}

<!-- type={snackType} bind:open={snackOpen} text={snackText} -->
<!-- it sync its state with the store -->
<Snack />

<!-- <div class="" on:openSnackEvent={onOpenSnack}> -->
<!-- <slot on:openSnackEvent /> -->
<slot />
<!-- </div> -->

<!-- <SeoMetas />
	<FavIcons /> -->
<!-- </svelte:head> -->
