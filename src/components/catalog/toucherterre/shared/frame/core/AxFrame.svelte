<script lang="ts">
	import { browser } from '$app/environment';
	import { AppContent } from '@smui/drawer';
	import Scrim from '@smui/drawer/src/Scrim.svelte';
	import Drawer from '@smui/drawer';
	import AxDrawerCms from './drawer/AxDrawerCms.svelte';
	import AxDrawerApp from './drawer/AxDrawerApp.svelte';
	import TopAppBar, { Row, Section, AutoAdjust } from '@smui/top-app-bar';
	import IconButton from '@smui/icon-button';
	import { AX__UI__CONST_isDebugBorder } from '@app/domain/DATA/clientend/ui-frame/AX__UI__CONST_isDebugBorder';
	import { STORE_UI__DRAWER_IS_OPEN } from '@app/stores/storeUi';
	//-------------------------------------------------------
	export let isAdmin = false;
	//. . . . . . . . . . . . . . . . . . . . . . . . . . . .
	let topAppBar;
	// let open = false; // drawer open
	let variant: T_ui__dynvariant = undefined; // drawer variant
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
	// $: $STORE_UI__DRAWER_IS_OPEN = isAdmin && !isXs && !isSm ? true : false; // always open first in admin
	$: {
		if (isAdmin && !isXs && !isSm) {
			$STORE_UI__DRAWER_IS_OPEN = true;
			console.log('> isAdmin && !isXs && !isSm: ', isAdmin && !isXs && !isSm);
		}
		console.log('> drawer open: ', $STORE_UI__DRAWER_IS_OPEN);
	}
	//. . . . . . . . . . . . . . . . . . . . . . . . . . . .
	$: {
		variant = isXs || isSm ? 'modal' : 'dismissible';
	}
	//-------------------------------------------------------
	const toggleOpen = () => {
		$STORE_UI__DRAWER_IS_OPEN = !$STORE_UI__DRAWER_IS_OPEN;
		console.log('HAMBURGER pressed !');
	};
	//-------------------------------------------------------
	//press esc TO open/close drawer
	function handleNavWithKey(e) {
		if (e.code === 'Escape') {
			$STORE_UI__DRAWER_IS_OPEN = !$STORE_UI__DRAWER_IS_OPEN;
			console.log('ESC pressed !');
		}
	}
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
	function matches(query) {
		if (browser) {
			return window.matchMedia(query).matches;
		}
	}
</script>

<!-- FRAME -->

<!-- press ESC: to open/close the drawer -->
<svelte:window on:resize={handleResize} on:keydown={handleNavWithKey} />

<!-- +#################################### -->
<!-- DRAWER -->
<!-- +#################################### -->
<Drawer {variant} open={$STORE_UI__DRAWER_IS_OPEN} class="fixed">
	{#if isAdmin}
		<AxDrawerCms />
	{:else}
		<AxDrawerApp />
	{/if}
</Drawer>
<!-- scrim -->
{#if isXs || isSm}
	<Scrim on:click={() => ($STORE_UI__DRAWER_IS_OPEN = false)} class="opacity-90 backdrop-blur-sm" />
{/if}

<AppContent>
	<!-- +#################################### -->
	<!-- HEADER -->
	<!-- +#################################### -->
	<TopAppBar
		bind:this={topAppBar}
		variant="fixed"
		style="border:{AX__UI__CONST_isDebugBorder ? '4px solid red' : 'none'}"
		class="bg-orange-900/60 "
	>
		<Row>
			<!-- HAMBURGER - fait partis du chassi -->
			<!-- =========== -->
			<Section class="mdc-top-app-bar__section--align-start md:hidden">
				<IconButton style="color:var(--wa-color-1)" class="material-icons" on:click={toggleOpen}
					>menu
				</IconButton>
			</Section>

			<!-- SLOT: HEADER 2 (HeaderApp/Cms s injecte ici)-->
			<!-- +................. -->
			<slot name="plugin--frame-header--1" />
		</Row>
	</TopAppBar>

	<!-- BODY -->
	<!-- +#################################### -->

	<!-- top-app-bar--content -->
	<!-- place-items-center - le centrage du body se fait ici... changer si on ve NON centre -->
	<!-- le conteneur root du content -->
	<AutoAdjust {topAppBar} style="border:{AX__UI__CONST_isDebugBorder ? '4px solid cyan' : 'none'}">
		<!-- en purple, il s agit de la max largeur... -->
		<main
			class="m-auto max-w-6xl "
			style="border:{AX__UI__CONST_isDebugBorder ? '4px solid purple' : 'none'}"
		>
			<!-- SLOT: BODY  -->
			<!-- +................. -->
			<slot name="plugin--frame-body--1" />
		</main>
	</AutoAdjust>
</AppContent>
