<script>
	import { browser } from '$app/environment';
	import { AppContent } from '@smui/drawer';
	import Scrim from '@smui/drawer/src/Scrim.svelte';
	import TopAppBarAx from './TopAppBarAx.svelte';
	import DrawerApp from './DrawerApp.svelte';
	import DrawerAdmin from './DrawerAdmin.svelte';
	import { onMount } from 'svelte';

	export let isAdmin = false;

	// First init state for the drawer
	let openApp = false;
	let openAdmin = false;

	// let dynVariant = 'N/A'; // 'modal', 'dismissible'
	let dynVariant = 'N/A'; // 'modal', 'dismissible'

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

	onMount(() => {
		// if (isXs) dynVariant = 'modal';
		// else dynVariant = 'dismissible';
	});

	$: {
		console.log('openApp: ', openApp);
		console.log('openAdmin ', openAdmin);
		console.log('$1: DRAWER-AX--dynVariant-before: ', dynVariant);
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
		console.log('$2: DRAWER-AX--dynvariant-after:', dynVariant);
	}

	function handleResize(e) {
		isXs = matches(xs);
		isSm = matches(sm);
		isMd = matches(md);
		isLg = matches(lg);
		isXl = matches(xl);
		isXxl = matches(xxl);
		console.log(isXs, isSm, isMd, isLg, isXl, isXxl);
		//
	}

	//press esc TO open/close drawer
	function handleNavWithKey(e) {
		if (e.code === 'Escape') {
			if (isAdmin) openAdmin = !openAdmin;
			else openApp = !openApp;
		}
	}

	function matches(query) {
		if (browser) {
			return window.matchMedia(query).matches;
		}
	}
</script>

<!-- ESCAPE TOOPEN IT -->
<svelte:window on:resize={handleResize} on:keydown={handleNavWithKey} />

<!--  -->
<!-- DRAWER -->
<!--  -->
{#if isAdmin}
	<!-- IF BUG DRAWER -- HERE TODO -->
	<!-- bind:open -->
	<DrawerAdmin bind:open={openAdmin} {dynVariant} />
{:else}
	<DrawerApp bind:open={openApp} {dynVariant} />
{/if}
<!--  -->
<!-- scrim -->
<!--  -->
{#if isXs || isSm}
	<!-- fixed={true} -->
	<Scrim class="opacity-90 backdrop-blur-sm" />
{/if}

<!-- transition:fade={{ duration: 200 }} class="blur-panel z-40" -->

<!--  -->
<!-- MAIN CONTENT -->
<!--  -->
<AppContent class="">
	<main>
		<!--  -->
		<!-- HEADER + APP -->
		<!--  -->
		<TopAppBarAx bind:openApp bind:openAdmin {isAdmin}>
			<!--  -->
			<!-- HEADER -->
			<!-- <slot slot="headerMenusLeft-2" name="headerMenusLeft-1" /> -->
			<slot slot="headerMenusCenter-2" name="headerMenusCenter-1" />
			<slot slot="headerMenusRight-2" name="headerMenusRight-1" />

			<!--  -->
			<!-- APP -->
			<slot name="layoutMainContent-1" slot="layoutMainContent-2" />

			<!--  -->
			<!-- <Footer /> -->
		</TopAppBarAx>
	</main>
</AppContent>
