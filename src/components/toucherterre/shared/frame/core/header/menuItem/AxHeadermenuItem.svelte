<!-- HEADER MENU ITEM -->
<!-- ######################################################## -->
<!-- ######################################## -->
{#if menu}
	<!-- <Item
		href={menu.url}
		on:click={() => {
			console.log('menu.url', menu ? menu.url : '');
		}}
	>
		<img
			class:uiDebug={AX_CONST__FRAME_isDebugBorder}
			class="mr-2 h-7  w-7"
			src={menu.img}
			alt=""
		/>
		<Text>
			{menu.title}
		</Text>
	</Item> -->
	<!-- id="header-menuitem--1" -->
	<Button
		href={menu.url}
		class="mr-5 border-2 font-bold hover:bg-white/50 hover:text-orange-800"
	>
		<!-- <a href={menu.url}> -->
		<Label style="">
			<!-- .................. -->
			<!-- tip responsive: icon desapear becoz not enought space -->
			<!-- .................. -->
			<img
				class:uiDebug={AX_CONST__FRAME_isDebugBorder}
				class="hidden h-5  w-5 {AX_CONST__FRAME_isMobile}:inline "
				src={menu.img}
				alt=""
			/>
			{menu.title}</Label
		>
		<!-- </a> -->
	</Button>
{/if}

<!-- on:click={() => {
	if (menu) setActive(menu.url);
}} -->
<!-- activated={active === menu.url} -->

<!-- </Item> -->
<style lang="postcss">
	.uiDebug {
		@apply border border-blue-500;
	}

	* :global(.mdc-button--raised) {
		background: #282728 !important;
	}
</style>

<script lang="ts">
	import { AX_CONST__FRAME_isDebugBorder } from 'app/domain/DATACONST/config-uiFrame/AX_CONST__FRAME_debug';
	import { page } from '$app/stores';
	import Button, { Label } from '@smui/button';
	import { Item } from '@smui/list';
	import { AX_CONST__FRAME_isMobile } from 'app/domain/DATACONST/config-uiFrame/AX_CONST__FRAME_ui';
	// ----------------------------------------------
	export let menu: I_ui__menu | undefined = undefined;
	// ................................................
	let active = $page.url.pathname;
	$: active = $page.url.pathname;
	// ------------------------------------------------
	// function setActive(value) {
	// 	active = value;
	// }
</script>
