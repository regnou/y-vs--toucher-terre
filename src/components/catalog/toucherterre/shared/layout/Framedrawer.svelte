<script lang="ts">
	import { browser } from '$app/environment';
	import { AppContent } from '@smui/drawer';
	import Scrim from '@smui/drawer/src/Scrim.svelte';
	import Frameheaderbody from './Frameheaderbody.svelte';
	import DrawerApp from './Drawerapp.svelte';
	import DrawerAdmin from './Draweradmin.svelte';
	//#######################################################
	export let isAdmin = false;
	//. . . . . . . . . . . . . . . . . . . . . . . . . . . .
	let openApp = false;
	let openAdmin = false;
	let dynVariant: T_dynvar; // 'modal', 'dismissible'
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
	$: {
		if (isXs || isSm) {
			dynVariant = 'modal';
		} else {
			dynVariant = 'dismissible';
			if (isAdmin) {
				openAdmin = true;
			} else {
				openApp = false;
			}
		}
	}
	//-------------------------------------------------------
	function handleResize(e) {
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
			if (isAdmin) openAdmin = !openAdmin;
			else openApp = !openApp;
		}
	}
	//-------------------------------------------------------
	function matches(query) {
		if (browser) {
			return window.matchMedia(query).matches;
		}
	}
	//#######################################################
</script>

<!-- ESCAPE TOOPEN IT -->
<svelte:window on:resize={handleResize} on:keydown={handleNavWithKey} />

<!--  -->
<!-- DRAWER -->
<!--  -->
{#if isAdmin}
	<DrawerAdmin bind:open={openAdmin} {dynVariant} />
{:else}
	<DrawerApp bind:open={openApp} {dynVariant} />
{/if}

<!-- scrim -->
<!--  -->
{#if isXs || isSm}
	<Scrim class="opacity-90 backdrop-blur-sm" />
{/if}

<!--  -->
<!-- MAIN CONTENT -->
<!--  -->
<AppContent class="">
	<!--  -->
	<!-- HEADER + APP -->
	<!--  -->
	<Frameheaderbody bind:openApp bind:openAdmin {isAdmin}>
		<slot name="header-1" slot="header-2" />
		<slot name="content-1" slot="content-2" />
		<!-- <Footer /> -->
	</Frameheaderbody>
</AppContent>

<!-- transition:fade={{ duration: 200 }} class="blur-panel z-40" -->
