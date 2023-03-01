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

		<!-- HEADER PLUGGED -->
		<!-- tip: IMMUABLE : pas de bind, car, le btn save ne fais que save l etat du store -->
		<AxHeaderCms
			{_DAB_}
			{_M_}
		/>
	</Row>
</TopAppBar>
<!-- tip: LG:FLEX est vital, pour avoir l admin a cote du drawer -->
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
			bind:_DAB_
			{_M_}
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
	export let _M_: I_DB_CONFIG<T_GLOBAL_ENTITIES, T_GLOBAL_DTOS> | undefined = undefined;
	export let _DAB_: T_GLOBAL_ENTITIES[] | undefined = undefined;
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
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import Drawer, { AppContent } from '@smui/drawer';
	import TopAppBar, { AutoAdjust, Row } from '@smui/top-app-bar';
	import {
		AX_CONST__FRAME_isDebugBorder,
		AX_CONST__FRAME_isDebugResolutionmobile
	} from 'app/domain/DATACONST/config-uiFrame/AX_CONST__FRAME_debug';
	import { AX_STORE__UI_ISOPEN_drawer } from 'app/stores/AX_STORE__UI_isopen';
	import { axlog } from 'app/utils/axLog';
	import { onMount } from 'svelte';
	import AxDrawerCms from '../shared/frame/core/drawer/AxDrawerCms.svelte';
	import AxHeaderCms from '../shared/frame/core/header/AxHeaderCms.svelte';
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
