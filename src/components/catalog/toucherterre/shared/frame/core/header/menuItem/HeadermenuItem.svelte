<script lang="ts">
	import { page } from '$app/stores';
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
		<img class="hidden h-7  w-7 border lg:inline" src={menu.img} alt="" />
		{menu.title}</Label
	>
</Button>
