<!-- ####################################### -->
<!-- ######################################################## -->
<!-- +################################### -->
<!-- FRAME (APP) -->
<!-- press ESC: to open/close the drawer -->
<svelte:window
	on:resize={handleResize}
	on:keydown={handleNavWithKey}
/>
<LayoutBg1>
	<!-- tip: ax-drawer-width is scss -->
	<Drawer
		variant="modal"
		open={$AX_STORE__UI_ISOPEN_drawer}
	>
		<AxDrawerApp />
	</Drawer>
	<!-- scrim -->
	<!-- {#if isXs || isSm || isMd} -->
	<Scrim
		on:click={() => {
			$AX_STORE__UI_ISOPEN_drawer = false;
		}}
		class=""
	/>
	<AppContent style="border:{AX_CONST__FRAME_isDebugBorder ? '4px solid purple' : 'none'}">
		<!-- ######################################################## -->
		<TopAppBar
			variant="fixed"
			bind:this={topAppBar}
			style="background:var(--mdc-theme-primary);
	border:{AX_CONST__FRAME_isDebugBorder ? '4px solid red' : 'none'}"
		>
			<Row>
				<!-- .................. -->
				<!-- tip responsive: icon desapear becoz not enought space -->
				<!-- .................. -->
				<Section
					style="background:{AX_CONST__FRAME_isDebugBg ? 'blue' : 'none'}"
					class="bg-blue-200 lg:hidden"
				>
					<!-- HAMBURGER - fait partis du chassi -->
					<IconButton
						class="material-icons"
						on:click={toggleOpen}
						>menu
					</IconButton>
				</Section>

				<!-- LOGO client -->
				<Section style="background:{AX_CONST__FRAME_isDebugBg ? 'orange' : 'none'}">
					<!-- <Title> -->
					<!-- .................. -->
					<!-- TIP: attention, lg:auto ==> hack => il faut adapter ici, je dois hack-->
					<!-- .................. -->
					<a
						class="m-auto flex w-max items-center lg:m-0  "
						href={AX_CONST__FRAME_URL_home}
					>
						<img
							class="h-10 w-10"
							src={AX_CONST__FRAME_favicon}
							alt=""
						/>
						{#if isXxl}
							<div class="ml-2">Toucher Terre</div>
						{/if}
					</a>
					<!-- </Title> -->
				</Section>

				<!-- HEADER PLUGGED -->
				<HeaderApp />
			</Row>
		</TopAppBar>
		<AutoAdjust
			{topAppBar}
			style="border:{borderRes}"
		>
			<slot />
			<!-- ######################################################## -->
		</AutoAdjust>
	</AppContent>
</LayoutBg1>

<script lang="ts">
	// let variant: T_ui__dynvariant = 'modal';
	let topAppBar;
	let borderRes = '0px solid black';
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
		axlog('🍃', $page.url.pathname, 'wc -- # axFrame #', false, 'MOUNT', true);
	});
	import { browser } from '$app/environment';
	// import { afterNavigate, beforeNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import Drawer, { AppContent } from '@smui/drawer';
	import Scrim from '@smui/drawer/src/Scrim.svelte';
	import IconButton from '@smui/icon-button';
	import TopAppBar, { AutoAdjust, Row, Section } from '@smui/top-app-bar';
	import {
		AX_CONST__FRAME_isDebugBg,
		AX_CONST__FRAME_isDebugBorder,
		AX_CONST__FRAME_isDebugResolutionmobile
	} from 'app/domain/DATACONST/config-uiFrame/AX_CONST__FRAME_debug';
	import { AX_CONST__FRAME_favicon } from 'app/domain/DATACONST/config-uiFrame/AX_CONST__FRAME_ui';
	import { AX_CONST__FRAME_URL_home } from 'app/domain/DATACONST/config-uiFrame/AX_CONST__FRAME_urls';
	import { AX_STORE__UI_ISOPEN_drawer } from 'app/stores/AX_STORE__UI_isopen';
	import { axlog } from 'app/utils/axLog';
	import { onMount } from 'svelte';
	import AxDrawerApp from '../shared/frame/core/drawer/AxDrawerApp.svelte';
	import HeaderApp from '../shared/frame/core/header/AxHeaderApp.svelte';
	import LayoutBg1 from './AxLayoutbg1.svelte';
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
