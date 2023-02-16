<script lang="ts">
	import { page } from '$app/stores';
	import { AX__CONST__isDebugBorder } from '@app/domain/DATA/clientend/ui-frame/AX__CONST__isDebugBorder';
	import Button, { Label } from '@smui/button';
	// ----------------------------------------------
	export let menu: I_ui__menu;

	// ..............................................
</script>

<!-- ########################################### -->
<!-- HEADER MENU ITEM -->
<!-- ########################################### -->
<Button
	variant={$page.url.pathname === menu.url ? 'raised' : 'outlined'}
	id="header-menuitem-1"
	href={menu.url}
>
	<Label style="color:#E5B385">
		<img
			class:uiDebug={AX__CONST__isDebugBorder}
			class="hidden h-7  w-7  lg:inline"
			src={menu.img}
			alt=""
		/>
		{menu.title}</Label
	>
</Button>

<!-- ui-border--1 -->
<style lang="postcss">
	.uiDebug {
		@apply border border-blue-500;
	}
</style>
