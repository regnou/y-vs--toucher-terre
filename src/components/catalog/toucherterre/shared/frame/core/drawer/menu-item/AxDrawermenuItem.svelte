<script lang="ts">
	import { page } from '$app/stores';
	import { AX__UI__CONST_isDebugBorder } from '@app/domain/DATA/clientend/ui-frame/AX__UI__CONST_isDebugBorder';
	import { STORE_UI__DRAWER_IS_OPEN } from '@app/stores/storeUiItems';
	import { Graphic, Item, Text } from '@smui/list';
	// ------------------------------------------------
	export let menu: I_ui__menu | undefined = undefined;
	// ................................................
	let active = $page.url.pathname;
	$: active = $page.url.pathname;
	// ------------------------------------------------
	function setActive(value) {
		active = value;
		$STORE_UI__DRAWER_IS_OPEN = false;
	}
</script>

{#if menu}
	<!-- DRAWER MENU ITEM -->
	<!-- ######################################################## -->
	<!-- <a id="drawer-menuItem--1" href={menu.url} class="w-full" rel="prefetch"> -->
	<Item href={menu.url} on:click={() => setActive(menu.url)} activated={active === menu.url}>
		<img class:uiDebug={AX__UI__CONST_isDebugBorder} class="mr-2 h-7  w-7" src={menu.img} alt="" />
		<!-- <Graphic class="material-icons" aria-hidden="true">inbox</Graphic> -->
		<Text>
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
