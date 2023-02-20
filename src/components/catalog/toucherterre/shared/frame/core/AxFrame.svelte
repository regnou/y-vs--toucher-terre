<!-- ######################################################## -->
<!-- FRAME -->
<!-- ######################################################## -->

<!-- press ESC: to open/close the drawer -->
<svelte:window
	on:resize={handleResize}
	on:keydown={handleNavWithKey}
/>

<!-- 1) DRAWER -->
<!-- ######################################################## -->
<Drawer
	{variant}
	open={$STORE_UI__DRAWER_IS_OPEN}
	class="ax-drawer-width fixed"
>
	<!-- +................. -->

	<slot name="plugin--frame-drawer--1" />
</Drawer>
<!-- scrim -->
{#if isXs || isSm}
	<Scrim
		on:click={() => ($STORE_UI__DRAWER_IS_OPEN = false)}
		class=""
	>
		<div class="h-full w-full bg-black/30" /></Scrim
	>
{/if}

<!-- background-color: var(--mdc-theme-background, #fff); -->
<!-- color={secondaryColor ? 'secondary' : 'primary'} -->

<AppContent>
	<!-- @apply bg-orange-900/60; -->
	<!-- 2) HEADER -->
	<!-- ######################################################## -->
	<TopAppBar
		bind:this={topAppBar}
		variant="fixed"
		style="background-color:{isAdmin ? 'rgb(24 149 5 / 79%)' : 'rgba(130,65,31,0.8)'};
			border:{AX__UI__CONST_isDebugBorder ? '4px solid red' : 'none'}"
	>
		<Row>
			<!-- =========== -->
			<!-- HAMBURGER - fait partis du chassi -->
			<!-- =========== -->
			<!-- .................. -->
			<!-- tip responsive: icon desapear becoz not enought space -->
			<!-- .................. -->
			<Section class="mdc-top-app-bar__section--align-start lg:hidden">
				<IconButton
					style="color:var(--wa-color-1)"
					class="material-icons"
					on:click={toggleOpen}
					>menu
				</IconButton>
			</Section>

			<!-- SLOT: HEADER 2 (HeaderApp/Cms s injecte ici)-->
			<!-- +................. -->
			<slot name="plugin--frame-header--1" />
		</Row>
	</TopAppBar>

	<!-- 3) BODY -->
	<!-- ######################################################## -->
	<!-- top-app-bar--content -->
	<!-- place-items-center - le centrage du body se fait ici... changer si on ve NON centre -->
	<!-- le conteneur root du content -->
	<AutoAdjust
		{topAppBar}
		style="border:{AX__UI__CONST_isDebugBorder ? '4px solid cyan' : 'none'}"
	>
		<!-- JOJO -->
		<!-- en purple, il s agit de la max largeur... -->
		<!-- tip: MAX LARGEUR ? -> max-w-6xl bg-red-400 -->
		<div
			class="m-auto "
			style="border:{AX__UI__CONST_isDebugBorder ? '4px solid purple' : 'none'}"
		>
			<!-- SLOT: BODY  -->
			<!-- +................. -->
			<slot name="plugin--frame-body--1" />
		</div>
	</AutoAdjust>
</AppContent>

<script lang="ts">
	import { browser } from '$app/environment';
	import { AppContent } from '@smui/drawer';
	import Scrim from '@smui/drawer/src/Scrim.svelte';
	import Drawer from '@smui/drawer';
	import TopAppBar, { Row, Section, AutoAdjust } from '@smui/top-app-bar';
	import IconButton from '@smui/icon-button';
	import { AX__UI__CONST_isDebugBorder } from '@app/domain/DATA/clientend/ui-frame/AX__UI__CONST_isDebugBorder';
	import { STORE_UI__DRAWER_IS_OPEN } from '@app/stores/storeUiItems';
	import List from '@smui/list';
	import { AX__HEADERMENU_APP } from '@app/domain/DATA/clientend/ui-frame/menus/AX__HEADERMENU_APP.json';
	import AxHeadermenuItem from './header/menuItem/AxHeadermenuItem.svelte';
	//-------------------------------------------------------

	// const useStyles = makeStyles({
	// 	paper: {
	// 		width: 250
	// 	}
	// });

	// ADMIN or NOT
	//-------------------------------------------------------
	export let isAdmin = false;
	//. . . . . . . . . . . . . . . . .  . . . . . . . . . . .
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
	// <!-- .................. -->
	// <!-- tip responsive: drawer & responsive RULES -->
	// <!-- .................. -->
	$: {
		if (!isXs && !isSm) {
			// if (isAdmin && !isXs && !isSm) {
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
