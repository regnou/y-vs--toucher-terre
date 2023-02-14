<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { AppContent } from '@smui/drawer';
	import Scrim from '@smui/drawer/src/Scrim.svelte';
	import AxFrameHeaderbody from './AxFrameHeaderbody.svelte';
	import DrawerApp from './drawer/DrawerApp.svelte';
	import DrawerCms from './drawer/DrawerCms.svelte';
	//-------------------------------------------------------
	export let isAdmin = false;
	//. . . . . . . . . . . . . . . . . . . . . . . . . . . .
	let open = false;

	// always open first in admin
	$: open = isAdmin && !isXs && !isSm ? true : open;
	// $: open = $page.url.pathname.includes('/cms/') ? true : false;

	//xs ??   sm 640 | md 768   |    lg 1024 | xl 1280 | 2xl 1536
	const xs = '(max-width: 639px)';
	const sm = '(min-width: 640px) and (max-width: 767px)';
	const md = '(min-width: 768px) and (max-width: 1023px)';
	const lg = '(min-width: 1024px) and (max-width: 1079px)';
	const xl = '(min-width: 1080px) and (max-width: 1535px)';
	const xxl = '(min-width: 1536px) ';
	let isXs = matches(xs);
	let isSm = matches(sm);
	let isMd = matches(md);
	let isLg = matches(lg);
	let isXl = matches(xl);
	let isXxl = matches(xxl);
	//. . . . . . . . . . . . . . . . . . . . . . . . . . . .
	// $: {
	// 	if (isXs || isSm) {
	// 		// dynVariant = 'modal';
	// 	} else {
	// 		// dynVariant = 'dismissible';
	// 		// if (isAdmin) {
	// 		// 	openAdmin = true;
	// 		// } else {
	// 		// 	openApp = false;
	// 		// }
	// 	}
	// }
	//-------------------------------------------------------
	function handleResize() {
		//e
		isXs = matches(xs);
		isSm = matches(sm);
		isMd = matches(md);
		isLg = matches(lg);
		isXl = matches(xl);
		isXxl = matches(xxl);
	}
	//-------------------------------------------------------
	//press esc TO open/close drawer
	function handleNavWithKey(e) {
		if (e.code === 'Escape') {
			open = !open;
		}
	}
	//-------------------------------------------------------
	function matches(query) {
		if (browser) {
			return window.matchMedia(query).matches;
		}
	}
</script>

<!-- #######################################################  -->
<!-- #######################################################  -->
<!-- FRAME -->
<!-- #######################################################  -->
<!-- #######################################################  -->

<!-- #######################################################  -->
<!-- FRAME--DRAWER (plug drawer here) -->
<!-- ####################################################### -->
<!-- press ESC: to open/close the drawer -->
<svelte:window on:resize={handleResize} on:keydown={handleNavWithKey} />
<!-- ------------------------------------------ -->
<!-- PREDEFINIS :: 🟨 DRAWER 🟨 -->
<!-- ------------------------------------------ -->
{#if isAdmin}
	<DrawerCms {open} />
{:else}
	<DrawerApp {open} />
{/if}
<!-- ------------------------------------------ -->
<!-- scrim -->
{#if isXs || isSm}
	<Scrim on:click={() => (open = false)} class="opacity-90 backdrop-blur-sm" />
{/if}
<!-- ####################################################### -->
<!-- FRAME--HEADER+BODY -->
<!-- ####################################################### -->
<AppContent>
	<!-- bind:open -> becoz of hamburger inside header -->
	<AxFrameHeaderbody bind:open>
		<!-- ------------------------------------------ -->
		<!-- SLOT: HEADER 1 -->
		<!-- ------------------------------------------ -->
		<!-- 🟥 -->
		<!-- ⚫  -->
		<slot name="plugin--frame-header-1" slot="plugin--frame-header-2" />

		<!-- ------------------------------------------ -->
		<!-- SLOT: BODY 1 -->
		<!-- ------------------------------------------ -->
		<!-- 🟥 -->
		<!-- ⚫  -->
		<slot name="plugin--frame-body-1" slot="plugin--frame-body-2" />

		<!-- ------------------------------------------ -->
		<!-- <Footer /> -->
		<!-- ------------------------------------------ -->
	</AxFrameHeaderbody>
</AppContent>
<!-- transition:fade={{ duration: 200 }} class="blur-panel z-40" -->
