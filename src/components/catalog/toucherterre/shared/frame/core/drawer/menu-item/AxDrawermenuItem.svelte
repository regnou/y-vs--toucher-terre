{#if menu}
	<!-- DRAWER MENU ITEM -->
	<!-- ######################################################## -->
	<!-- <a id="drawer-menuItem--1" href={menu.url} class="w-full" rel="prefetch"> -->
	<Item
		href={menu.url}
		on:click={() => {
			if (menu) setActive(menu.url);
		}}
		activated={active === menu.url}
	>
		<img
			class:uiDebug={AX__UI__CONST_isDebugBorder}
			class="mr-2 h-7  w-7"
			src={menu.img}
			alt=""
		/>
		<!-- tip: can use a graphic ? -->
		<!-- <Graphic class="material-icons" aria-hidden="true">inbox</Graphic> -->
		<Text style="color: {isDark ? 'black' : 'white'}">
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
	import { AX__UI__CONST_isDebugBorder } from '@app/domain/DATA/clientend/ui-frame/AX__UI__CONST_isDebugBorder';
	import { STORE_UI__DRAWER_IS_OPEN } from '@app/stores/storeUiItems';
	import { Item, Text } from '@smui/list';
	// ------------------------------------------------
	export let menu: I_ui__menu | undefined = undefined;
	export let isDark = false;
	// ................................................
	let active = $page.url.pathname;
	$: active = $page.url.pathname;
	// ------------------------------------------------
	function setActive(value) {
		active = value;
		$STORE_UI__DRAWER_IS_OPEN = false;
	}
</script>
