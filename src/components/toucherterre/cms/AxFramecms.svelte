<!-- ####################################### -->
<!-- ######################################################## -->
<!-- ####################################################### -->
<!-- FRAME (CMS)  -->
<!-- press ESC: to open/close the drawer -->
<svelte:window
	on:resize={handleResize}
	on:keydown={handleNavWithKey}
/>
<TopAppBar
	variant="fixed"
	class="z-10"
	bind:this={topAppBar}
	style="background:var(--mdc-theme-error);     
	border:{AX_CONST__FRAME_isDebugBorder ? '4px solid red' : 'none'}"
>
	<!-- ######################################################## -->

	<Row>
		<!-- =========== -->
		<!-- HAMBURGER - fait partis du chassi -->
		<!-- =========== -->
		<!-- .................. -->
		<!-- tip responsive: icon desapear becoz not enought space -->
		<!-- .................. -->
		<!-- <Section
			style="background:{AX_CONST__FRAME_isDebugBg ? 'blue' : 'none'}"
			class="bg-blue-200 lg:hidden"
		>
			<IconButton
				class="material-icons"
				on:click={toggleOpen}
				>menu
			</IconButton>
		</Section> -->
		<!-- LOGO AXELO -->
		{#if isLg || isXl || isXxl}
			<Section
				align="start"
				style="background:{AX_CONST__FRAME_isDebugBg ? 'orange' : 'none'}"
			>
				<Title>AXELO</Title>
			</Section>
		{/if}
		<!-- HEADER PLUGGED -->
		<HeaderCms
			bind:dataArrDumb
			{megaconfig}
		/>
	</Row>
</TopAppBar>
<!-- class="lg:flex lg:h-screen lg:overflow-hidden" -->
<!-- {AX_CONST__FRAME_isMobile}: -->
<AutoAdjust
	{topAppBar}
	style=" border:{borderRes}"
	class="h-[calc(100vh)] overflow-hidden lg:flex "
>
	<!-- ######################################################## -->
	<!-- tip: ax-drawer-width is scss -->
	<Drawer
		style=""
		class="ax-drawer-width  "
		open={$AX_STORE__UI_ISOPEN_drawer}
	>
		<AxDrawerCms
			bind:dataArrDumb
			{megaconfig}
		/>
	</Drawer>
	<AppContent
		class="m-5 overflow-y-scroll p-5"
		style="  background: #C16B38; border:{AX_CONST__FRAME_isDebugBorder
			? '4px solid purple'
			: 'none'}"
	>
		<slot name="app" />
		<!-- ######################################################## -->
	</AppContent>
</AutoAdjust>

<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import Drawer, { AppContent } from '@smui/drawer';
	import Scrim from '@smui/drawer/src/Scrim.svelte';
	import IconButton from '@smui/icon-button';
	import TopAppBar, { AutoAdjust, Row, Section, Title } from '@smui/top-app-bar';
	import {
		AX_CONST__FRAME_isDebugBg,
		AX_CONST__FRAME_isDebugBorder,
		AX_CONST__FRAME_isDebugResolutionmobile
	} from 'app/domain/DATACONST/config-uiFrame/AX_CONST__FRAME_debug';
	import { AX_CONST__FRAME_isMobile } from 'app/domain/DATACONST/config-uiFrame/AX_CONST__FRAME_ui';
	import { AX_STORE__UI_ISOPEN_drawer } from 'app/stores/AX_STORE__UI_isopen';
	import { axlog } from 'app/utils/axLog';
	import { onMount } from 'svelte';
	import AxDrawerCms from '../shared/frame/core/drawer/AxDrawerCms.svelte';
	import HeaderCms from '../shared/frame/core/header/AxHeaderCms.svelte';
	export let megaconfig: I_megaconfig__cms<T_pageItemStore> | undefined = undefined;
	// tip: this prop exists becoz it give us the ability to bind the APP-component (that will load the data), and the admin CMS that will modify them
	export let dataArrDumb: T_pageItemStore[] | undefined = undefined;
	// ............................................
	// let variant: T_ui__dynvariant = undefined;
	let topAppBar;
	let borderRes = '0px solid black';
	// ............................................
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
	// ............................................
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
	onMount(() => {
		axlog(undefined, $page.url.pathname, 'wc -- axFrame CMS');
		$AX_STORE__UI_ISOPEN_drawer = true;
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
