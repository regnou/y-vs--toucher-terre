{#if menu}
	<!-- DRAWER MENU ITEM -->
	<!-- ######################################################## -->
	<!-- ######################################## -->

	<!-- <a id="drawer-menuItem--1" href={menu.url} class="w-full" rel="prefetch"> -->
	<!-- href item odes not work in TopAppBar -->
	<a href={menu.url}>
		<Item
			on:click={() => {
				if (menu) setActive(menu.url);
			}}
			activated={active === menu.url}
		>
			<img
				class:uiDebug={AX_CONST__FRAME_isDebugBorder}
				class="mr-2  h-10 w-10"
				src={menu.img?.replace('--creme', '')}
				alt=""
			/>
			<!-- tip: can use a graphic ? -->
			<!-- <Graphic class="material-icons" aria-hidden="true">inbox</Graphic> -->
			<!-- style="color: {isDark ? 'black' : 'white'}" -->
			<Text class="capitalize">
				{menu.title}
			</Text>
		</Item>
	</a>
	<!-- </a> -->
{/if}

<style lang="postcss">
	.uiDebug {
		@apply border border-blue-500;
	}
</style>

<script lang="ts">
	export let menu: I_ui__menu | undefined = undefined;
	let active = $page.url.pathname;
	import { page } from '$app/stores';
	import { Item, Text } from '@smui/list';
	import { AX_CONST__FRAME_isDebugBorder } from 'app/domain/DATACONST/config-uiFrame/AX_CONST__FRAME_debug';
	$: active = $page.url.pathname;
	// ------------------------------------------------
	function setActive(value) {
		if (active === value) return; // do not refresh if the same page !
		active = value;
	}
</script>
