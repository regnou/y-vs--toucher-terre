<script lang="ts">
	// @ts-check
	// 🌖🌖 Copyright Monwoo 2022 🌖🌖, build by Miguel Monwoo, service@monwoo.com
	import '@app/app.postcss';

	import { onMount, onDestroy } from 'svelte';
	import { base } from '$app/paths';
	import { browser } from '$app/environment';
	import LayoutAdmin from '@app/components/catalog/toucherterre/admin/page/LayoutAdmin.svelte';
	// import { NODE_ENV } from '$env/static/private';
	// import { addToast } from "./store";

	// let currentTheme = 'dark';
	// let useDark: boolean;
	// const themeUnsubscriber = theme.subscribe((t) => {
	// 	currentTheme = t;
	// });
	// onDestroy(() => {
	// 	themeUnsubscriber();
	// });

	// onMount(() => {
	// 	if (browser && !localStorage.appConfigTheme) {
	// 		useDark =
	// 			typeof window !== 'undefined'
	// 				? window.matchMedia('(prefers-color-scheme: dark)').matches
	// 				: true;
	// 		currentTheme = useDark ? 'dark' : 'light';
	// 		theme.update(() => currentTheme);
	// 		console.log(`Using OS theme as : ${currentTheme}`);
	// 	}
	// });
</script>

<!--
    https://lightrun.com/answers/sveltejs-svelte-change-body-class-via-sveltebody-
    <svelte:html lang={lang}>
    <svelte:body class:name={confition} />
  -->

<svelte:head>
	<link rel="stylesheet" href="{base}/smui.css?v=4" />
	<link rel="stylesheet" href="{base}/smui-dark.css?v=4" media="screen" />

	<!-- 
    https://www.digitalocean.com/community/tutorials/html-preload-prefetch
    // or preload even if not used ?
    <link
  rel="preload"
  as="style"
  href='{base}/smui-dark.css?v=4' />
  <link
  rel="preload"
  as="style"
  href='{base}/smui.css?v=4' /> -->

	<!-- {#if currentTheme === undefined}
		<link rel="stylesheet" href="{base}/smui.css?v=4" media="(prefers-color-scheme: light)" />
		<link
			rel="stylesheet"
			href="{base}/smui-dark.css?v=4"
			media="screen and (prefers-color-scheme: dark)"
		/>
	{:else if currentTheme === 'dark'}
		<link rel="stylesheet" href="{base}/smui-dark.css?v=4" media="screen" />
	{:else} -->
	<link rel="stylesheet" href="{base}/smui.css?v=4" />
	<!-- {/if} -->

	<!--
    // Below style to solve body class param issue in progress for sveltekit :
    // https://github.com/sveltejs/svelte/issues/3105
  -->
	<style>
		/* html,
		body {
			background-color: var(--smui-surface);
			color: var(--smui-on-surface);
		} */
	</style>

	<!-- <SeoMetas />
	<FavIcons /> -->
</svelte:head>

<!--
  https://github.com/sveltejs/svelte/issues/3105
  => TODO next-v (when implemented in sveltekit ?)
  <svelte:body class:dark-mode={true} />
  => Solved with header raw style injection with css var instead.
  -->

<!-- <div class="{$theme}-mode"> -->
<!-- <Toasts /> -->
<slot />

<!-- </div> -->
<style>
	/* @media only screen and (min-width: 768px) {
		:global(.card-display) {
			max-width: 80%;
			margin: auto;
		}
	} */
</style>
