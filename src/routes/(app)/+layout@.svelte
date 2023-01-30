<script lang="ts">
	import Drawer from '@app/components/catalog/toucherterre/shared/layout/2-drawer/Drawer.svelte';

	// @ts-check
	// 🌖🌖 Copyright Monwoo 2022 🌖🌖, build by Miguel Monwoo, service@monwoo.com
	import '@app/app.postcss';
	// import GridChecker from '$lib/1-shell/ui/layout/0-grid-checker/GridChecker.svelte';

	import { onMount, onDestroy } from 'svelte';
	import { base } from '$app/paths';
	import { browser } from '$app/environment';
	import LayoutApp from '@app/components/catalog/toucherterre/front/page/LayoutApp.svelte';
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
<Drawer>
	<!-- <slot slot="layout" /> -->
	<LayoutApp>
		<slot />
	</LayoutApp>
</Drawer>
