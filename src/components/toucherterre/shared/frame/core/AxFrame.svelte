<!-- ######################################################## -->
<!-- FRAME -->
<!-- ######################################################## -->
<!-- ######################################## -->

<!-- press ESC: to open/close the drawer -->
<svelte:window
	on:resize={handleResize}
	on:keydown={handleNavWithKey}
/>

<!-- scrim -->
{#if isXs || isSm}
	<Scrim
		on:click={() => ($AX_STORE__UI_ISOPEN_drawer = false)}
		class=""
	>
		<div class="h-full w-full " /></Scrim
	>
{/if}

<!-- @apply bg-orange-900/60; -->
<!-- 2) HEADER -->
<!-- ######################################################## -->
<!-- style="background-color:{isAdmin ? 'rgb(24 149 5 / 79%)' : 'rgba(130,65,31,0.8)'}; -->
<!-- style="border:{AX_CONST__FRAME_isDebugBorder ? '4px solid red' : 'none'}" -->

<TopAppBar
	bind:this={topAppBar}
	variant="fixed"
	style="border:{AX_CONST__FRAME_isDebugBorder ? '4px solid red' : 'none'}"
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
					href={AX_CONST__FRAME_homeUrl}
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
		{:else if !matches(xs)}
			<Section style="background:{AX_CONST__FRAME_isDebugBg ? 'orange' : 'none'}">
				<Title>AXELO</Title>
			</Section>
		{/if}

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
<!-- style="border:{AX_CONST__FRAME_isDebugBorder ? '4px solid blue' : 'none'}" -->
<AutoAdjust
	{topAppBar}
	style="border:{borderRes}"
>
	<!-- 1) DRAWER -->
	<!-- ######################################################## -->
	<Drawer
		{variant}
		open={$AX_STORE__UI_ISOPEN_drawer}
		class="ax-drawer-width fixed"
	>
		<!-- +................. -->

		<slot name="plugin--frame-drawer--1" />
	</Drawer>

	<AppContent class="py-5 px-2">
		<!-- JOJO -->
		<!-- en purple, il s agit de la max largeur... -->
		<!-- tip: MAX LARGEUR ? -> max-w-6xl bg-red-400 -->
		<div
			class="m-auto "
			style="border:{AX_CONST__FRAME_isDebugBorder ? '4px solid purple' : 'none'}"
		>
			<!-- SLOT: BODY  -->
			<!-- +................. -->
			<slot name="plugin--frame-body--1" />
		</div>
	</AppContent>
</AutoAdjust>

<script lang="ts">
	import { AX_STORE__UI_ISOPEN_drawer } from '@app/stores/AX_STORE__UI_isopen';
	import Drawer, { AppContent } from '@smui/drawer';
	import Scrim from '@smui/drawer/src/Scrim.svelte';
	import IconButton from '@smui/icon-button';
	import TopAppBar, { AutoAdjust, Row, Section, Title } from '@smui/top-app-bar';
	import { browser } from '$app/environment';
	import {
		AX_CONST__FRAME_isDebugBg,
		AX_CONST__FRAME_isDebugBorder,
		AX_CONST__FRAME_isDebugResolutionmobile
	} from '@app/domain/DATACONST/config-uiFrame/AX_CONST__FRAME_debug';
	import { AX_CONST__FRAME_homeUrl } from '@app/domain/DATACONST/config-uiFrame/AX_CONST__FRAME_homeUrl';
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

	let borderRes = '0px solid black';
	$: console.log('AX_CONST__FRAME_isMobile', AX_CONST__FRAME_isDebugResolutionmobile);

	//. . . . . . . . . . . . . . . . . . . . . . . . . . . .
	// $: $AX_STORE__UI_ISOPEN_drawer = isAdmin && !isXs && !isSm ? true : false; // always open first in admin
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

	$: {
		// tip: app => never drawer
		if (!isAdmin) $AX_STORE__UI_ISOPEN_drawer = false;
		else $AX_STORE__UI_ISOPEN_drawer = true;
		// tip: cms => auto resize
		// if (!isAdmin && !isXs && !isSm) {
		// if (isAdmin && !isXs && !isSm) {
		// $AX_STORE__UI_ISOPEN_drawer = true;
		// console.log('> isAdmin && !isXs && !isSm: ', isAdmin && !isXs && !isSm);
		// }
		// console.log('> drawer open: ', $AX_STORE__UI_ISOPEN_drawer);
	}
	//. . . . . . . . . . . . . . . . . . . . . . . . . . . .
	// DEFINITIO DU TYPE DE DRAWER
	//. . . . . . . . . . . . . . . . . . . . . . . . . . . .
	$: {
		variant = isXs || isSm ? 'modal' : 'dismissible';
	}
	//-------------------------------------------------------
	const toggleOpen = () => {
		$AX_STORE__UI_ISOPEN_drawer = !$AX_STORE__UI_ISOPEN_drawer;
		console.log('HAMBURGER pressed !');
	};
	//-------------------------------------------------------
	//press esc TO open/close drawer
	function handleNavWithKey(e) {
		if (e.code === 'Escape') {
			$AX_STORE__UI_ISOPEN_drawer = !$AX_STORE__UI_ISOPEN_drawer;
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
