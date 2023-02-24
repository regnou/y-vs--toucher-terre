<!-- ######################################################## -->
<!-- FRAME -->
<!-- ######################################################## -->
<!-- ######################################## -->

<!-- press ESC: to open/close the drawer -->
<svelte:window
	on:resize={handleResize}
	on:keydown={handleNavWithKey}
/>
<!-- ######################################################## -->
<TopAppBar
	variant="fixed"
	bind:this={topAppBar}
	style="background:{isAdmin ? 'var(--mdc-theme-error)' : 'var(--mdc-theme-primary)'};     
		border:{AX_CONST__FRAME_isDebugBorder ? '4px solid red' : 'none'}"
>
	<Row>
		<!-- =========== -->
		<!-- HAMBURGER - fait partis du chassi -->
		<!-- =========== -->
		<!-- .................. -->
		<!-- tip responsive: icon desapear becoz not enought space -->
		<!-- .................. -->
		<Section
			style="background:{AX_CONST__FRAME_isDebugBg ? 'blue' : 'none'}"
			class="bg-blue-200 lg:hidden"
		>
			<IconButton
				class="material-icons"
				on:click={toggleOpen}
				>menu
			</IconButton>
		</Section>

		<!-- =========== -->
		<!-- LOGO client ou AXELO
		<!-- =========== -->
		{#if !isAdmin}
			<Section style="background:{AX_CONST__FRAME_isDebugBg ? 'orange' : 'none'}">
				<!-- <Title> -->
				<!-- .................. -->
				<!-- TIP: attention, lg:auto ==> hack => il faut adapter ici, je dois hack-->
				<!-- .................. -->
				<a
					class="m-auto flex w-max items-center lg:m-0  "
					href={AX_CONST__FRAME_URL_homeCms}
				>
					<img
						class="h-10 w-10"
						src="/media/favicon.png"
						alt=""
					/>
					{#if isXxl}
						<div class="ml-2">Toucher Terre</div>
					{/if}
				</a>
				<!-- </Title> -->
			</Section>
		{:else if isLg || isXl || isXxl}
			<Section
				align="start"
				style="background:{AX_CONST__FRAME_isDebugBg ? 'orange' : 'none'}"
			>
				<Title>AXELO</Title>
			</Section>
		{/if}

		<!-- =========== -->
		<!-- HEADER PLUGGED
		<!-- =========== -->
		<slot name="plugin--frame-header__1" />
	</Row>
</TopAppBar>

<!-- top-app-bar--content -->
<!-- place-items-center - le centrage du body se fait ici... changer si on ve NON centre -->
<!-- le conteneur root du content -->
<!-- style="border:{AX_CONST__FRAME_isDebugBorder ? '4px solid blue' : 'none'}" -->
<AutoAdjust
	{topAppBar}
	class="{AX_CONST__FRAME_isMobile}:flex"
	style="border:{borderRes}"
>
	<!-- ######################################################## -->

	<!-- tip: blockAnimDrawer -->
	<!-- tip: ax-drawer-width is scss -->
	<Drawer
		class="ax-drawer-width  "
		{variant}
		open={$AX_STORE__UI_ISOPEN_drawer}
	>
		<slot name="plugin--frame-drawer__1" />
	</Drawer>

	<!-- scrim -->
	{#if isXs || isSm || isMd}
		<Scrim
			on:click={() => {
				$AX_STORE__UI_ISOPEN_drawer = false;
			}}
			class=""
		/>
	{/if}

	<!-- ######################################################## -->
	<AppContent
		style="border:{AX_CONST__FRAME_isDebugBorder ? '4px solid purple' : 'none'}"
		class="  m-auto  py-5  px-2 "
	>
		<!-- tip: MAX LARGEUR ? -> max-w-6xl bg-red-400 -->
		<!-- ######################################################## -->
		<!-- TST -->
		<slot name="plugin--frame-body__1" />
		<!-- ######################################################## -->
	</AppContent>
	<!-- ######################################################## -->
</AutoAdjust>

<!-- <style>
	* :global(.app-content) {
		flex: auto;
		overflow: auto;
		position: relative;
		flex-grow: 1;
	}

	/* .mdc-drawer--opening */
	/* .blockAnimDrawer .mdc-drawer {
		animation: none !important;
	}
	* :global(.blockAnimDrawer) {
		animation: none !important;
		transition: none !important;
	}
	* :global(.mdc-drawer--opening) {
		animation: none !important;
		transition: none !important;
	} */
</style>
 -->
<script lang="ts">
	import Drawer, { AppContent } from '@smui/drawer';
	import Scrim from '@smui/drawer/src/Scrim.svelte';
	import IconButton from '@smui/icon-button';
	import TopAppBar, { AutoAdjust, Row, Section, Title } from '@smui/top-app-bar';
	import { browser } from '$app/environment';
	import { AX_STORE__UI_ISOPEN_drawer } from 'app/stores/AX_STORE__UI_isopen';
	import { AX_CONST__FRAME_URL_homeCms } from 'app/domain/DATACONST/config-uiFrame/AX_CONST__FRAME_urls';
	import {
		AX_CONST__FRAME_isDebugBg,
		AX_CONST__FRAME_isDebugBorder,
		AX_CONST__FRAME_isDebugResolutionmobile
	} from 'app/domain/DATACONST/config-uiFrame/AX_CONST__FRAME_debug';
	import { onMount } from 'svelte';
	import { AX_CONST__FRAME_isMobile } from 'app/domain/DATACONST/config-uiFrame/AX_CONST__FRAME_ui';

	let topAppBar;
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
	let borderRes = '0px solid black';
	export let isAdmin = false;
	// let variant: T_ui__dynvariant = isAdmin ? 'dismissible' : 'modal'; // drawer variant
	let variant: T_ui__dynvariant = isAdmin ? undefined : 'modal'; // drawer variant
	// <!-- .................. -->
	// <!-- tip responsive: drawer & responsive RULES -->
	// <!-- .................. -->
	$: {
		if (AX_CONST__FRAME_isDebugResolutionmobile)
			borderRes = isXs
				? '10px solid red'
				: isSm
				? '10px solid orange'
				: isMd
				? '10px solid yellow'
				: isLg
				? '10px solid green'
				: isXl
				? '10px solid blue'
				: isXxl
				? '10px solid cyan'
				: '0px solid black';
	}
	onMount(() => {
		// AXREMET
		if (isAdmin) $AX_STORE__UI_ISOPEN_drawer = true;
		else $AX_STORE__UI_ISOPEN_drawer = false;
		// variant = isXs || isSm ? 'modal' : 'dismissible';
	});

	//-------------------------------------------------------
	const toggleOpen = () => {
		$AX_STORE__UI_ISOPEN_drawer = !$AX_STORE__UI_ISOPEN_drawer;
	};
	//-------------------------------------------------------
	//press esc TO open/close drawer
	function handleNavWithKey(e) {
		if (e.code === 'Escape') {
			$AX_STORE__UI_ISOPEN_drawer = !$AX_STORE__UI_ISOPEN_drawer;
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
