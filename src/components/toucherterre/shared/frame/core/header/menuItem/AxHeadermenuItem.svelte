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
	<Button
		variant={$page.url.pathname === menu.url ? 'raised' : 'text'}
		id="header-menuitem--1"
		href={menu.url}
		class="mr-5"
	>
		<Label style="">
			<!-- .................. -->
			<!-- tip responsive: icon desapear becoz not enought space -->
			<!-- .................. -->
			<img
				class:uiDebug={AX_CONST__FRAME_isDebugBorder}
				class="hidden h-5  w-5 xl:inline "
				src={menu.img}
				alt=""
			/>
			{menu.title}</Label
		>
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
</style>

<script lang="ts">
	import { page } from '$app/stores';
	import { AX_CONST__FRAME_isDebugBorder } from '@app/domain/DATACONST/config-uiFrame/AX_CONST__FRAME_debug';
	import Button, { Label } from '@smui/button';
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
