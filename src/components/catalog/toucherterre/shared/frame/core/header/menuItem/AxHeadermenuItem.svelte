<script lang="ts">
	import { page } from '$app/stores';
	import { AX__UI__CONST_isDebugBorder } from '@app/domain/DATA/clientend/ui-frame/AX__UI__CONST_isDebugBorder';
	import Button, { Label } from '@smui/button';
	// ----------------------------------------------
	export let menu: I_ui__menu;
	// ..............................................
</script>

<!-- HEADER MENU ITEM -->
<!-- ######################################################## -->
<!-- on:click={() => setActive(menu.url)} activated={active === menu.url} -->
<!-- <img class:uiDebug={AX__UI__CONST_isDebugBorder} class="mr-2 h-7  w-7" src={menu.img} alt="" /> -->
<!-- <Graphic class="material-icons" aria-hidden="true">inbox</Graphic> -->
<!-- <Item href={menu.url}>
	<img
		class:uiDebug={AX__UI__CONST_isDebugBorder}
		class="hidden h-7  w-7  xl:inline"
		src={menu.img}
		alt=""
	/>
	<Text style="color:#E5B385">
		{menu.title}</Text
	>
</Item> -->
<!-- <Item class="inline-flex" href={menu.url}> -->
<Button
	variant={$page.url.pathname === menu.url ? 'raised' : 'outlined'}
	id="header-menuitem--1"
	href={menu.url}
>
	<Label style="color:#E5B385">
		<img
			class:uiDebug={AX__UI__CONST_isDebugBorder}
			class="hidden h-7  w-7  xl:inline"
			src={menu.img}
			alt=""
		/>
		{menu.title}</Label
	>
</Button>

<!-- </Item> -->
<style lang="postcss">
	.uiDebug {
		@apply border border-blue-500;
	}
</style>
