<!-- ####################################################### -->
<!-- FRAME (CMS)                             -->
<!-- ####################################### -->
<!-- press ESC: to open/close the drawer -->
<svelte:window
	on:resize={handleResize}
	on:keydown={handleNavWithKey}
/>
<!-- ######################################################## -->
<!-- HEADER -->
<!-- ######################################################## -->

<TopAppBar
	variant="fixed"
	class="z-10"
	bind:this={topAppBar}
	style="background:var(--mdc-theme-error);     
	border:{AX_CONST__FRAME__isDebugBorder ? '4px solid red' : 'none'}"
>
	<Row>
		<AxHeaderCms />
	</Row>
</TopAppBar>

<!-- tip: LG:FLEX est vital, pour avoir l admin a cote du drawer -->
<AutoAdjust
	{topAppBar}
	style="border:{borderRes}"
	class="h-[calc(100vh)] overflow-hidden lg:flex "
>
	<!-- ######################################################## -->
	<!-- DRAWER -->
	<!-- ######################################################## -->
	<!-- tip: ax-drawer-width is scss -->
	<Drawer
		style=""
		class="ax-drawer-width  "
		open={$AX_STORE__FRAME_drawerIsOpen}
	>
		<AxDrawerCms />
	</Drawer>
	<!-- ######################################################## -->
	<!-- CONTENT -->
	<!-- ######################################################## -->
	<AppContent
		class="m-5 overflow-y-scroll p-5"
		style="  background: #C16B38; border:{AX_CONST__FRAME__isDebugBorder ? '4px solid purple' : 'none'}"
	>
		<slot name="app" />
	</AppContent>
</AutoAdjust>

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
<script lang="ts">
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
		axlog($AX_STORE__CONTENT, $page.url.pathname, 'wc -- (((((( FRAME ))))))', false, 'MOUNT', true);
		$AX_STORE__FRAME_drawerIsOpen = true;
	});
	$: {
		// <!-- .................. -->
		// <!-- tip responsive: drawer & responsive RULES -->
		// <!-- .................. -->
		if (AX_CONST__FRAME__isDebugResolutionmobile) borderRes = isXs ? '10px solid red' : isSm ? '10px solid orange' : isMd ? '10px solid yellow' : isLg ? '10px solid green' : isXl ? '10px solid blue' : isXxl ? '10px solid cyan' : '0px solid black';
	}
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import Drawer, { AppContent } from '@smui/drawer';
	import TopAppBar, { AutoAdjust, Row } from '@smui/top-app-bar';
	import { AX_CONST__FRAME__isDebugBorder, AX_CONST__FRAME__isDebugResolutionmobile } from 'app/0-config/config-frame/AX_CONST__FRAME__debug';
	import { axlog } from 'app/lib/utils/axLog';
	import { AX_STORE__CONTENT } from 'app/stores/AX_BASE1__STORE_CONTENT';
	import { AX_STORE__FRAME_drawerIsOpen } from 'app/stores/AX_STORE__frame';
	import { onMount } from 'svelte';
	import AxDrawerCms from './AxDrawerCms.svelte';
	import AxHeaderCms from './AxHeaderCms.svelte';
	//press esc TO open/close drawer
	function handleNavWithKey(e) {
		if (e.code === 'Escape') {
			$AX_STORE__FRAME_drawerIsOpen = !$AX_STORE__FRAME_drawerIsOpen;
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
