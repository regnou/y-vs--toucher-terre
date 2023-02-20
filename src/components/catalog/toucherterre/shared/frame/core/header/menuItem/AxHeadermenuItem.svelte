<!-- HEADER MENU ITEM -->
<!-- ######################################################## -->

{#if menu}
	<!-- <Item
		href={menu.url}
		on:click={() => {
			console.log('menu.url', menu ? menu.url : '');
		}}
	>
		<img
			class:uiDebug={AX__UI__CONST_isDebugBorder}
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
		<Label style="color:var(--ax-client__color-0--light)">
			<!-- .................. -->
			<!-- tip responsive: icon desapear becoz not enought space -->
			<!-- .................. -->
			<img
				class:uiDebug={AX__UI__CONST_isDebugBorder}
				class="hidden h-5  w-5 lg:inline "
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
	import { AX__UI__CONST_isDebugBorder } from '@app/domain/DATA/clientend/ui-frame/AX__UI__CONST_isDebugBorder';
	import Button, { Label } from '@smui/button';
	import { Item, Text } from '@smui/list';
	// ----------------------------------------------
	export let menu: I_ui__menu | undefined = undefined;
	// ................................................
	let active = $page.url.pathname;
	$: active = $page.url.pathname;

	$: console.log('menu', menu);
	// ------------------------------------------------
	function setActive(value) {
		active = value;
	}
</script>
