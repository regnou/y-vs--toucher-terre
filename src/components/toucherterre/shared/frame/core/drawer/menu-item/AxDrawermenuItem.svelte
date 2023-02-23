{#if menu}
	<!-- DRAWER MENU ITEM -->
	<!-- ######################################################## -->
	<!-- ######################################## -->

	<!-- <a id="drawer-menuItem--1" href={menu.url} class="w-full" rel="prefetch"> -->
	<Item
		href={menu.url}
		on:click={() => {
			if (menu) setActive(menu.url);
		}}
		activated={active === menu.url}
	>
		<img
			class:uiDebug={AX_CONST__FRAME_isDebugBorder}
			class="mr-2 h-7  w-7"
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
	<!-- </a> -->
{/if}

<style lang="postcss">
	.uiDebug {
		@apply border border-blue-500;
	}
</style>

<script lang="ts">
	import { page } from '$app/stores';
	import { AX_CONST__FRAME_isDebugBorder } from '@app/domain/DATACONST/config-uiFrame/AX_CONST__FRAME_debug';
	import { AX_STORE__UI_ISOPEN_drawer } from '@app/stores/AX_STORE__UI_isopen';
	import { Item, Text } from '@smui/list';
	// ------------------------------------------------
	export let menu: I_ui__menu | undefined = undefined;
	// export let isDark = false;
	// ................................................
	let active = $page.url.pathname;
	$: active = $page.url.pathname;
	// ------------------------------------------------
	function setActive(value) {
		active = value;
		$AX_STORE__UI_ISOPEN_drawer = false;
	}
</script>
